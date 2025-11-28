<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import { ChevronDown, ArrowUpRight } from '@lucide/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Dooform | แปลเอกสารราชการไทย-อังกฤษ มาตรฐานสากล</title>
	<meta
		name="description"
		content="Dooform ช่วยแก้ปัญหาการแปลเอกสารราชการไทยเป็นอังกฤษ ลดความซับซ้อนเรื่องฟอร์แมต จัดรูปแบบอัตโนมัติ ถูกต้องตามมาตรฐาน เพิ่มโอกาสผ่านวีซ่า"
	/>
	<meta
		name="keywords"
		content="Dooform, แปลเอกสารราชการ, แปลเอกสารยื่นวีซ่า, แปลทะเบียนบ้าน, แปลบัตรประชาชน, แบบฟอร์มแปลเอกสาร, จัดหน้าเอกสารแปล, Thai Official Document Translation"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://dooform.com" />

	<!-- OpenGraph -->
	<meta property="og:title" content="Dooform | แปลเอกสารราชการไทย-อังกฤษ มาตรฐานสากล" />
	<meta
		property="og:description"
		content="Dooform - แพลตฟอร์มช่วยแปลและจัดรูปแบบเอกสารราชการไทยเป็นอังกฤษอัตโนมัติ ลดเวลา ลดข้อผิดพลาด มาตรฐานเดียวกับที่สถานทูตยอมรับ"
	/>
	<meta property="og:url" content="https://dooform.com" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://dooform.com/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Dooform Application" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Dooform | แปลเอกสารราชการไทย-อังกฤษ มาตรฐานสากล" />
	<meta
		name="twitter:description"
		content="Dooform ช่วยแก้ปัญหาการแปลเอกสารราชการไทยเป็นอังกฤษ ลดความซับซ้อนเรื่องฟอร์แมต จัดรูปแบบอัตโนมัติ"
	/>
	<meta name="twitter:image" content="https://dooform.com/twitter-image.jpg" />

	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "Dooform",
			"applicationCategory": "Productivity",
			"operatingSystem": "Web",
			"description": "Dooform ช่วยแก้ปัญหาการแปลเอกสารราชการไทยเป็นอังกฤษ ลดความซับซ้อนเรื่องฟอร์แมต จัดรูปแบบอัตโนมัติ",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "THB"
			}
		}
	</script>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav
	class="bg-background/50 sticky top-0 z-50 flex h-16 w-full items-center justify-center border-b border-b-qt-700/10 px-6 font-sans backdrop-blur-xl"
>
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
		<section class="flex items-center gap-12">
			<a href="/" class="flex items-center">
				<img src={logo} alt="logo" class="my-2 h-8" />
			</a>
			<ul class="hidden items-center gap-6 text-sm font-medium text-ms-500 md:flex">
				<li class="flex items-center gap-2">
					<a href="#">ผลิตภัณฑ์</a><ChevronDown class="w-5" />
				</li>
				<li class="flex items-center gap-2">
					<a href="#">สำหรับธุรกิจ</a><ChevronDown class="w-5" />
				</li>
				<li class="flex items-center gap-2"><a href="#">แพ็คเกจ</a><ChevronDown class="w-5" /></li>
				<li class="flex items-center gap-2">
					<a href="#">เกี่ยวกับเว็บไซต์</a><ChevronDown class="w-5" />
				</li>
			</ul>
		</section>
		<a
			href="https://app.dooform.com/"
			class="flex h-8 items-center justify-center rounded-full bg-on-900 px-1.5 text-sm font-medium text-ag-600"
		>
			<p class="px-1.5">เข้าสู่ระบบ</p>
		</a>
	</div>
</nav>
{@render children()}
<footer class="flex w-full justify-between font-sans text-sm">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 rounded-xl p-6 text-cb-900">
		<div class="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:gap-2">
			<div class="flex shrink-0 flex-col items-start justify-center gap-2">
				<img src={logo} alt="logo" class="my-2 h-8" />
				<div class="flex flex-col gap-2">
					<p>© 2025 Dooform by Knight Consultant <br /> Under License of Rinkai</p>
				</div>
			</div>
			<div
				class="grid w-full grid-cols-2 items-start gap-6 md:grid-cols-4 lg:flex lg:justify-end lg:gap-12"
			>
				<ul class="flex flex-col gap-2">
					<li class="font-semibold">สำหรับพัฒนา</li>
					<li><a href="/form" class="footer-link">Knowledge Base</a></li>
					<li><a href="/components" class="footer-link">Components</a></li>
				</ul>
				<ul class="flex flex-col gap-2">
					<li class="font-semibold">เกี่ยวกับแอปพลิเคชั่น</li>
					<li><a href="/about" class="footer-link">รายการเอกสาร</a></li>
					<li><a href="/terms" class="footer-link">คำแนะนำในการใช้งาน</a></li>
					<li><a href="/privacy" class="footer-link">เอกสารประกอบการใช้งาน</a></li>
					<li><a href="/privacy" class="footer-link">รายงานวิเคราะห์คุณภาพ</a></li>
					<li><a href="/privacy" class="footer-link">ทีมพัฒนา</a></li>
					<li><a href="/privacy" class="footer-link">เกี่ยวกับเว็บไซต์</a></li>
				</ul>
				<ul class="flex flex-col gap-2">
					<li class="font-semibold">สำหรับหน่วยงานธุรกิจ</li>
					<li><a href="/about" class="footer-link">แพลนสำหรับหน่วยงาน</a></li>
					<li><a href="/terms" class="footer-link">ค่าบริการ</a></li>
					<li><a href="/privacy" class="footer-link">ติดต่อสอบถาม</a></li>
				</ul>
				<ul class="flex flex-col gap-2">
					<li class="font-semibold">ข้อบังคับทางกฎหมาย</li>
					<li><a href="/about" class="footer-link">ข้อตกลงในการใช้งาน</a></li>
					<li><a href="/terms" class="footer-link">นโยบายการจัดเก็บข้อมูล</a></li>
				</ul>
			</div>
		</div>
		<div class="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
			<ul class="flex flex-col items-start justify-start">
				<li class="flex items-center gap-1">
					<a href="https://www.knightvisahelppoint.com/" class="footer-link"
						>knight consultant worldwide company limited</a
					>
					<ArrowUpRight class="h-4 w-4" />
				</li>
			</ul>
			<p>การใช้งานเว็บไซต์นี้นับว่าคุณได้ยอมรับเงื่อนไขในการใช้งานเรียบร้อย</p>
		</div>
	</div>
</footer>
