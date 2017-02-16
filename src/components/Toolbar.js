import React from 'react';
import { css } from 'glamor';
import AddMeasure from '../containers/toolbars/AddMeasure';

const defaultStyles = {
	height: '40px',
	width: '200px',
};

export const Toolbar = () => (
	<div className="toolbar" {...css(defaultStyles)} >
		<AddMeasure />
	</div>
);

export default Toolbar;
