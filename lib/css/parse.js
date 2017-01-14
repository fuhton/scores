export const parsePx = (px, val) => Math.round(
	parseInt(px.replace('px'), 10) / parseInt(val.replace('px'), 10),
);

export default parsePx;
