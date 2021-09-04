import React, { useEffect, useState } from 'react';

//react-redux:
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncRemoveAllTasksSaga,
	asyncAddTaskSaga,
	asyncRemoveTaskSaga,
} from '../../store/tasksReducer';

//components:
import Home from './home.js';

//Custom hooks:
import useTimer from '../../hooks/useTimer';

//services:
import SpendTime from '../../services/spendTime';
import DataTask from '../../services/dataTask';

//utils:
import { RANDOM_TASKS_ARR } from '../../utils/consts';

//variables:
import {
	DESC_TASK_STORAGE,
	INIT_TASK,
	TIME_START_STORAGE,
} from '../../utils/consts';

const HomeContainer = () => {
	//redux
	const dispatch = useDispatch();
	const taskList = useSelector(state => state.tasks.tasksList);

	//input of task
	const [inputTask, setInputTask] = useState(INIT_TASK);
	const handleChange = e => {
		setInputTask(e.currentTarget.value);
		localStorage.setItem(
			DESC_TASK_STORAGE,
			JSON.stringify(e.currentTarget.value)
		);
	};
	const { start, stop, time, isRun, setTimer } = useTimer();

	useEffect(() => {
		if (
			localStorage.getItem(TIME_START_STORAGE) &&
			localStorage.getItem(DESC_TASK_STORAGE)
		) {
			const startTime = JSON.parse(
				localStorage.getItem(TIME_START_STORAGE)
			);
			const descTask = JSON.parse(
				localStorage.getItem(DESC_TASK_STORAGE)
			);
			setInputTask(descTask);
			setTimer(startTime);
			start();
		}
	}, []);

	const startTimer = () => {
		localStorage.setItem(TIME_START_STORAGE, JSON.stringify(Date.now()));
		localStorage.setItem(DESC_TASK_STORAGE, JSON.stringify(inputTask));
		start();
	};

	const stopTimer = () => {
		const startTime = JSON.parse(localStorage.getItem(TIME_START_STORAGE));

		const spendTime = SpendTime(startTime, Date.now());
		const parseDateStart = new Date(startTime);
		const parseDateEnd = new Date(
			startTime + Date.parse(spendTime.spendTimeMs)
		);

		const newTaskCompleted = DataTask({
			startTime: parseDateStart,
			endTime: parseDateEnd,
			spendTime: spendTime,
			descTask: inputTask,
		});

		dispatch(asyncAddTaskSaga(newTaskCompleted));
		localStorage.removeItem(TIME_START_STORAGE);
		localStorage.removeItem(DESC_TASK_STORAGE);
		setInputTask(INIT_TASK);
		stop();
	};

	const deleteTask = id => {
		dispatch(asyncRemoveTaskSaga(id));
	};

	//generateTasks
	const generateTasks = () => {
		dispatch(asyncRemoveAllTasksSaga());

		//count tasks
		const countTasks = Math.floor(Math.random() * 6) + 10;

		//Date start
		const forLastDays = 7;
		const randomHoursStartTime =
			(Math.floor(Math.random() * 24) + 1) * 1000 * 60 * 24;
		const randomMinutesStartTime =
			(Math.floor(Math.random() * 60) + 1) * 1000 * 60;
		const randomSecondsStartTime =
			(Math.floor(Math.random() * 60) + 1) * 1000;
		const randomDaysStartTime =
			(Math.floor(Math.random() * forLastDays) + 1) * 1000 * 60 * 60 * 24;
		const randomStartTaskDate = new Date(
			Date.now() -
				randomDaysStartTime -
				randomSecondsStartTime -
				randomMinutesStartTime -
				randomHoursStartTime
		);

		//generate tasks
		let plusTimeToDateStart = Date.parse(randomStartTaskDate);
		for (let i = 0; i < countTasks; i++) {
			//dates start/end/spend time
			const startTime = new Date(plusTimeToDateStart);
			const randomTimeSpendHours =
				(Math.floor(Math.random() * 90) + 10) * 1000 * 60;
			const randomTimeSpendSeconds =
				Math.floor(Math.random() * 60) * 1000;
			const randomTimeSpend =
				randomTimeSpendHours + randomTimeSpendSeconds;
			plusTimeToDateStart += randomTimeSpend;
			const dateEndTask = new Date(plusTimeToDateStart);
			const spendTime = SpendTime(startTime, dateEndTask);
			const randomNameTask = Math.floor(
				Math.random() * RANDOM_TASKS_ARR.length
			);

			//obj data of task
			const newTaskCompleted = DataTask({
				startTime: startTime,
				endTime: dateEndTask,
				spendTime: spendTime,
				descTask: RANDOM_TASKS_ARR[randomNameTask],
			});

			dispatch(asyncAddTaskSaga(newTaskCompleted));
		}
	};

	return (
		<Home
			inputTask={inputTask}
			handleChange={handleChange}
			time={time}
			isRun={isRun}
			startTimer={startTimer}
			stopTimer={stopTimer}
			taskList={taskList}
			deleteTask={deleteTask}
			generateTasks={generateTasks}
		/>
	);
};

export default HomeContainer;
