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

	//data:
	const [isLoading, setLoading] = useState(true);
	const data = taskList.find(task => task.id === id);

	console.log('redux: ', taskList)
	useEffect(() => {
		if (localStorage.getItem(TASKS_ARR_STORAGE)) {
			const parseTaskListLocalStorage = JSON.parse(localStorage.getItem(TASKS_ARR_STORAGE));
			const findTask = parseTaskListLocalStorage.find(task => task.id === id);
			if(!findTask) {
				return history.push('/404')
			}
			setLoading(false)
		} else {
			return history.push('/404')
		}
	}, [isLoading])

	if(isLoading) {
		return (
			<div>
				loading...
			</div>
		);
	}

	return (
		<Grid container justifyContent='center' alignItems='center' className={classes.card}>
			id: ${id}
		</Grid>
	);
};

export default TaskId;
