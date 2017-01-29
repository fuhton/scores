import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { Staff } from './Staff';

const defaultStyles = {
	display: 'block',
	position: 'relative',
	width: '15px',
};

export const TrebleStaff = ({
	styles = {},
	children,
}) => (
	<div className="TrebleStaff" {...css(Object.assign({}, styles, defaultStyles))}>
		<Staff>
			{children}
		</Staff>
	</div>
);

TrebleStaff.propTypes = {
	styles: PropTypes.object,
	children: PropTypes.object,
};

export default TrebleStaff;
