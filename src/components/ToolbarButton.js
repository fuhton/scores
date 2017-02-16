import React, { PropTypes } from 'react';
import { css } from 'glamor';

const defaultStyles = {
	height: '100%',
	display: 'block',
	':hover': {
		cursor: 'pointer',
		background: 'lightgray',
	},
};

export const ToolbarButton = ({ onClick, text = '' }) => (
	<button className="toolbarButton" onClick={onClick} {...css(defaultStyles)}>
		{text}
	</button>
);

ToolbarButton.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string,
};

export default ToolbarButton;
