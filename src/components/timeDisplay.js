import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const TimeDisplay = ({time, classNameItemInner ,...props}) => {
	return (
		<Grid {...props}>
			<Box item className={classNameItemInner}>
				{time.h >= 10 ? time.h : '0' + time.h }
				:{time.m >= 10 ? time.m : '0' + time.m}
				:{time.s >= 10 ? time.s : '0' + time.s}
			</Box>
		</Grid>
	);
};

export default TimeDisplay;
