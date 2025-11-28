<script>
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import CompanyLogos from '$lib/components/landing/CompanyLogos.svelte';
	import DocumentSection from '$lib/components/landing/DocumentSection.svelte';
	import APIIntegration from '$lib/components/landing/APIIntegration.svelte';
	import FileHistory from '$lib/components/landing/FileHistory.svelte';
	import FeaturesGrid from '$lib/components/landing/FeaturesGrid.svelte';
	import OtherServices from '$lib/components/landing/OtherServices.svelte';
	import PricingSection from '$lib/components/landing/PricingSection.svelte';
	import SignUpSection from '$lib/components/landing/SignUpSection.svelte';
</script>

<main>
	<div
		class="mx-auto flex h-screen w-full max-w-[1216px] flex-col items-center justify-center rounded-2xl font-sans"
	>
		<div class="flex w-full flex-col items-center justify-center gap-4 py-8">
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-center text-3xl font-semibold text-ms-800 md:text-6xl md:leading-20">
					กรอกเอกสาร<br />ไม่ใช่เรื่องยากอีกต่อไป
				</h1>
				<p class="font-medium text-ms-600 lg:text-xl">
					ดูฟอร์ม ผู้ช่วยกรอกเอกสารราชการได้อย่างรวดเร็ว
				</p>
			</div>
			<a
				href="https://www.app.dooform.com/"
				class="flex h-12 items-center justify-center rounded-full bg-on-900 px-3.5 text-base font-medium text-ag-600"
			>
				<p class="px-1.5">เริ่มต้นใช้งาน</p>
			</a>
		</div>
		<div
			class="flex h-2/3 w-full items-center justify-center overflow-hidden rounded-t-4xl border-x-12 border-t-12 border-neutral-200 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
		>
			<img
				class="h-full w-full object-cover"
				src="/example.webp"
				alt="Dooform application interface showing document filling features"
				fetchpriority="high"
				width="4596"
				height="2236"
			/>
		</div>
	</div>

	<!-- Landing Page Sections -->
	<div class="flex w-full flex-col items-center">
		<div class="grid w-full max-w-[1216px] mx-auto grid-cols-3 border-x-[1.5px] border-pl-700">
		<TestimonialSlider />
		
		<CompanyLogos />

		<DocumentSection />

		<APIIntegration />

		<FileHistory />

		<FeaturesGrid />

		<OtherServices />

		<PricingSection />

		<SignUpSection />
		</div>
	</div>
</main>
