<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';

	interface Slide {
		category: string;
		title: string;
		description: string;
		image: string;
	}

	const slides: Slide[] = [
		{
			category: 'Business Solution',
			title: 'แปลเอกสารราชการ พร้อมรับรอง',
			description: 'Dooform มีบริการ Webhooks สำหรับ บริการในรูปแบบธุรกิจพร้อมให้ใช้งาน',
			image: '/placeholder/1102.webp'
		},
		{
			category: 'Business Solution',
			title: 'Webhooks API',
			description: 'Dooform มีบริการ Webhooks สำหรับ บริการในรูปแบบธุรกิจพร้อมให้ใช้งาน',
			image: '/placeholder/1101.webp'
		},
		{
			category: 'Business Solution',
			title: 'รับรองเอกสารยื่น สถานทูต',
			description: 'Dooform มีบริการ Webhooks สำหรับ บริการในรูปแบบธุรกิจพร้อมให้ใช้งาน',
			image: '/placeholder/1103.webp'
		}
	];

	let scrollContainer = $state<HTMLDivElement>();
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	const checkScroll = () => {
		if (scrollContainer) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
			canScrollLeft = scrollLeft > 0;
			// Use a small tolerance for float precision issues
			canScrollRight = Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1;
		}
	};

	onMount(() => {
		checkScroll();
	});

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainer) {
			const scrollAmount = scrollContainer.clientWidth;
			scrollContainer.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth'
			});
		}
	};
</script>

<section class="mx-auto w-full max-w-7xl px-6 py-8 md:px-8 md:py-16">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		<!-- Left Column - Header & Controls -->
		<div class="flex h-full flex-col justify-between md:col-span-1">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-2">
					<p class="text-neutral-600">Business Solution</p>
				</div>
				<h2 class="text-4xl font-bold text-gray-900">ลดเวลากับการจัดฟอร์แมตเอกสารให้กับบริษัท</h2>
			</div>

			<!-- Navigation Buttons -->
			<div class="mt-8 flex gap-3">
				<button
					onclick={() => scroll('left')}
					disabled={!canScrollLeft}
					class={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
						!canScrollLeft
							? 'cursor-not-allowed border-gray-300 text-gray-300'
							: 'border-gray-800 text-gray-800 hover:bg-gray-100'
					}`}
					aria-label="Previous testimonial"
				>
					<ArrowLeft class="h-5 w-5" />
				</button>
				<button
					onclick={() => scroll('right')}
					disabled={!canScrollRight}
					class={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
						!canScrollRight
							? 'cursor-not-allowed border-gray-300 text-gray-300'
							: 'border-gray-800 text-gray-800 hover:bg-gray-100'
					}`}
					aria-label="Next slide"
				>
					<ArrowRight class="h-5 w-5" />
				</button>
			</div>
		</div>

		<!-- Right Column - Scrollable Carousel -->
		<div class="relative w-full md:col-span-2">
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				bind:this={scrollContainer}
				onscroll={checkScroll}
				class="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
			>
				{#each slides as slide, index}
					<div class="w-full flex-shrink-0 snap-start">
						<div class="relative flex h-[450px] w-full overflow-hidden rounded-2xl">
							<div class="absolute bottom-0 left-0 z-20 flex flex-col p-6 text-white">
								<h1 class="text-start text-base">{slide.category}</h1>
								<h1 class="text-start text-3xl font-semibold">
									{slide.title}
								</h1>
								<p class="mt-2">
									{slide.description}
								</p>
							</div>
							<div
								class="absolute inset-0 z-10 bg-gradient-to-t from-neutral-900/50 to-transparent"
							></div>
							<img
								src={slide.image}
								alt={slide.title}
								class="absolute h-full w-full object-cover"
								loading="lazy"
								decoding="async"
								width="4000"
								height="2250"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
