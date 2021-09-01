import React, { useEffect, useState } from 'react';

//react-router-dom:
import { useParams, useHistory } from "react-router-dom";

//variables:
import { TASKS_ARR_STORAGE } from '../utils/consts';
import { useSelector } from 'react-redux';

//material-ui:
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

//styles:
//styles:
const useStyles = makeStyles({
	card: {
		height: '100vh',
	},
});

const TaskId = () => {
	//react-router-dom:
	let { id } = useParams();
	const history = useHistory();

	//styles
	const classes = useStyles();

	//redux:
	const taskList = useSelector(state => state.tasks.tasksList);

	//states:
	const [isLoading, setLoading] = useState(true);
	const [taskData, setTaskData] =  useState({});

	useEffect(() => {
		if(taskList.length > 0) {
			const task = taskList.find(task => task.id === id);
			if(task) {
				setLoading(false);
				setTaskData(task);
			} else {
				return redirect();
			}
		} else {
			return redirect();
		}
	}, [taskList]);

	const redirect = () => {
		if(taskData) {
			return null;
		} else {
			return history.push('/404');
		}
	}

	if(isLoading) {
		return (
			<div>
				loading...
			</div>
		);
	}

	return (
		<Grid container justifyContent='center' alignItems='center' className={classes.card}>
			id: ${taskData.id}
		</Grid>
	);
};

export default TaskId;
