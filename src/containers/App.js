import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
	setBeatValue,
	setMeasures,
	setNoteValue,
	setSounds,
} from '../actions';
import Score from '../components/Score';
import data from '../../data/data.json';
import { Sound } from '../audio/Sound';
import { frequency } from '../constants/frequency';

const defaultStyles = {
	margin: '0 auto',
};

class AppContainer extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		const sounds = [];

		if (!data) {
			return;
		}

		dispatch(setMeasures(data.measures));
		dispatch(setNoteValue(data.note));
		dispatch(setBeatValue(data.beat));

		_.each(frequency, (el, i) => {
			sounds[i] = new Sound(el);
		});
		dispatch(setSounds(sounds));
	}

	render() {
		const { result } = this.props;

		return (
			<div>
				<Score styles={defaultStyles} data={result} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const result = Object.assign({}, data, state);

	return { result };
};

AppContainer.propTypes = {
	dispatch: PropTypes.func,
	result: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AppContainer);
