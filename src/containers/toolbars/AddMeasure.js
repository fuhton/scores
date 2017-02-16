import { connect } from 'react-redux';
import { addMeasure } from '../../actions/toolbar';
import { ToolbarButton } from '../../components/ToolbarButton';

const mapStateToProps = () => ({
	text: 'Add Measure',
});

const mapDispatchToProps = dispatch => ({
	onClick: () => {
		dispatch(addMeasure([
			{ treble: [], bass: [] },
			{ treble: [], bass: [] },
		]));
	},
});

const AddMeasure = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ToolbarButton);

export default AddMeasure;
