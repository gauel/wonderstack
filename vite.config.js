import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite'

const supportedExtensions = ['png', 'jpg', 'jpeg'];

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		imagetools({
			defaultDirectives: () => new URLSearchParams('?run&width=500;800;1280;2200&format=webp;jpg')
		}),
		sveltekit()
	]
};

export default config;