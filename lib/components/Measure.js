/* import React, { PropTypes } from 'react';
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
*/

import React, { PropTypes, Component } from 'react';
import { css } from 'glamor';
import { Staff } from './Staff';
import { BarLine } from './BarLine';

const defaultStyles = {
	display: 'inline-block',
};

const bottomStyles = {
	marginTop: '25px',
};


class Measure extends Component {
	sizeMeasure(prop) {
		const m = prop;
		let width = m.treble.length >= m.bass.length ? m.treble.length : m.bass.length;

		if (!width) {
			width = 1;
		}

		m.styles = {
			width: `${width * 15}px`,
		};
		return m;
	}

	render() {
		const { measure = [{ treble: '', bass: '' }] } = this.props;

		measure.map(el => this.sizeMeasure(el));

		return (
			<div className="Measure" {...css(defaultStyles)}>
				{measure.map((el, i) =>
					<div key={i} className="MeasureMap" {...css(Object.assign({}, el.styles, defaultStyles))}>
						<Staff data={el.treble} />
						<Staff styles={bottomStyles} data={el.bass} />
					</div>,
				)}
				<BarLine />
			</div>
		);
	}
}

Measure.propTypes = {
	measure: PropTypes.arrayOf(PropTypes.object),
};

export default Measure;
