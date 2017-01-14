import React from 'react';
import { css } from 'glamor';

const styles = {
	borderBottom: '1px solid black',
	width: '15px',
	display: 'block',
	height: '10px',
};

export const Bar = () => (
	<div {...css(styles)} />
);

export default Bar;
