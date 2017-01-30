import React, { PropTypes } from 'react';
import { css } from 'glamor';

const defaultStyles = {
	border: '1px solid black',
	borderRadius: '50px',
	height: '8px',
	width: '8px',
	background: 'black',
	position: 'absolute',
	left: '3px',
};

export const Note = ({
	onClick,
	topStyle = {},
}) => (
	<div className="note" onClick={onClick} {...css(Object.assign({}, topStyle, defaultStyles))} />
);

Note.propTypes = {
	onClick: PropTypes.func,
	topStyle: PropTypes.object.isRequired,
};

export default Note;
