import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Bar } from './Bar';

const defaultStyles = {
	display: 'block',
	width: '15px',
};

export const Staff = ({
	styles = {},
	data = {},
}) => {
	console.log(data);
	return (
		<div {...css(Object.assign({}, styles, defaultStyles))}>
			<Bar />
			<Bar />
			<Bar />
			<Bar />
			<Bar />
		</div>
	);
};

Staff.propTypes = {
	styles: PropTypes.object,
	data: PropTypes.arrayOf(PropTypes.object),
};

export default Staff;
