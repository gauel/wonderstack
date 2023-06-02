<script>
	import "$lib/app.css"
	import Meta from "$lib/components/Meta.svelte";
	import { page } from "$app/stores";
</script>

<!-- Global meta data -->
<Meta meta={$page?.data?.meta} />

<slot />