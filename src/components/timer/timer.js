import React from 'react';

//material-ui:
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

//components:
import TimeDisplay from '../timeDisplay';

//variables:
import { COLOR_1 } from '../../utils/consts';

//styles:
const useStyles = makeStyles({
	circle: {
		width: 250,
		height: 250,
		borderRadius: '50%',
		boxShadow: '0 6px 11px rgb(0, 0, 0, .22)',
		margin: '15px 0'
	},
	timerBlock: {
		color: COLOR_1,
		fontSize: 38
	},
});

const Timer = ({time}) => {
	//styles
	const classes = useStyles();

	return (
		<Grid
			container
			justifyContent='center'
			alignItems='center'
			spacing={1}
			className={classes.circle}
		>
			<TimeDisplay
				time={time}
				className={classes.timerBlock}
			/>
		</ Grid>
	);
};

export default Timer;
