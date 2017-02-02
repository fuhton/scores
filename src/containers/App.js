import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
	setBeatValue,
	setNoteValue,
	setSounds,
} from '../actions';
import Score from '../components/Score';
import data from '../../data/data.json';
import Sound from '../audio/Sound';
import { frequency } from '../constants/frequency';

const styles = {
	margin: '0 auto',
};

class AppContainer extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		const sounds = [];

		if (!data) {
			return;
		}
		dispatch(setNoteValue(data.note));
		dispatch(setBeatValue(data.beat));
		_.each(frequency, (el, i) => {
			sounds[i] = new Sound(el);
		});
		dispatch(setSounds(sounds));
	}

	render() {
		return (
			<div>
				<Score styles={styles} data={data} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { foo } = state;

	return { foo };
};

AppContainer.propTypes = {
	dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(AppContainer);
