<script>
	import Fa from 'svelte-fa'

	import { faCertificate } from '@fortawesome/free-solid-svg-icons'
	import Img from '@zerodevx/svelte-img'

	/* Images */
	import firstImage from  '$lib/assets/shareimage.jpg'
</script>
<div class="text-white w-full h-screen flex flex-col items-center justify-center gap-4 ">
	<!--
		Image usage:
		<Img class="cool cats" src={firstImage} alt="Cute cat" width={450} height={237} />
	-->
	<Fa icon={faCertificate} class="text-[64px] text-amber-500 animate-spin" />
	<h1 class="text-clamp-xs font-bold uppercase">Svelte starter</h1>
	<p class="opacity-50">With our custom features</p>
</div>