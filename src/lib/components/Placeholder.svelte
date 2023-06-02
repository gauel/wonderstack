<script>
	export let style = "";
</script>

<div class="p-2 {style}">
	<div class="border-2 border-blue-500 bg-blue-500/20 flex items-center justify-center h-full w-full font-bold text-3xl">
		<slot />
	</div>
</div>