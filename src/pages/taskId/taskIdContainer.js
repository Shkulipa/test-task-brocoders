import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { TASKS_ARR_STORAGE } from '../../utils/consts';

import TaskId from './taskId';

const TaskIdContainer = () => {
	//react-router-dom:
	let { id } = useParams();
	let history = useHistory();

	//states:
	const [isLoading, setLoading] = useState(true);
	const [taskData, setTaskData] = useState(false);

	//data:
	useEffect(() => {
		if (localStorage.getItem(TASKS_ARR_STORAGE)) {
			const parseTaskListLocalStorage = JSON.parse(
				localStorage.getItem(TASKS_ARR_STORAGE)
			);
			const findTask = parseTaskListLocalStorage.find(
				task => task.id === id
			);
			if (!findTask) {
				return history.push('/404');
			}
			setLoading(false);
			return setTaskData(findTask);
		}

		return history.push('/404');
	}, [isLoading]);

	return <TaskId isLoading={isLoading} taskData={taskData} />;
};

export default TaskIdContainer;
