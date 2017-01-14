import React from 'react';
import { css } from 'glamor';
import { Bar } from './Bar';

const styles = {
	display: 'block',
	width: '15px',
	marginBottom: '25px',
};

export const Staff = () => (
	<div {...css(styles)}>
		<Bar />
		<Bar />
		<Bar />
		<Bar />
		<Bar />
	</div>
);

export default Staff;
