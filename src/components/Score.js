import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { BarLine } from './BarLine';
import { Measure } from './Measure';
import { Toolbar } from './Toolbar';

const defaultStyles = {
	display: 'block',
	background: 'white',
	backgroundColor: 'white',
};

const Score = ({
	styles = {},
	data = {},
}) => (
	<div>
		<Toolbar />
		<div className="Score" {...css(Object.assign({}, styles, defaultStyles))}>
			<BarLine />
			{data.measures.map((object, i) => <Measure key={i} measure={object} />)}
		</div>
	</div>
);

Score.propTypes = {
	styles: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
};

export default Score;
