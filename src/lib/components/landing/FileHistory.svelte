<script lang="ts">
	import { TriangleAlert, ChevronDown, CircleArrowDown, Pencil } from '@lucide/svelte';
</script>

<!-- File History Section - Left column (col 1), Right spans 2 columns (col 2-3) -->
<div class="col-span-1 flex flex-col items-start justify-between border-b-[1.5px] border-r-[1.5px] border-pl-700 px-6 py-9">
	<div class="flex w-full flex-col items-start">
		<div class="flex w-full flex-col items-start gap-0.5 text-neutral-800">
			<p class="tp-h2 w-full">เรียกดูไฟล์ย้อนหลังได้ทุกเมื่อ</p>
			<p class="tp-body w-full">ผู้ใช้งานสามารถเรียกดูประวัติข้อมูลที่ตนเองได้กรอกไป เพียงค้นหาด้วยเลขเคสไอดี ชื่อลูกค้า หรือประเภทเอกสาร</p>
		</div>
		<div class="flex w-full items-start gap-3 rounded-xl border border-pl-800 p-3 mt-6">
			<div class="flex flex-1 flex-col items-start gap-1.5">
				<div class="flex items-center justify-center gap-1 rounded-full bg-pl-400 border border-pl-900 px-1.5 py-0.5">
					<TriangleAlert size={12} class="text-black" />
					<div class="flex items-center justify-center px-0.5">
						<p class="text-xs font-medium text-black">หมายเหตุ</p>
					</div>
				</div>
				<p class="w-full text-xs text-black">เราให้ความสำคัญกับการรักษาข้อมูลส่วนตัวของลูกค้ามากที่สุด<br/>ในการใช้งานแอปพลิเคชั่นดังกล่าวจะมีการเก็บข้อมูลด้วยมาตรฐาน<br/>และไม่มีการนำไปใช้ประโยชน์ใด ๆ นอกจากนี้</p>
			</div>
		</div>
	</div>
</div>
<div class="col-span-2 flex flex-col items-start gap-3 border-b-[1.5px] border-pl-700 px-6 py-9">
	<div class="flex w-full flex-col items-start gap-4 rounded-xl bg-neutral-50 p-9">
		<div class="flex w-full flex-col items-start gap-0.5 text-black">
			<p class="text-3xl font-semibold w-full">ประวัติการกรอกเอกสาร</p>
			<p class="text-lg w-full">สามารถค้นหาข้อมูลประวัติการทำรายการได้เพียงค้นหาเลขที่เคส</p>
		</div>
		<div class="flex w-full flex-col items-start gap-3">
			<!-- Search Bar -->
			<div class="flex h-[33px] w-full items-center gap-3">
				<div class="flex flex-1 items-center gap-2.5 rounded-lg border border-qt-600 bg-white px-3 py-2">
					<p class="text-xs text-cb-900">ค้นหาประวัติ</p>
				</div>
				<div class="flex items-center gap-1">
					<div class="flex items-center gap-2.5 rounded-lg border border-qt-600 p-2">
						<div class="h-[17px] w-[17px]"></div>
					</div>
					<div class="flex items-center gap-2.5 rounded-lg border border-qt-600 p-2">
						<div class="h-[17px] w-[17px]"></div>
					</div>
				</div>
			</div>

			<!-- History Items -->
			<div class="flex w-full flex-col items-start">
				{#each [
					{ id: '#23124421', date: '26 กันยายน 2568 - 15:34 น.', title: 'บัตรประชาชน – รุ่นใหม่แบบที่ 1', customer: 'สมชาย' },
					{ id: '#87897921', date: '22 กันยายน 2568 - 10:12 น.', title: 'ทะเบียนบ้าน – หน้ารายการเกี่ยวกับบ้าน', customer: 'มะเหมี่ยว' },
					{ id: '#23124421', date: '26 กันยายน 2568 - 15:34 น.', title: 'ทะเบียนสมรส – ช3', customer: 'ใบเตย' }
				] as item, i}
					<div class="flex w-full items-center justify-between border-t border-qt-400 bg-white p-4 {i === 0 ? 'rounded-t-lg' : ''} {i === 2 ? 'rounded-b-lg' : ''}">
						<div class="flex flex-col items-start gap-0.5">
							<div class="flex items-center justify-center gap-1">
								<div class="flex items-center justify-center gap-2.5 rounded bg-gray-100 px-0.5 py-0.5">
									<p class="text-xs font-mono text-black">{item.id}</p>
								</div>
								<p class="text-sm text-neutral-600">{item.date}</p>
							</div>
							<div class="flex w-full flex-col items-start">
								<p class="tp-body font-semibold text-neutral-800 w-full">{item.title}</p>
								<p class="text-sm text-neutral-600">ลูกค้า: คุณ <span class="font-medium text-neutral-800">{item.customer}</span></p>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<div class="flex flex-col items-start justify-center gap-1">
								<div class="flex items-center justify-center gap-0.5 rounded-full border border-qt-400 bg-white px-2 py-1">
									<CircleArrowDown size={12} class="text-black" />
									<div class="flex items-center justify-center px-0.5">
										<p class="text-[10px] font-medium text-cb-900">ดาวน์โหลด</p>
									</div>
								</div>
								<div class="flex w-full items-center justify-center gap-0.5 rounded-full border border-qt-400 bg-white px-2 py-1">
									<Pencil size={8} class="text-black" />
									<div class="flex items-center justify-center px-0.5">
										<p class="text-[10px] font-medium text-cb-900">แก้ไขข้อมูล</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col items-start gap-0.5">
								<div class="flex items-center gap-1">
									<ChevronDown size={12} class="rotate-180 text-black" />
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
