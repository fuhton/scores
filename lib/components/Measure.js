import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Staff } from '../components/Staff';

const defaultStyles = {
	display: 'inline-block',
};

export const Measure = ({
	measure = {
		treble: '',
		bass: '',
	},
}) => (
	<div {...css(defaultStyles)}>
		<Staff data={measure.treble} />
		<Staff data={measure.bass} />
	</div>
);

Measure.propTypes = {
	measure: PropTypes.object,
};

export default Measure;
