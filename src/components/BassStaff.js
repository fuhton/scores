import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Staff } from './Staff';

const defaultStyles = {
	display: 'block',
	position: 'relative',
	width: '15px',
	marginTop: '25px',
};

export const BassStaff = ({
	styles = {},
	children,
}) => (
	<div className="BassStaff" {...css(Object.assign({}, defaultStyles, styles))}>
		<Staff styles={styles}>
			{children}
		</Staff>
	</div>
);

BassStaff.propTypes = {
	styles: PropTypes.object,
	children: PropTypes.object,
};

export default BassStaff;
