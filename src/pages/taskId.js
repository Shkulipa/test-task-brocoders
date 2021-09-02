import React, { useEffect, useState } from 'react';

//react-router-dom:
import { useParams, useHistory } from "react-router-dom";

//variables:
import { TASKS_ARR_STORAGE } from '../utils/consts';

//material-ui:
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import TimeDisplay from '../components/timeDisplay';

//styles:
const useStyles = makeStyles({
	card: {
		height: '100vh',
	},
	fontSize: {
		fontSize: 20
	},
	btn: {
		fontSize: 15
	},
	marginRight: {
		marginRight: 3
	}
});

const TaskId = () => {
	//react-router-dom:
	let { id } = useParams();
	const history = useHistory();

	//styles
	const classes = useStyles();

	//states:
	const [isLoading, setLoading] = useState(true);
	const [taskData, setTaskData] =  useState(false);

	//data:
	useEffect(() => {
		if (localStorage.getItem(TASKS_ARR_STORAGE)) {
			const parseTaskListLocalStorage = JSON.parse(localStorage.getItem(TASKS_ARR_STORAGE));
			const findTask = parseTaskListLocalStorage.find(task => task.id === id);
			if(!findTask) {
				return history.push('/404')
			}
			setLoading(false);
			return setTaskData(findTask);
		}

		return history.push('/404')
	}, [isLoading])

	if(isLoading) {
		return (
			<Grid container justifyContent='center' alignItems='center' className={classes.card}>
				loading...
			</Grid>
		);
	}

	return (
		<Grid container justifyContent='center' alignItems='center' className={classes.card}>
			<Card>
				<CardContent>

					<Grid container alignItems='center' className={classes.fontSize}>
						<Box className={classes.marginRight}>
							<b>Task:</b>
						</Box>
						<Box>
							{taskData.descTask}
						</Box>
					</Grid>

					<br />

					<Grid container alignItems='flex-start' className={classes.fontSize}>
						<Box className={classes.marginRight}>
							<b>Start Time:</b>
						</Box>
						<Box >
							<TimeDisplay
								time={taskData.startTime}
								className={classes.timerBlock}
							/>
						</Box>
					</Grid>

					<br />

					<Grid container alignItems='flex-start' className={classes.fontSize}>
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

					<Grid container alignItems='center' className={classes.fontSize}>
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
					<Button size="small" onClick={() => history.push('/')} className={classes.btn}>
						<ArrowBackIcon fontSize='small' className={classes.marginRight} /> back
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default TaskId;
