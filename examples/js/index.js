import React from 'react';
import { render } from 'react-dom';
import App from './App';

window.addEventListener('load', () => {
	render(<App />, document.querySelector('#demo'));
});
