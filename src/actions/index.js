export const SET_NOTE_VALUE = 'SET_NOTE_VALUE';
export const SET_BEAT_VALUE = 'SET_BEATS';

export const setNoteValue = noteValue => ({
	type: SET_NOTE_VALUE,
	noteValue,
});

export const setBeatValue = beatValue => ({
	type: SET_BEAT_VALUE,
	beatValue,
});
