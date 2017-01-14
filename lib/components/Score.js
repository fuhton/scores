import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { parsePx } from '../css/parse';
import { Measure } from './Measure';

const defaultStyles = {
	display: 'block',
	background: 'white',
	backgroundColor: 'white',
};

const Score = ({
	styles = {},
	width = '15px',
	data = {},
}) => {
	const amount = Array(...Array(parsePx(width, '15px')));
	return (
		<div {...css(Object.assign({}, styles, defaultStyles))}>
			{amount.map((object, i) => <Measure key={i} measure={data.measures[i]} />)}
		</div>
	);
};

Score.propTypes = {
	styles: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
};

export default Score;
