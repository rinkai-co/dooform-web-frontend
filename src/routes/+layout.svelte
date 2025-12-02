<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import { ChevronDown, ArrowUpRight } from '@lucide/svelte';
	import CookiePopup from '$lib/components/CookiePopup.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Dooform | แปลเอกสารราชการไทย-อังกฤษ กรอกฟอร์มอัตโนมัติ ยื่นวีซ่า สถานทูต</title>
	<meta
		name="description"
		content="Dooform แพลตฟอร์มกรอกและแปลเอกสารราชการไทย-อังกฤษออนไลน์ รองรับบัตรประชาชน ทะเบียนบ้าน สูติบัตร ทะเบียนสมรส จัดรูปแบบอัตโนมัติตามมาตรฐานสากล ยื่นสถานทูตได้ทันที ประหยัดเวลา ลดข้อผิดพลาด API สำหรับธุรกิจ"
	/>
	<meta
		name="keywords"
		content="แปลเอกสารราชการ, กรอกเอกสารราชการออนไลน์, แปลบัตรประชาชน, แปลทะเบียนบ้าน, แปลสูติบัตร, แปลทะเบียนสมรส, แปลเอกสารยื่นวีซ่า, แปลเอกสารสถานทูต, Thai to English document translation, official document translation, visa document translation, แบบฟอร์มแปลเอกสาร, จัดหน้าเอกสารแปล, รับรองเอกสาร, แปลเอกสารราชการรับรอง, Dooform, document filling automation, webhooks API"
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Dooform by Knight Consultant" />
	<link rel="canonical" href="https://dooform.com" />

	<!-- OpenGraph -->
	<meta property="og:title" content="Dooform | กรอกและแปลเอกสารราชการไทย-อังกฤษ ยื่นวีซ่าสถานทูต" />
	<meta
		property="og:description"
		content="แพลตฟอร์มกรอกและแปลเอกสารราชการไทย-อังกฤษออนไลน์ รองรับบัตรประชาชน ทะเบียนบ้าน สูติบัตร ทะเบียนสมรส จัดรูปแบบอัตโนมัติตามมาตรฐานสากล ยื่นสถานทูตได้ทันที ประหยัดเวลา ลดข้อผิดพลาด"
	/>
	<meta property="og:url" content="https://dooform.com" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="th_TH" />
	<meta property="og:locale:alternate" content="en_US" />
	<meta property="og:site_name" content="Dooform" />
	<meta property="og:image" content="https://dooform.com/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Dooform - แปลและกรอกเอกสารราชการออนไลน์" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Dooform | กรอกและแปลเอกสารราชการไทย-อังกฤษ ยื่นวีซ่าสถานทูต" />
	<meta
		name="twitter:description"
		content="แพลตฟอร์มกรอกและแปลเอกสารราชการไทย-อังกฤษออนไลน์ รองรับบัตรประชาชน ทะเบียนบ้าน สูติบัตร ทะเบียนสมรส จัดรูปแบบอัตโนมัติ ยื่นสถานทูตได้ทันที"
	/>
	<meta name="twitter:image" content="https://dooform.com/twitter-image.jpg" />
	<meta name="twitter:site" content="@dooform" />
	<meta name="twitter:creator" content="@dooform" />

	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "Dooform",
			"applicationCategory": "BusinessApplication",
			"applicationSubCategory": "Document Translation & Form Filling",
			"operatingSystem": "Web",
			"description": "แพลตฟอร์มกรอกและแปลเอกสารราชการไทย-อังกฤษออนไลน์ รองรับบัตรประชาชน ทะเบียนบ้าน สูติบัตร ทะเบียนสมรส จัดรูปแบบอัตโนมัติตามมาตรฐานสากล ยื่นสถานทูตได้ทันที",
			"url": "https://dooform.com",
			"author": {
				"@type": "Organization",
				"name": "Knight Consultant Worldwide Company Limited"
			},
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "THB"
			},
			"featureList": [
				"แปลเอกสารราชการไทย-อังกฤษ",
				"กรอกเอกสารอัตโนมัติ",
				"รองรับบัตรประชาชน ทะเบียนบ้าน สูติบัตร",
				"จัดรูปแบบตามมาตรฐานสากล",
				"Webhooks API สำหรับธุรกิจ"
			],
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "4.8",
				"ratingCount": "150"
			}
		}
	</script>
	<link rel="icon" href={favicon} />

	
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
		rel="preload"
		as="style"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
{@render children()}
<CookiePopup />