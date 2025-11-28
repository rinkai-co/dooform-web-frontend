<!-- Sign Up Section - Spans all 3 columns -->
<div class="col-span-3 flex w-full flex-col items-center gap-9 border-b-[1.5px] border-pl-700 px-0 py-9">
	<div class="flex w-full flex-col items-center gap-0.5 text-center text-neutral-800">
		<p class="tp-h2 w-full">ทดลองใช้งานฟรี</p>
		<p class="tp-body w-full">เพียงสมัครสมาชิกและกรอกข้อมูลได้ทันที</p>
	</div>
	<div class="flex w-[295px] flex-col items-center gap-6">
		<div class="flex w-full flex-col items-start gap-1.5">
			{#each ['ชื่อ – นามสกุล', 'อีเมล', 'รหัสผ่าน'] as field}
				<div class="flex w-full items-center gap-2.5 rounded-xl border-[1.5px] border-pl-900 bg-white p-2.5">
					<p class="text-xs text-center text-neutral-800">{field}</p>
				</div>
			{/each}
		</div>
		<div class="flex items-center gap-3">
			<div class="flex h-8 items-center justify-center rounded-full bg-neutral-800 px-1.5">
				<div class="flex items-center justify-center px-1.5">
					<p class="text-xs font-medium text-ag-600">สมัครสมาชิก</p>
				</div>
			</div>
			<div class="flex h-8 items-center justify-center rounded-full bg-ag-600 px-1.5">
				<div class="flex items-center justify-center px-1.5">
					<p class="text-xs font-medium text-neutral-800">มีบัญชีผู้ใช้แล้ว?</p>
				</div>
			</div>
		</div>
	</div>
	<p class="text-xs text-neutral-500">การสมัครสมาชิกถือว่าคุณได้ยินยอมให้มีการเก็บข้อมูลในการใช้งาน</p>
</div>
