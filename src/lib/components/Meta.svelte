<script>
	export let meta = {
		kicker: "",
		title: "",
		description: "",
		shareImage: "",
		themeColor: ""
	}

	/* Default values */
	let kicker = "Pulsar — ",
		title = "Page title",
		description = "Description",
		shareImage = "/shareimage.jpg",
		themeColor = "#10171D"
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Language" content="cs" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<title>{meta.kicker || kicker} {meta.title || title}</title>
	<meta name="description" content={meta.description || description || description} />

	<meta property="og:title" content={meta.title || title} />
	<meta property="og:description" content={meta.description || description} />
	<meta property="og:image" content={meta.shareImage || shareImage} />
	<meta property="og:type" content="website" />

	<meta property="twitter:title" content="" />
	<meta property="twitter:description" content={meta.description || description} />
	<meta property="twitter:image" content={meta.shareImage || shareImage} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="theme-color" content={meta.themeColor || themeColor} />
	<link href="/touchicon.png" rel="shortcut icon" type="image/x-icon" />
	<link href="/touchicon.png" rel="apple-touch-icon" />
</svelte:head>