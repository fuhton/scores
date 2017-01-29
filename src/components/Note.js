import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { notes } from '../constants/notes';

const styles = {
	border: '1px solid black',
	borderRadius: '50px',
	height: '8px',
	width: '8px',
	background: 'black',
	position: 'absolute',
	left: '3px',
};

export const Note = ({
	note = '',
	type = 'treble',
}) => {
	styles.top = type === 'treble' ?
	`${59 - ((notes[note]) * 5.5)}px` :
	`${-5.5 - (notes[note] * 5.5)}px`;
	return (
		<div className="note" {...css(styles)} />
	);
};

Note.propTypes = {
	note: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default Note;
