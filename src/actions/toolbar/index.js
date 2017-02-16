import {
	ADD_MEASURE,
	DELETE_MEASURE,
} from '../../constants';

export const addMeasure = measures => ({
	type: ADD_MEASURE,
	measures,
});

export const removeMeasure = measures => ({
	type: DELETE_MEASURE,
	measures,
});
