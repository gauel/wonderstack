import { gsap } from "gsap/dist/gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Flip } from "gsap/dist/Flip";
import { browser } from "$app/environment"

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Flip);


let mBlurProperty;
export let isTouch;

export let wScreen = 0;

if (browser) {
	const mm = gsap.matchMedia();

	wScreen = window.innerWidth;

	/* Flip only on bigger screens */
	mm.add('(pointer: fine)', () => {
		isTouch = false;
	});

	mm.add('(pointer: coarse)', () => {
		isTouch = true;
	});
}


/* Blur plugin */
const getBlurProperty = () => mBlurProperty || (mBlurProperty = gsap.utils.checkPrefix('filter'));
const blurExp = /blur\((.+)?px\)/;
const getBlurMatch = (target) => (gsap.getProperty(target, getBlurProperty()) || '').match(blurExp) || [];

gsap.registerPlugin({
	name: 'blur',
	get(target) {
		return +getBlurMatch(target)[1] || 0;
	},
	init(target, endValue) {
		let blurProperty = getBlurProperty(),
			data = this,
			filter = gsap.getProperty(target, blurProperty),
			endBlur = 'blur(' + endValue + 'px)',
			match = getBlurMatch(target)[0],
			index;
		if (filter === 'none') {
			filter = '';
		}
		if (match) {
			index = filter.indexOf(match);
			endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
		} else {
			endValue = filter + endBlur;
			filter += filter ? ' blur(0px)' : 'blur(0px)';
		}
		data.target = target;
		data.interp = gsap.utils.interpolate(filter, endValue);
	},
	render(progress, data) {
		const blurProperty = getBlurProperty();
		data.target.style[blurProperty] = data.interp(progress);
	}
});

gsap.config({
	force3D: true,
	overwrite: 'auto'
})

/* Onable overwrite */
/*
gsap.defaults({
	overwrite: 'auto'
});
*/

export { gsap, CustomEase, Flip, ScrollTrigger }
