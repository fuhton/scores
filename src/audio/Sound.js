const audioCtx = new (AudioContext || window.webkitAudioContext)();

export function Sound(frequency) {
	this.osc = audioCtx.createOscillator(); // Create oscillator node
	this.pressed = false; // flag to indicate if sound is playing

	/* Set default configuration for sound */
	if (typeof frequency !== 'undefined') {
		/* Set frequency. If it's not set, the default is used (440Hz) */
		this.osc.frequency.value = frequency;
	}

	/* Set waveform type. Default is actually 'sine' but triangle sounds better :) */
	this.osc.type = 'triangle';

	/* Start playing the sound. You won't hear it yet as the oscillator node needs to be
	piped to output (AKA your speakers). */
	this.osc.start(0);
}

Sound.prototype.play = function play() {
	if (!this.pressed) {
		this.pressed = true;
		this.osc.connect(audioCtx.destination);
	}
};

Sound.prototype.stop = function stop() {
	this.pressed = false;
	this.osc.disconnect();
};

export default Sound;
