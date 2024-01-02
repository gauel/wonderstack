<script>
	/* Default values */
	let kicker = 'Kicker — ',
		title = 'Title',
		description = 'Description',
		shareImage = '/shareimage.jpg',
		themeColor = '#000';

	export let meta = {
		title: '',
		description: '',
		shareImage: '',
		themeColor: ''
	};
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Language" content="cs" />
	<!-- This achieves accessibility, but breaks mobile PWAs by native zoom on input focus
		<meta name="viewport" content="width=device-width, initial-scale=1">
	-->
	<meta
		name="viewport"
		content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>

	<title>{kicker}{meta?.title || title}</title>
	<meta name="description" content={meta?.description || description} />

	<meta property="og:title" content={meta?.title || title} />
	<meta property="og:description" content={meta?.description || description} />
	<meta property="og:image" content={meta?.shareImage || shareImage} />
	<meta property="og:type" content="website" />

	<meta property="twitter:title" content="" />
	<meta property="twitter:description" content={meta?.description || description} />
	<meta property="twitter:image" content={meta?.shareImage || shareImage} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="theme-color" content={meta?.themeColor || themeColor} />
	<link href="/favicon.png" rel="shortcut icon" type="image/x-icon" />
	<link href="/touchicon.png" rel="apple-touch-icon" />
</svelte:head>