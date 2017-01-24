import { combineReducers } from 'redux';
import {
	SET_NOTE_VALUE,
	SET_BEAT_VALUE,
} from '../actions';

const setNoteValue = (state = '4', action) => {
	switch (action.type) {
		case SET_NOTE_VALUE:
			return action.noteValue;
		default:
			return state;
	}
};

const setBeatValue = (state = '4', action) => {
	switch (action.type) {
		case SET_BEAT_VALUE:
			return action.beatValue;
		default:
			return state;
	}
};


const rootReducer = combineReducers({
	setNoteValue,
	setBeatValue,
});

export default rootReducer;
