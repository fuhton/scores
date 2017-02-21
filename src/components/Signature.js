import React, { PropTypes } from 'react';
import { css } from 'glamor';
import { BassStaff } from './BassStaff';
import { Staff } from './Staff';

const defaultStyles = {
	Signature: {
		display: 'inline-block',
		position: 'relative',
	},
	SignatureContainer: {
		display: 'block',
		position: 'relative',
	},
	SignatureStaff: {
		width: '30px',
	},
	SignatureChild: {
		position: 'absolute',
		left: '5px',
		fontSize: '33px',
		fontFamily: 'monospace',
	},
	Beat: {
		top: '2px',
	},
	Note: {
		top: '24px',
	},
};

const Signature = ({
	beat = '4',
	note = '4',
	styles = {},
}) => (
	<div className="Signature" {...css(Object.assign({}, styles, defaultStyles.Signature))}>
		<div className="SignatureContainer" {...css(defaultStyles.SignatureContainer)}>
			<Staff styles={defaultStyles.SignatureStaff}>
				<div>
					<span className="SignatureChild Beat" {...css(Object.assign({}, defaultStyles.SignatureChild, defaultStyles.Beat))}>{beat}</span>
					<span className="SignatureChild Note" {...css(Object.assign({}, defaultStyles.SignatureChild, defaultStyles.Note))}>{note}</span>
				</div>
			</Staff>
		</div>
		<div className="SignatureContainer" {...css(defaultStyles.SignatureContainer)}>
			<BassStaff styles={defaultStyles.SignatureStaff}>
				<div>
					<span className="SignatureChild Beat" {...css(Object.assign({}, defaultStyles.SignatureChild, defaultStyles.Beat))}>{beat}</span>
					<span className="SignatureChild Note" {...css(Object.assign({}, defaultStyles.SignatureChild, defaultStyles.Note))}>{note}</span>
				</div>
			</BassStaff>
		</div>
	</div>
);

Signature.propTypes = {
	beat: PropTypes.string.isRequired,
	note: PropTypes.string.isRequired,
	styles: PropTypes.object,
};

export default Signature;
