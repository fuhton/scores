import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { setNoteValue, setBeatValue } from '../actions';
import Score from '../components/Score';
import data from '../../data/data.json';

const styles = {
	margin: '0 auto',
};

class AppContainer extends Component {

	componentDidMount() {
		const { dispatch } = this.props;

		if (!data) {
			return;
		}
		dispatch(setNoteValue(data.note));
		dispatch(setBeatValue(data.beat));
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
