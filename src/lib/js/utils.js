import { log } from "$lib/js/logger";
import { gsap } from "$lib/js/gsap";

const MODULE = "Utils";

export const scrollToElement = (id, duration = 3, offset = 0) => {
	log(MODULE, 'Scrolling to:', id, "with duration:", duration, "with offset", offset);
	gsap.to(window, {
		duration,
		scrollTo: { y: '#' + id, offsetY: offset },
		ease: 'power2'
	});
};

export const disableScroll = () => {
	log(MODULE, "Disabling scroll on Page");
	document.documentElement.classList.add('scroll-disabled');
}

export const enableScroll = () => {
	log(MODULE, "Enabling scroll on Page");
	document.documentElement.classList.remove('scroll-disabled');
}

export const setScroll = (v) => {
	log(MODULE, "setScroll(" + v + ")");
	document.documentElement.classList[v ? 'remove' : 'add']('scroll-disabled');
}

export function clickOutside(node) {

	const handleClick = event => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent('click_outside', node)
			)
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	}
}

let lazyOptions = {
	root: null,
	rootMargin: "50px",
	threshold: 0
}

export const lazyLoad = (image, src) => {
	const loaded = () => {
		image.style.opacity = "1"
	}
	const observer = new IntersectionObserver(entries => {
		if (entries[0].isIntersecting) {
			image.src = src
			if (image.complete) {
			} else {
				image.addEventListener('load', loaded)
			}
		}
	}, lazyOptions)
	observer.observe(image)

	return {
		destroy() {
			image.removeEventListener('load', loaded)
		}
	}
}