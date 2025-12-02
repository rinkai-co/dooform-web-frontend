<script>
	import { AlertTriangle } from "@lucide/svelte";
	import logo from '$lib/assets/logo.svg';
</script>

<section class="min-h-screen flex flex-col items-center justify-center font-sans px-12">
	<p class="font-medium">Security By</p>
	<a href="https://www.dooform.com/" class="flex items-end text-xl font-semibold">
		<img src={logo} alt="Dooform logo" class="mb-2 h-8" />
		
	</a>	
	<div class="p-3 rounded-2xl border border-stone-200 max-w-sm  bg-stone-50 mb-4">
		<p class="px-2 py-0.5 rounded-full border border-stone-200 flex items-center justify-center text-sm font-semibold w-fit gap-1.5">
			<AlertTriangle
			className="w-4 h-4 text-amber-600"
			fill="#ffd230"
			strokeWidth={2}
			/>
			คำเตือน
		</p>
		<p class="text-sm p-1 pt-2">
			เว็บไซต์นี้ไม่ใช่บริการหลักของ Dooform โปรดคลิกลิงก์ด้านล่างเพื่อไปยัง Dooform
		</p>
	</div>
	<a
	href="https://dooform.com/"
	class="flex h-8 items-center justify-center rounded-full bg-on-900 px-1.5 text-sm font-medium text-ag-600"
	>
		<p class="px-1.5">ไปที่ Dooform</p>
	</a>		
	
			
</section>

<div>
	
</div>