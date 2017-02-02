import _ from 'lodash';
import {
	END_NOTE,
	SET_BEAT_VALUE,
	SET_NOTE_VALUE,
	SET_SOUNDS,
	START_NOTE,
} from '../constants';

export const setSounds = sounds => ({
	type: SET_SOUNDS,
	sounds,
});

export const startNote = note => ({
	type: START_NOTE,
	note,
});

export const endNote = note => ({
	type: END_NOTE,
	note,
});

export const setNoteValue = noteValue => ({
	type: SET_NOTE_VALUE,
	noteValue,
});

export const setBeatValue = beatValue => ({
	type: SET_BEAT_VALUE,
	beatValue,
});

export const triggerPlayNote = note => (dispatch, getState) => {
	const { sounds } = getState();
	dispatch(startNote(note));
	sounds[note].play();
	_.delay(() => {
		dispatch(endNote(note));
		sounds[note].stop();
	}, 250);
};
