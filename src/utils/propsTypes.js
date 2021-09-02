import PropTypes from 'prop-types';

export const time = {
	h: PropTypes.number.isRequired,
	m: PropTypes.number.isRequired,
	s: PropTypes.number.isRequired,
	day: PropTypes.number,
	month: PropTypes.number,
	year: PropTypes.number,
};
