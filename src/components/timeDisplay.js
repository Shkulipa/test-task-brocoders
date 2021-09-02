import React from 'react';

// material-ui:
import Box from '@material-ui/core/Box';

const TimeDisplay = ({time, ...props}) => {
	return (
		<Box {...props}>
			{time.h >= 10 ? time.h : '0' + time.h }
			:{time.m >= 10 ? time.m : '0' + time.m}
			:{time.s >= 10 ? time.s : '0' + time.s}

			{time.day &&
				<>
					<br />
					({time.day < 10 ? '0'+time.day : time.day}
					.{time.month < 10 ? '0'+time.month : time.month}
					.{time.year})
				</>
			}
		</Box>
	);
};

export default TimeDisplay;
