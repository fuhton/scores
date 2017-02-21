import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { TrebleStaff } from './TrebleStaff';
import { BassStaff } from './BassStaff';
import DynamicNote from '../containers/DynamicNote';
import { BarLine } from './BarLine';

const defaultStyles = {
	display: 'inline-block',
	position: 'relative',
	':hover': {
		cursor: 'pointer',
		'& .MeasureState': {
			background: 'oldlace',
		},
	},
};

const stateStyles = {
	position: 'absolute',
	right: '1px',
	left: '0',
	top: '10px',
	bottom: '4px',
};

const size = (prop) => {
	const m = prop;
	let width = m.treble.length >= m.bass.length ? m.treble.length : m.bass.length;
	if (!width) {
		width = 1;
	}
	return width;
};

export const Measure = ({
	measure = [{ treble: '', bass: '' }],
}) => (
	<div className="Measure" {...css(defaultStyles)}>
		<div className="MeasureState" {...css(stateStyles)} />
		{measure.map((el, i) => (
			<div key={i} className="MeasureMap" {...css(Object.assign({}, el.styles, defaultStyles))}>
				{[...Array(size(el))].map((_, j) => (
					<div key={j} {...css(defaultStyles)}>
						<TrebleStaff>
							{typeof el.treble[j] === 'undefined' ? <span /> :
								<DynamicNote type="treble" note={el.treble[j].note} />
							}
						</TrebleStaff>
						<BassStaff>
							{typeof el.bass[j] === 'undefined' ? <span /> :
								<DynamicNote type="bass" note={el.bass[j].note} />
							}
						</BassStaff>
					</div>
				))}
			</div>
		))}
		<BarLine />
	</div>
);

Measure.propTypes = {
	measure: PropTypes.arrayOf(PropTypes.object),
};

export default Measure;
