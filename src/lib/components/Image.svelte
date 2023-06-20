<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition';
	export let src = "",
	alt = "",
	lazy = true,
	style = "relative",
	styleImg = "",
	styleAttr = "",
	rounded = "rounded-xl",
	fadeDuration = "duration-300",
	ghost = false,
	id = ""

	let loaded = false;
	let failed = false;
	let loading = true;

	onMount(() => {
		const img = new Image();
		img.src = src;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	})
</script>

<div class="{style} inline-block" style={styleAttr} {id}>
	<img {src} {alt} loading={lazy ? "lazy" : "eager"} class="w-full h-full object-cover {styleImg} block transition-opacity ease-out {fadeDuration} {loaded ? "opacity-100" : "opacity-0"}" />
	{#if (loading && ghost)}
		<div class="{rounded} bg-white/30 animate-pulse absolute left-0 top-0 w-full h-full" transition:fade={{duration: 300}} />
	{:else if failed}
		<div class="{rounded} bg-red-500/30 border border-red-500/60 flex items-center justify-center absolute left-0 top-0 w-full h-full" transition:fade={{duration: 300}}>Image failed to load</div>
	{/if}
</div>

