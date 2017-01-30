import { connect } from 'react-redux';
import { playNote } from '../actions';
import { notes } from '../constants/notes';
import { Note } from '../components/Note';

const mapStateToProps = (state, ownProps) => {
	const { note, type } = ownProps;
	return {
		note,
		topStyle: {
			top: type === 'treble' ? `${59 - ((notes[note]) * 5.5)}px` : `${-5.5 - (notes[note] * 5.5)}px`,
		},
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(playNote(ownProps.note));
	},
});

const DynamicNote = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Note);

export default DynamicNote;
