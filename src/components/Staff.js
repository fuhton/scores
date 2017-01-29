import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Bar } from './Bar';

const defaultStyles = {
	display: 'inline-block',
	position: 'relative',
	width: '15px',
};

// Staff is equal to ONE duration. Notes should have their duration value
// checked, and if they exceed ONE duration, stop mapping
export const Staff = ({
	styles = {},
	children,
}) => (
	<div className="Staff" {...css(Object.assign({}, styles, defaultStyles))}>
		<Bar />
		<Bar />
		<Bar />
		<Bar />
		<Bar />
		{children}
	</div>
);

Staff.propTypes = {
	styles: PropTypes.object,
	children: PropTypes.object,
};

export default Staff;
