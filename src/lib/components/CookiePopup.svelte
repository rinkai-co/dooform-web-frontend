<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

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
		// Treat closing the popup as accepting necessary cookies only
		acceptNecessary();
	}
</script>

{#if showPopup}
	{#if !showPreferences}
		<!-- Main Cookie Banner -->
		<div
			class="fixed bottom-0 left-0 right-0 z-100 bg-white shadow-2xl"
			transition:fly={{ y: 100, duration: 400 }}
		>
			<div class="mx-auto max-w-7xl px-6 py-6 font-sans sm:px-8 sm:py-8">
				<h2 class="tp-h3 mb-4 text-on-900">เกี่ยวกับคุกกี้บน Dooform</h2>

				<div class="mb-6">
					<p class="tp-body text-ms-600">
						ยินดีต้อนรับ! เว็บไซต์นี้ใช้คุกกี้เพื่อวัดการเข้าใช้งานเว็บไซต์
						เพื่อปรับปรุงการทำงานและการบริหารจัดการ และด้วยความยินยอมของคุณ
						เพื่อประเมินประสิทธิภาพของแคมเปญข้อมูลภาครัฐและปรับปรุงประสบการณ์ผู้ใช้ของคุณ
						รวมถึงเพื่อนำเสนอบริการเชิงโต้ตอบที่จัดทำโดยพันธมิตรของเรา เราจะเก็บตัวเลือกของคุณไว้ 6
						เดือน คุณสามารถเปลี่ยนตัวเลือกนี้ได้ทุกเมื่อโดยไปที่หน้า
						<a href="/privacy" class="text-sp-500 underline hover:text-sp-600"
							>นโยบายความเป็นส่วนตัวและคุกกี้</a
						>
					</p>
				</div>

				<ul class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
					<li>
						<button
							onclick={() => (showPreferences = true)}
							class="w-full rounded-lg border-2 border-on-900 bg-transparent px-6 py-3 text-sm font-medium text-on-900 transition-all hover:bg-qt-600 sm:w-auto"
							aria-label="ปรับแต่ง"
							type="button"
						>
							ปรับแต่ง
						</button>
					</li>
					<li>
						<button
							onclick={acceptNecessary}
							class="w-full rounded-lg border-2 border-on-900 bg-transparent px-6 py-3 text-sm font-medium text-on-900 transition-all hover:bg-qt-600 sm:w-auto"
							aria-label="ปฏิเสธทั้งหมด"
							type="button"
						>
							ปฏิเสธทั้งหมด
						</button>
					</li>
					<li>
						<button
							onclick={acceptAll}
							class="w-full rounded-lg bg-on-900 px-6 py-3 text-sm font-semibold text-ag-600 transition-all hover:bg-on-800 hover:shadow-lg sm:w-auto"
							aria-label="ยอมรับทั้งหมด"
							type="button"
						>
							ยอมรับทั้งหมด
						</button>
					</li>
				</ul>
			</div>
		</div>
	{:else}
		<!-- Preferences Modal -->
		<div
			class="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
			transition:fade={{ duration: 300 }}
		>
			<div
				class="relative w-full max-w-3xl rounded-xl bg-white p-6 font-sans shadow-2xl sm:p-8"
				transition:fly={{ y: 50, duration: 400 }}
			>
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-2">
						<h2 class="tp-h2 text-on-900">ตั้งค่าคุกกี้</h2>
						<p class="tp-body text-ms-600">เลือกประเภทคุกกี้ที่คุณต้องการยอมรับ</p>
					</div>

					<div class="flex flex-col gap-4">
						<!-- Necessary Cookies -->
						<div class="rounded-lg border border-qt-700/30 bg-qt-100 p-4">
							<div class="flex items-start gap-4">
								<input
									type="checkbox"
									id="necessary"
									bind:checked={preferences.necessary}
									disabled
									class="mt-1 h-5 w-5 rounded accent-on-900"
								/>
								<div class="flex flex-1 flex-col gap-1">
									<label for="necessary" class="tp-h-sub font-semibold text-on-900">
										คุกกี้ที่จำเป็น
										<span class="tp-tools ml-2 font-normal text-ms-500">(บังคับ)</span>
									</label>
									<p class="tp-tools text-ms-600">
										คุกกี้ที่จำเป็นสำหรับการทำงานพื้นฐานของเว็บไซต์ เช่น การเข้าสู่ระบบและความปลอดภัย
									</p>
								</div>
							</div>
						</div>

						<!-- Analytics Cookies -->
						<div class="rounded-lg border border-qt-700/30 bg-white p-4">
							<div class="flex items-start gap-4">
								<input
									type="checkbox"
									id="analytics"
									bind:checked={preferences.analytics}
									class="mt-1 h-5 w-5 rounded accent-on-900"
								/>
								<div class="flex flex-1 flex-col gap-1">
									<label for="analytics" class="tp-h-sub font-semibold text-on-900">
										คุกกี้เพื่อการวิเคราะห์
									</label>
									<p class="tp-tools text-ms-600">
										ช่วยให้เราเข้าใจวิธีการใช้งานเว็บไซต์เพื่อปรับปรุงประสบการณ์ของคุณ
									</p>
								</div>
							</div>
						</div>

						<!-- Marketing Cookies -->
						<div class="rounded-lg border border-qt-700/30 bg-white p-4">
							<div class="flex items-start gap-4">
								<input
									type="checkbox"
									id="marketing"
									bind:checked={preferences.marketing}
									class="mt-1 h-5 w-5 rounded accent-on-900"
								/>
								<div class="flex flex-1 flex-col gap-1">
									<label for="marketing" class="tp-h-sub font-semibold text-on-900">
										คุกกี้เพื่อการตลาด
									</label>
									<p class="tp-tools text-ms-600">
										ใช้เพื่อแสดงโฆษณาและเนื้อหาที่เกี่ยวข้องกับความสนใจของคุณ
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
						<button
							onclick={() => (showPreferences = false)}
							class="rounded-lg border-2 border-on-900 bg-transparent px-6 py-3 text-sm font-medium text-on-900 transition-all hover:bg-qt-600"
							type="button"
						>
							ย้อนกลับ
						</button>
						<button
							onclick={savePreferences}
							class="rounded-lg bg-on-900 px-6 py-3 text-sm font-semibold text-ag-600 transition-all hover:bg-on-800 hover:shadow-lg"
							type="button"
						>
							บันทึกการตั้งค่า
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
{/if}
