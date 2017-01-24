import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Bar } from './Bar';
import { Note } from './Note';

const defaultStyles = {};

const noteStyles = {
	display: 'inline-block',
	position: 'relative',
	width: '15px',
};

// Staff is equal to ONE duration. Notes should have their duration value
// checked, and if they exceed ONE duration, stop mapping
export const Staff = ({
	type = 'treble',
	styles = {},
	data = {},
}) => (
	<div {...css(Object.assign({}, styles, defaultStyles))}>
		{data.length ? null :
			<div {...css(noteStyles)}>
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
			</div>
		}
		{data.map((el, i) => (
			<div key={i} {...css(noteStyles)}>
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Note type={type} note={el.note} />
			</div>
		))}
	</div>
);

Staff.propTypes = {
	type: PropTypes.string.isRequired,
	styles: PropTypes.object,
	data: PropTypes.arrayOf(PropTypes.object),
};

export default Staff;
