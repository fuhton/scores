import React from 'react';
import { css } from 'glamor';

const defaultStyles = {
	display: 'inline-block',
	borderRight: '1px solid black',
	height: '125px',
};

export const BarLine = () => (
	<div className="barLine" {...css(defaultStyles)} />
);

export default BarLine;
