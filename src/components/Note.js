import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Treble } from '../constants/notes';

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
}) => {
	styles.top = Treble[note];
	return (
		<div {...css(styles)} />
	);
};

Note.propTypes = {
	note: PropTypes.string.isRequired,
};

export default Note;
