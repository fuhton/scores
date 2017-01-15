import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Staff } from './Staff';
import { BarLine } from './BarLine';

const defaultStyles = {
	display: 'inline-block',
};

const bottomStyles = {
	marginTop: '25px',
};

export const Measure = ({
	measure = [{
		treble: '',
		bass: '',
	}],
}) => (
	<div {...css(defaultStyles)}>
		{measure.map((object, i) =>
			<div key={i} {...css(defaultStyles)}>
				<Staff data={object.treble} />
				<Staff styles={bottomStyles} data={object.bass} />
			</div>,
		)}
		<BarLine />
	</div>
);

Measure.propTypes = {
	measure: PropTypes.arrayOf(PropTypes.object),
};

export default Measure;
