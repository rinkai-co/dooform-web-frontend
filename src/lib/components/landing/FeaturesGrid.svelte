<script lang="ts">
	import { Unplug, CodeXml, Zap } from '@lucide/svelte';
</script>

<!-- Features Grid Section - 3 equal columns -->
<div class="col-span-1 flex flex-col items-start justify-between gap-6 border-b-[1.5px] border-r-[1.5px] border-pl-700 px-6 py-9">
	<div class="flex w-full flex-col items-start gap-3">
		<Unplug size={64} class="text-neutral-800" strokeWidth={1.5} />
		<div class="flex w-full items-center justify-between">
			<div class="flex flex-1 flex-col items-start gap-0.5 text-neutral-800">
				<p class="tp-h2 w-full">รองรับธุรกิจที่หลากหลาย</p>
				<p class="tp-body w-full">นอกจากเอกสารราชการที่ Dooform มีให้ใช้งานแล้ว คุณยังสามารถใช้ syntax จาก Dooform จัดการเอกสารที่มีอยู่ในระบบของคุณได้</p>
			</div>
		</div>
	</div>
	<div class="flex items-start gap-3">
		<div class="flex h-8 items-center justify-center rounded-full bg-neutral-800 px-1.5">
			<div class="flex items-center justify-center px-1.5">
				<p class="text-xs font-medium text-ag-600">ตัวอย่างงาน</p>
			</div>
		</div>
	</div>
</div>
<div class="col-span-1 flex flex-col items-start justify-between gap-6 border-b-[1.5px] border-r-[1.5px] border-pl-700 px-6 py-9">
	<div class="flex w-full flex-col items-start gap-3">
		<CodeXml size={64} class="text-neutral-800" strokeWidth={1.5} />
		<div class="flex w-full items-start justify-between">
			<div class="flex flex-1 flex-col items-start gap-0.5 text-neutral-800">
				<p class="tp-h2 w-full">Developer Friendly</p>
				<p class="tp-body w-full">Business API Webhook ออกแบบมาเพื่อให้นักพัฒนาเชื่อมต่อกับ Dooform ได้ง่ายมากยิ่งขึ้น</p>
			</div>
		</div>
	</div>
	<div class="flex items-start gap-3">
		<div class="flex h-8 items-center justify-center rounded-full bg-neutral-800 px-1.5">
			<div class="flex items-center justify-center px-1.5">
				<p class="text-xs font-medium text-ag-600">API Reference</p>
			</div>
		</div>
	</div>
</div>
<div class="col-span-1 flex flex-col items-start justify-between gap-6 border-b-[1.5px] border-pl-700 px-6 py-9">
	<div class="flex w-full flex-col items-start gap-3">
		<Zap size={64} class="text-neutral-800" strokeWidth={1.5} />
		<div class="flex w-full items-start justify-between">
			<div class="flex flex-1 flex-col items-start gap-0.5 text-neutral-800">
				<p class="tp-h2 w-full">ประมวลผลไว</p>
				<p class="tp-body w-full">หากธุรกิจของคุณต้องจัดการเอกสารและส่งออกเป็น<br/>จำนวนมาก คุณสามารถเรียก API เพื่อสร้างไฟล์ได้มากถึง 1,000 รายการ/10 seconds</p>
			</div>
		</div>
	</div>
	<div class="flex items-start gap-3">
		<div class="flex h-8 items-center justify-center rounded-full bg-neutral-800 px-1.5">
			<div class="flex items-center justify-center px-1.5">
				<p class="text-xs font-medium text-ag-600">ดูกราฟวัดประสิทธิภาพ</p>
			</div>
		</div>
	</div>
</div>
