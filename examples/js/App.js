import React from 'react';
import Score from '../../lib/components/Score';
import data from '../data.json';

const styles = {
	width: '200px',
	margin: '0 auto',
};

const App = () => (
	<div>
		<Score styles={styles} width={styles.width} data={data} />
	</div>
);

export default App;
