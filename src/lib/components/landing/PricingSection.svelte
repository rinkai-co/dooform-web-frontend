<script lang="ts">
	import { WandSparkles, History, Users, Webhook, ScanEye, ClipboardPlus } from '@lucide/svelte';
</script>

<!-- Pricing Section - Spans all 3 columns -->
<div class="col-span-3 flex w-full flex-col items-center gap-9 border-b-[1.5px] border-pl-700 px-0 py-9">
	<div class="flex w-full flex-col items-center gap-0.5 text-center text-neutral-800">
		<p class="tp-h2 w-full">แพ็คเกจใช้งาน</p>
		<p class="tp-body w-full">สามารถเลือกแพ็กเกจการใช้งานได้ตามความต้องการ</p>
	</div>
	<div class="flex items-stretch gap-6">
		{#each [
			{ name: 'Trial', price: '฿0', users: '1 ผู้ใช้งาน', features: ['กรอกเอกสารพื้นฐานได้ 5 รายการ', 'ไม่มีผู้ใช้งานในทีม', 'ไม่สามารถเรียกดูข้อมูลย้อนหลังได้'], button: 'ทดลองใช้งาน', highlight: false },
			{ name: 'Starter', price: '฿2,490', users: '10 ผู้ใช้งานต่อเดือน', features: ['กรอกเอกสารพื้นฐานได้ 500 รายการ/เดือน', 'มีผู้ใช้งานในทีมได้มากสุด 10 คน', 'เรียกดูข้อมูลที่เก็บไว้ได้มากสุด 90 วัน'], button: 'ชำระเงิน', highlight: false },
			{ name: 'Plus', price: '฿4,990', users: '100 ผู้ใช้งานต่อเดือน', features: ['กรอกเอกสารพื้นฐานได้ 2000 รายการ/เดือน', 'มีผู้ใช้งานในทีมได้มากสุด 100 คน', 'เรียกดูข้อมูลที่เก็บไว้ได้มากสุด 1 ปี', 'มี AI ช่วยตรวจสอบข้อมูล', 'มีระบบตรวจจับข้อความอัตโนมัติ', 'เพิ่มเอกสารใช้งานในองค์กรได้ 10 ชุด'], button: 'ชำระเงิน', highlight: true },
			{ name: 'Enterprise', price: 'Contact us', users: 'ไม่จำกัดผู้ใช้งานต่อเดือน', features: ['กรอกเอกสารพื้นฐานได้ไม่จำกัด', 'มีผู้ใช้งานในทีมได้ไม่จำกัด', 'เรียกดูข้อมูลที่เก็บไว้ไดไม่จำกัดระยะเวลา', 'มี AI ช่วยตรวจสอบข้อมูล', 'มีระบบตรวจจับข้อความอัตโนมัติ', 'สามารถสร้างเอกสารสำหรับองค์กรได้ไม่จำกัด', 'Enterprise-level API Webhooks'], button: 'ติดต่อ', highlight: false }
		] as plan}
			{#if plan.highlight}
				<div class="w-[250px] h-full rounded-xl p-1.5 bg-cover bg-center" style="background-image: url(/placeholder/1101.webp);">
					<div class="flex w-full h-full flex-col items-start justify-between rounded-lg bg-white p-4">
						<div class="flex w-full flex-col items-start gap-2">
								<div class="flex flex-col items-start gap-px">
									<p class="tp-body font-semibold text-center text-neutral-800">{plan.name}</p>
									<div class="flex flex-col items-start pb-0.5 pt-0">
										<div class="flex items-end justify-end gap-0.5 mb-[-3px]">
											<p class="tp-h2 text-center text-neutral-800">{plan.price}</p>
										</div>
										<p class="text-xs text-black text-center">/ {plan.users}</p>
									</div>
								</div>
								<div class="flex w-full flex-col items-start gap-1">
									<p class="text-xs font-semibold text-black text-center">ฟีเจอร์ทั้งหมด</p>
									<div class="flex w-full flex-col items-start gap-2">
										{#each plan.features as feature}
											<div class="flex w-full items-center gap-1">
												{#if feature.includes('AI')}
													<WandSparkles size={12} class="text-sp-500 shrink-0" />
												{:else if feature.includes('เรียกดู')}
													<History size={12} class="text-black shrink-0" />
												{:else if feature.includes('ผู้ใช้งาน')}
													<Users size={12} class="text-black shrink-0" />
												{:else if feature.includes('Webhooks')}
													<Webhook size={12} class="text-black shrink-0" />
												{:else if feature.includes('ตรวจจับ')}
													<ScanEye size={12} class="text-black shrink-0" />
												{:else}
													<ClipboardPlus size={12} class="text-black shrink-0" />
												{/if}
												<p class="flex-1 text-xs text-black">{feature}</p>
											</div>
										{/each}
									</div>
								</div>
							</div>
						<div class="flex h-8 items-center justify-center rounded-full bg-neutral-800 px-1.5 w-full">
							<div class="flex items-center justify-center px-1.5">
								<p class="text-xs font-medium text-ag-600">{plan.button}</p>
							</div>
						</div>
					</div>
				</div>
			{:else}
				<div class="flex w-[250px] h-full flex-col items-start justify-between rounded-xl bg-white p-4">
					<div class="flex w-full flex-col items-start gap-2">
							<div class="flex flex-col items-start gap-px">
								<p class="tp-body font-semibold text-center text-neutral-800">{plan.name}</p>
								<div class="flex flex-col items-start pb-0.5 pt-0">
									<div class="flex items-end justify-end gap-0.5 mb-[-3px]">
										<p class="tp-h2 text-center text-neutral-800">{plan.price}</p>
									</div>
									<p class="text-xs text-black text-center">/ {plan.users}</p>
								</div>
							</div>
							<div class="flex w-full flex-col items-start gap-1">
								<p class="text-xs font-semibold text-black text-center">ฟีเจอร์ทั้งหมด</p>
								<div class="flex w-full flex-col items-start gap-2">
									{#each plan.features as feature}
										<div class="flex w-full items-center gap-1">
											{#if feature.includes('AI')}
												<WandSparkles size={12} class="text-sp-500 shrink-0" />
											{:else if feature.includes('เรียกดู')}
												<History size={12} class="text-black shrink-0" />
											{:else if feature.includes('ผู้ใช้งาน')}
												<Users size={12} class="text-black shrink-0" />
											{:else if feature.includes('Webhooks')}
												<Webhook size={12} class="text-black shrink-0" />
											{:else if feature.includes('ตรวจจับ')}
												<ScanEye size={12} class="text-black shrink-0" />
											{:else}
												<ClipboardPlus size={12} class="text-black shrink-0" />
											{/if}
											<p class="flex-1 text-xs text-black">{feature}</p>
										</div>
									{/each}
								</div>
							</div>
						</div>
					<div class="flex h-8 items-center justify-center rounded-full bg-neutral-800 px-1.5 w-full">
						<div class="flex items-center justify-center px-1.5">
							<p class="text-xs font-medium text-ag-600">{plan.button}</p>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<p class="text-xs text-neutral-600">แพ็กเกจทั้งหมดเรียกเก็บเงินเป็นรายเดือน ทุกราคา ฿THB</p>
</div>
