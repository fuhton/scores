import { combineReducers } from 'redux';
import {
	ADD_MEASURE,
	SET_BEAT_VALUE,
	SET_MEASURES,
	SET_NOTE_VALUE,
	SET_SOUNDS,
} from '../constants';

const sounds = (state = [], action) => {
	switch (action.type) {
		case SET_SOUNDS:
			return action.sounds;
		default:
			return state;
	}
};

const measures = (state = [], action) => {
	switch (action.type) {
		case SET_MEASURES:
			return action.measures;
		case ADD_MEASURE:
			return [
				...state,
				action.measures,
			];
		default:
			return state;
	}
};

const noteValue = (state = '4', action) => {
	switch (action.type) {
		case SET_NOTE_VALUE:
			return action.noteValue;
		default:
			return state;
	}
};

const beatValue = (state = '4', action) => {
	switch (action.type) {
		case SET_BEAT_VALUE:
			return action.beatValue;
		default:
			return state;
	}
};


const rootReducer = combineReducers({
	beatValue,
	measures,
	noteValue,
	sounds,
});

export default rootReducer;
