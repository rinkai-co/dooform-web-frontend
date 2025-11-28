<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
</script>

<!-- Document Section - Left column (col 1), Right spans 2 columns (col 2-3) -->
<div class="col-span-1 flex flex-col items-start gap-3 border-b-[1.5px] border-r-[1.5px] border-pl-700 px-6 py-9">
	<div class="flex w-full flex-col items-start gap-3">
		<div class="flex flex-col items-start gap-0.5 text-neutral-800">
			<p class="tp-h2 w-full">เอกสารครบที่สุด</p>
			<p class="tp-body w-full">รองรับเอกสารราชการใช้สำหรับแปลพร้อมยื่นสถานทูต</p>
		</div>
		<div class="flex items-start gap-3">
			<div class="flex h-8 items-center justify-center rounded-full bg-neutral-800 px-1.5">
				<div class="flex items-center justify-center px-1.5">
					<p class="text-xs font-medium text-ag-600">เลือกดูเอกสาร</p>
				</div>
			</div>
			<div class="flex h-8 items-center justify-center rounded-full bg-ag-600 px-1.5">
				<div class="flex items-center justify-center px-1.5">
					<p class="text-xs font-medium text-neutral-800">อ่านต่อ</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-span-2 flex flex-col items-start gap-3 border-b-[1.5px] border-pl-700 px-6 py-9">
	<div class="flex w-full flex-col items-start">
		{#each ['บัตรประชาชน', 'สูติบัตร', 'ทะเบียนบ้าน', 'ใบสำคัญการสมรส', 'อื่น ๆ'] as docType}
			<div class="flex w-full items-center justify-between border-b-[1.5px] border-pl-800 px-3 py-2">
				<p class="tp-body text-black">{docType}</p>
				<ChevronDown size={16} class="text-black" />
			</div>
		{/each}
	</div>
</div>
