import { combineReducers } from 'redux';
import {
	PLAY_NOTE,
	SET_NOTE_VALUE,
	SET_BEAT_VALUE,
} from '../constants';

const playNote = (state = 'c4', action) => {
	switch (action.type) {
		case PLAY_NOTE:
			return action.note;
		default:
			return state;
	}
};

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
	playNote,
	setNoteValue,
	setBeatValue,
});

export default rootReducer;
