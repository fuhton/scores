import { combineReducers } from 'redux';
import {
	PLAY_NOTE,
	SET_BEAT_VALUE,
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

const playNote = (state = 'c4', action) => {
	switch (action.type) {
		case PLAY_NOTE:
			return action.note;
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
	playNote,
	beatValue,
	noteValue,
	sounds,
});

export default rootReducer;
