import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { TrebleStaff } from './TrebleStaff';
import { BassStaff } from './BassStaff';
import DynamicNote from '../containers/DynamicNote';
import { BarLine } from './BarLine';

const defaultStyles = {
	display: 'inline-block',
};

const size = (prop) => {
	const m = prop;
	let width = m.treble.length >= m.bass.length ? m.treble.length : m.bass.length;
	if (!width) {
		width = 1;
	}
	return width;
};

/* const sizeMeasure = (prop) => {
	const m = prop;
	m.styles = {
		width: `${size(prop) * 15}px`,
	};
	return m;
};*/

export const Measure = ({
	measure = [{ treble: '', bass: '' }],
}) => (
	<div className="Measure" {...css(defaultStyles)}>
		{measure.map((el, i) => (
			<div key={i} className="MeasureMap" {...css(Object.assign({}, el.styles, defaultStyles))}>
				{[...Array(size(el))].map((_, j) => (
					<div key={j} {...css(defaultStyles)}>
						<TrebleStaff>
							{typeof el.treble[j] === 'undefined' ? null :
								<DynamicNote type="treble" note={el.treble[j].note} />
							}
						</TrebleStaff>
						<BassStaff>
							{typeof el.bass[j] === 'undefined' ? null :
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
