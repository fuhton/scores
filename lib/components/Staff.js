import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Bar } from './Bar';
import { Note } from './Note';

const defaultStyles = {};
/*
	display: 'inline-block',
	position: 'relative',
};*/

const noteStyles = {
	display: 'inline-block',
	position: 'relative',
	width: '15px',
};

// Staff is equal to ONE duration. Notes should have their duration value
// checked, and if they exceed ONE duration, stop mapping
export const Staff = ({
	styles = {},
	data = {},
}) => (
	<div {...css(Object.assign({}, styles, defaultStyles))}>
		{data.map((el, i) => (
			<div key={i} {...css(noteStyles)}>
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Note note={el.note} />
			</div>
		))}
	</div>
);

Staff.propTypes = {
	styles: PropTypes.object,
	data: PropTypes.arrayOf(PropTypes.object),
};

export default Staff;
