import React from 'react';

//material-ui
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

//styles
const useStyles = makeStyles({
	circle: {
		width: 250,
		height: 250,
		borderRadius: '50%',
		boxShadow: '0 0 15px rgba(0,0,0, .1)',
		margin: '15px 0'
	},
	timerBlock: {
		color: '#3057c8',
		fontSize: 38
	},
});

const Timer = ({time}) => {
	//styles
	const classes = useStyles();

	return (
		<Grid container justifyContent='center' alignItems='center' className={classes.circle} spacing={1}>
			<Grid item className={classes.timerBlock}>
				{time.h >= 10 ? time.h : '0' + time.h }:{time.m >= 10 ? time.m : '0' + time.m}:{time.s >= 10 ? time.s : '0' + time.s}
			</Grid>
		</Grid>
	);
};

export default Timer;
