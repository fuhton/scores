import React from 'react';
import { css } from 'glamor';

const styles = {
	borderBottom: '1px solid black',
	display: 'block',
	height: '10px',
};

export const Bar = () => (
	<div className="Bar" {...css(styles)} />
);

export default Bar;
