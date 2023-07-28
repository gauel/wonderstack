let lz = (v) => {
	return ('0' + v).slice(-2);
}

const showDate = false;

let formatDate = (v) => {
	let dt = v instanceof Date ? v : new Date(v);
	return showDate ? `(${lz(dt.getHours())}:${lz(dt.getMinutes())}:${lz(dt.getSeconds())})` : '';
}

export const log = (m, ...params) => {
	const dt = new Date();
	console.log("%c" + "📄 " + m, "color: #3b82f6", formatDate(dt), ...params);
}

export const anim = (m, ...params) => {
	const dt = new Date();
	console.log("%c" + "▶️ " + m, "color: #3b82f6", formatDate(dt), ...params);
}

/**
 * error handler
 */
export const error = (m, ...params) => {
	const dt = new Date();
	console.error(m + " ⛔", formatDate(dt), ...params);
}

/**
 * warn handler
 */
export const warn = (m, ...params) => {
	const dt = new Date();
	console.warn(m, formatDate(dt), ...params);
}

/**
 * success handler
 */
export const ok = (m, ...params) => {
	const dt = new Date();
	console.log("%c" + "✅ " + m, "color: #22c55e", formatDate(dt), ...params);
}