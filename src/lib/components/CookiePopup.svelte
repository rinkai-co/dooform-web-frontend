<script lang="ts">
	import { onMount } from 'svelte';
	import { X } from '@lucide/svelte';

	// Extend Window interface for GTM
	declare global {
		interface Window {
			dataLayer: any[];
			gtag: (...args: any[]) => void;
		}
	}

	let showPopup = $state(false);
	let showPreferences = $state(false);

	interface CookiePreferences {
		necessary: boolean;
		analytics: boolean;
		marketing: boolean;
	}

	let preferences = $state<CookiePreferences>({
		necessary: true,
		analytics: false,
		marketing: false
	});

	onMount(() => {
		const consent = localStorage.getItem('cookie-consent');
		if (!consent) {
			setTimeout(() => {
				showPopup = true;
			}, 1000);
		} else {
			preferences = JSON.parse(consent);
			// Apply saved consent to GTM
			updateGTMConsent();
		}
	});

	function acceptAll() {
		preferences = {
			necessary: true,
			analytics: true,
			marketing: true
		};
		savePreferences();
	}

	function acceptNecessary() {
		preferences = {
			necessary: true,
			analytics: false,
			marketing: false
		};
		savePreferences();
	}

	function savePreferences() {
		localStorage.setItem('cookie-consent', JSON.stringify(preferences));
		localStorage.setItem('cookie-consent-date', new Date().toISOString());

		// Update GTM consent
		updateGTMConsent();

		showPopup = false;
		showPreferences = false;
	}

	function updateGTMConsent() {
		if (typeof window === 'undefined') return;

		// Update Google Consent Mode v2
		if (window.gtag) {
			window.gtag('consent', 'update', {
				analytics_storage: preferences.analytics ? 'granted' : 'denied',
				ad_storage: preferences.marketing ? 'granted' : 'denied',
				ad_user_data: preferences.marketing ? 'granted' : 'denied',
				ad_personalization: preferences.marketing ? 'granted' : 'denied',
				functionality_storage: 'granted',
				personalization_storage: preferences.analytics ? 'granted' : 'denied',
				security_storage: 'granted'
			});
		}

		// Push to dataLayer for GTM
		if (window.dataLayer) {
			window.dataLayer.push({
				event: 'cookie_consent_update',
				cookie_consent: {
					necessary: preferences.necessary,
					analytics: preferences.analytics,
					marketing: preferences.marketing
				}
			});
		}

		console.log('GTM consent updated:', preferences);
	}

	function closePopup() {
		showPopup = false;
	}
</script>

{#if showPopup}
	<div
		class="fixed inset-0 z-100 flex items-end justify-center bg-black/20 backdrop-blur-sm sm:items-center"
	>
		<div
			class="relative mx-4 mb-4 w-full max-w-2xl rounded-2xl border border-qt-700/20 bg-white p-6 font-sans shadow-2xl sm:mb-0 sm:p-8"
		>
			<button
				onclick={closePopup}
				class="absolute right-4 top-4 rounded-full p-1 text-ms-500 transition-colors hover:bg-qt-600 hover:text-on-900"
				aria-label="ปิด"
			>
				<X class="h-5 w-5" />
			</button>

			{#if !showPreferences}
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<h2 class="tp-h2 text-on-900">🍪 เราใช้คุกกี้</h2>
						<p class="tp-body text-ms-600">
							เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งาน วิเคราะห์การใช้งาน
							และนำเสนอเนื้อหาที่เหมาะสมกับคุณ
							คุณสามารถเลือกประเภทคุกกี้ที่ยอมรับได้ในการตั้งค่า
						</p>
					</div>

					<div class="flex flex-col gap-3 sm:flex-row">
						<button
							onclick={acceptAll}
							class="flex-1 rounded-full bg-on-900 px-6 py-3 text-sm font-semibold text-ag-600 transition-all hover:bg-on-800 hover:shadow-lg"
						>
							ยอมรับทั้งหมด
						</button>
						<button
							onclick={acceptNecessary}
							class="flex-1 rounded-full border-2 border-on-900 bg-transparent px-6 py-3 text-sm font-semibold text-on-900 transition-all hover:bg-qt-600"
						>
							จำเป็นเท่านั้น
						</button>
						<button
							onclick={() => (showPreferences = true)}
							class="flex-1 rounded-full border border-qt-700 bg-transparent px-6 py-3 text-sm font-medium text-ms-600 transition-all hover:border-on-900 hover:text-on-900"
						>
							ตั้งค่า
						</button>
					</div>

					<a
						href="/privacy"
						class="footer-link tp-tools text-center text-ms-500 hover:text-on-900"
					>
						อ่านนโยบายการจัดเก็บข้อมูล
					</a>
				</div>
			{:else}
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-2">
						<h2 class="tp-h2 text-on-900">ตั้งค่าคุกกี้</h2>
						<p class="tp-tools text-ms-600">
							เลือกประเภทคุกกี้ที่คุณต้องการยอมรับ
						</p>
					</div>

					<div class="flex flex-col gap-4">
						<!-- Necessary Cookies -->
						<div class="flex items-start gap-4 rounded-xl border border-qt-700/30 bg-qt-100 p-4">
							<input
								type="checkbox"
								id="necessary"
								bind:checked={preferences.necessary}
								disabled
								class="mt-1 h-5 w-5 rounded accent-on-900"
							/>
							<div class="flex flex-col gap-1">
								<label for="necessary" class="tp-h-sub font-semibold text-on-900">
									คุกกี้ที่จำเป็น
									<span class="tp-tools ml-2 text-ms-500">(บังคับ)</span>
								</label>
								<p class="tp-tools text-ms-600">
									คุกกี้ที่จำเป็นสำหรับการทำงานพื้นฐานของเว็บไซต์
									เช่น การเข้าสู่ระบบและความปลอดภัย
								</p>
							</div>
						</div>

						<!-- Analytics Cookies -->
						<div class="flex items-start gap-4 rounded-xl border border-qt-700/30 bg-white p-4">
							<input
								type="checkbox"
								id="analytics"
								bind:checked={preferences.analytics}
								class="mt-1 h-5 w-5 rounded accent-on-900"
							/>
							<div class="flex flex-col gap-1">
								<label for="analytics" class="tp-h-sub font-semibold text-on-900">
									คุกกี้เพื่อการวิเคราะห์
								</label>
								<p class="tp-tools text-ms-600">
									ช่วยให้เราเข้าใจวิธีการใช้งานเว็บไซต์เพื่อปรับปรุงประสบการณ์ของคุณ
								</p>
							</div>
						</div>

						<!-- Marketing Cookies -->
						<div class="flex items-start gap-4 rounded-xl border border-qt-700/30 bg-white p-4">
							<input
								type="checkbox"
								id="marketing"
								bind:checked={preferences.marketing}
								class="mt-1 h-5 w-5 rounded accent-on-900"
							/>
							<div class="flex flex-col gap-1">
								<label for="marketing" class="tp-h-sub font-semibold text-on-900">
									คุกกี้เพื่อการตลาด
								</label>
								<p class="tp-tools text-ms-600">
									ใช้เพื่อแสดงโฆษณาและเนื้อหาที่เกี่ยวข้องกับความสนใจของคุณ
								</p>
							</div>
						</div>
					</div>

					<div class="flex flex-col gap-3 sm:flex-row">
						<button
							onclick={savePreferences}
							class="flex-1 rounded-full bg-on-900 px-6 py-3 text-sm font-semibold text-ag-600 transition-all hover:bg-on-800 hover:shadow-lg"
						>
							บันทึกการตั้งค่า
						</button>
						<button
							onclick={() => (showPreferences = false)}
							class="flex-1 rounded-full border border-qt-700 bg-transparent px-6 py-3 text-sm font-medium text-ms-600 transition-all hover:border-on-900 hover:text-on-900"
						>
							ย้อนกลับ
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
