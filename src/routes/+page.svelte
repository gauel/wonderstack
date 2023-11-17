<script>
	import { Image } from "@unpic/svelte";
	import image from "$lib/assets/shareimage.jpg"
</script>

<div class="text-white w-full h-screen flex flex-col items-center justify-center gap-4 ">
	<Image src={image} class="rounded-xl" />
	<h1 class="text-clamp-xs font-bold uppercase">Svelte starter</h1>
	<p class="opacity-50">With our custom features</p>
</div>