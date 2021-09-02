import React from 'react';

//react-router-dom:
import { useHistory } from 'react-router-dom';

//material-ui:
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';

//components:
import TimeDisplay from '../../components/timeDisplay';

//prop-types:
import PropTypes from 'prop-types';
import { time } from '../../utils/propsTypes';

//styles:
const useStyles = makeStyles({
	card: {
		height: '100vh',
	},
	fontSize: {
		fontSize: 20,
	},
	btn: {
		fontSize: 15,
	},
	marginRight: {
		marginRight: 3,
	},
});

const TaskId = ({ taskData, isLoading }) => {
	//react-router-dom:
	const history = useHistory();

	//styles
	const classes = useStyles();

	if (isLoading) {
		return (
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				className={classes.card}
			>
				loading...
			</Grid>
		);
	}

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			className={classes.card}
		>
			<Card>
				<CardContent>
					<Grid
						container
						alignItems="center"
						className={classes.fontSize}
					>
						<Box className={classes.marginRight}>
							<b>Task:</b>
						</Box>
						<Box>{taskData.descTask}</Box>
					</Grid>

					<br />

					<Grid
						container
						alignItems="flex-start"
						className={classes.fontSize}
					>
						<Box className={classes.marginRight}>
							<b>Start Time:</b>
						</Box>
						<Box>
							<TimeDisplay
								time={taskData.startTime}
								className={classes.timerBlock}
							/>
						</Box>
					</Grid>

					<br />

					<Grid
						container
						alignItems="flex-start"
						className={classes.fontSize}
					>
						<Box className={classes.marginRight}>
							<b>End Time:</b>
						</Box>
						<Box>
							<TimeDisplay
								time={taskData.endTime}
								className={classes.timerBlock}
							/>
						</Box>
					</Grid>

					<br />

					<Grid
						container
						alignItems="center"
						className={classes.fontSize}
					>
						<Box className={classes.marginRight}>
							<b>Spend Time:</b>
						</Box>
						<Box>
							<TimeDisplay
								time={taskData.spendTime}
								className={classes.timerBlock}
							/>
						</Box>
					</Grid>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						onClick={() => history.push('/')}
						className={classes.btn}
					>
						<ArrowBackIcon
							fontSize="small"
							className={classes.marginRight}
						/>{' '}
						back
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

TaskId.propTypes = {
	descTask: PropTypes.string,
	taskData: PropTypes.shape({
		id: PropTypes.string,
		descTask: PropTypes.string,
		startTime: PropTypes.shape(time),
		endTime: PropTypes.shape(time),
		spendTime: PropTypes.shape(time),
	}),
	isLoading: PropTypes.bool,
};

export default TaskId;
