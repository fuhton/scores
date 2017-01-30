import {
	PLAY_NOTE,
	SET_NOTE_VALUE,
	SET_BEAT_VALUE,
} from '../constants';

export const playNote = note => ({
	type: PLAY_NOTE,
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
