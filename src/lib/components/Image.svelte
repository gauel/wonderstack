<script>
	import { lazyLoad } from '$lib/js/lazyLoad.js';

	export let src = '';
	export let alt = '';
	export let lazy = true;
	export let square = true;
	export let hover = true;
	export let width = 'w-full';
	export let rounded = 'rounded-lg';
	export let flex = true;
	export let style = '';
</script>

<div class="img-wrapper relative {rounded} {width} {style}" class:hover class:flex-1={flex}>
	<div class="ghost {rounded}" class:aspect-square={square} />
	<img
		use:lazyLoad={src}
		class="relative z-10 {width} {rounded} object-cover opacity-0 transition-all duration-500"
		class:aspect-square={square}
		{alt}
		loading={lazy ? 'lazy' : 'eager'}
	/>
</div>