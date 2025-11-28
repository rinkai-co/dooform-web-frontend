<!-- Other Services Section - Spans all 3 columns -->
<div class="col-span-3 flex w-full items-center justify-between border-b-[1.5px] border-pl-700 p-6">
	<div class="flex w-[382px] flex-col items-start gap-0.5 text-neutral-800">
		<p class="tp-h2 w-full">บริการอื่น ๆ</p>
		<p class="tp-body w-full">บริการอื่น ๆ ที่ตอบโจทย์สำหรับธุรกิจของคุณ</p>
	</div>
	<div class="flex items-center gap-3">
	{#each [
		{ title: 'แปลเอกสารราชการ\nพร้อมรับรอง', subtitle: 'Business Solution', desc: 'Dooform มีบริการ Webhooks สำหรับ\nบริการในรูปแบบธุรกิจพร้อมให้ใช้งาน', btn: 'อ่านเอกสาร', img: '/landing-assets/service-card-1.webp', textLight: true },
		{ title: 'Webhooks API', subtitle: 'Business Solution', desc: 'Dooform มีบริการ Webhooks สำหรับ\nบริการในรูปแบบธุรกิจพร้อมให้ใช้งาน', btn: 'ทดลองใช้งาน', img: '/landing-assets/service-card-2.webp', textLight: true },
		{ title: 'รับรองเอกสารยื่น\nสถานทูต', subtitle: 'Business Solution', desc: 'Dooform มีบริการ Webhooks สำหรับ\nบริการในรูปแบบธุรกิจพร้อมให้ใช้งาน', btn: 'อ่านเอกสาร', img: '/landing-assets/service-card-3.webp', textLight: false }
	] as service}
		<div class="relative flex h-[332px] w-[249px] flex-col items-start justify-between rounded-md p-4 overflow-hidden">
			<img
				src={service.img}
				alt={service.title}
				class="absolute inset-0 h-full w-full object-cover rounded-md"
				loading="lazy"
				decoding="async"
				width="600"
				height="800"
			/>
			<div class="relative z-10 flex w-full flex-col items-start gap-0.5 {service.textLight ? 'text-neutral-100' : 'text-neutral-800'}">
				<p class="text-xs w-full">{service.subtitle}</p>
				<p class="tp-h2 w-full whitespace-pre-line">{service.title}</p>
			</div>
			<div class="relative z-10 flex w-full flex-col items-start gap-2">
				<p class="text-xs {service.textLight ? 'text-neutral-100' : 'text-neutral-800'} w-full whitespace-pre-line">{service.desc}</p>
				<div class="flex h-8 items-center justify-center rounded-full bg-ag-600 px-1.5">
					<div class="flex items-center justify-center px-1.5">
						<p class="text-xs font-medium text-neutral-800">{service.btn}</p>
					</div>
				</div>
			</div>
		</div>
	{/each}
	</div>
</div>
