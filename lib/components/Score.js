import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Measure } from './Measure';
import { BarLine } from './BarLine';

const defaultStyles = {
	display: 'block',
	background: 'white',
	backgroundColor: 'white',
};

const Score = ({
	styles = {},
	data = {},
}) => (
	<div {...css(Object.assign({}, styles, defaultStyles))}>
		<BarLine />
		{data.measures.map((object, i) => <Measure key={i} measure={object} />)}
	</div>
);

Score.propTypes = {
	styles: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
};

export default Score;
