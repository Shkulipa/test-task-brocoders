import React, { useEffect, useState } from 'react';

//components:
import Home from './home.js';

//Custom hooks:
import useTimer from '../../hooks/useTimer';

//helper functions:
import SpendTime from '../../utils/spendTime';

//uniq id:
import { v4 as uuidv4 } from 'uuid';

//variables:
import { DESC_TASK, INIT_TASK, TIME_START } from '../../utils/consts';

const HomeContainer = () => {
	//tasks list
	const [taskList, setTaskList] = useState([]);

	//input of task
	const [inputTask, setInputTask] = useState(INIT_TASK);
	const handleChange = e => {
		setInputTask(e.currentTarget.value);
		localStorage.setItem(DESC_TASK, JSON.stringify(e.currentTarget.value));
	};
	const {start, stop, time, isRun, setTimer} = useTimer();

	useEffect(() => {
		if (localStorage.getItem(TIME_START) && localStorage.getItem(DESC_TASK)) {
			const startTime = JSON.parse(localStorage.getItem(TIME_START));
			const descTask = JSON.parse(localStorage.getItem(DESC_TASK));
			setInputTask(descTask);
			setTimer(startTime);
			start();
		}
	}, [])

	const startTimer = () => {
		localStorage.setItem(TIME_START, JSON.stringify(Date.now()));
		localStorage.setItem(DESC_TASK, JSON.stringify(inputTask));
		start();
	}

	const stopTimer = () => {
		const startTime = JSON.parse(localStorage.getItem(TIME_START));

		const spendTime = SpendTime(startTime);
		const parseDateStart = new Date(startTime);
		const parseDateEnd = new Date(startTime + Date.parse(spendTime.spendTimeMs));
		const id = uuidv4();

		const newTaskCompleted = {
			id,
			descTask: inputTask,
			startTime: {
				h: parseDateStart.getHours(),
				m: parseDateStart.getMinutes(),
				s: parseDateStart.getSeconds(),
				day: parseDateStart.getDate(),
				month: parseDateStart.getMonth() + 1,
				year: parseDateStart.getFullYear(),
			},
			endTime: {
				h: parseDateEnd.getHours(),
				m: parseDateEnd.getMinutes(),
				s: parseDateEnd.getSeconds(),
				day: parseDateEnd.getDate(),
				month: parseDateEnd.getMonth() + 1,
				year: parseDateEnd.getFullYear(),
			},
			spendTime: {
				h: spendTime.hours,
				m: spendTime.minutes,
				s: spendTime.seconds
			},
		};

		setTaskList(state => ([newTaskCompleted, ...state]));

		localStorage.removeItem(TIME_START);
		localStorage.removeItem(DESC_TASK);
		setInputTask(INIT_TASK);
		stop();
	}

	const deleteTask = id => {
		const newArr = taskList.filter(item => item.id !== id)
		setTaskList(newArr);
		console.log(newArr);
	}

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
		/>
	);
};

export default HomeContainer;
