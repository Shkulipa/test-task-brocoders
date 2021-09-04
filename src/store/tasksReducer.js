//variables:
import {
	ADD_TASK,
	REMOVE_TASK,
	TASKS_ARR_STORAGE,
	REMOVE_ALL_TASK,
	ASYNC_ADD_TASK_SAGA,
	ASYNC_REMOVE_TASK_SAGA,
	ASYNC_REMOVE_ALL_TASK_SAGA,
} from '../utils/consts';

const taskListStore = {
	tasksList: [],
};

export const tasksReducer = (state = taskListStore, action) => {
	switch (action.type) {
		case ADD_TASK: {
			const tasksListAddedTask = [action.payload, ...state.tasksList];
			const newStateAddedTask = {
				...state,
				tasksList: tasksListAddedTask,
			};
			localStorage.setItem(
				TASKS_ARR_STORAGE,
				JSON.stringify(tasksListAddedTask)
			);
			return newStateAddedTask;
		}

		case REMOVE_TASK: {
			const { payload } = action.payload; //id

			const tasksListRemovedTask = state.tasksList.filter(
				item => item.payload.id !== payload
			);

			const newStateRemovedTask = {
				...state,
				tasksList: tasksListRemovedTask,
			};
			localStorage.setItem(
				TASKS_ARR_STORAGE,
				JSON.stringify(tasksListRemovedTask)
			);
			return newStateRemovedTask;
		}

		case REMOVE_ALL_TASK: {
			localStorage.removeItem(TASKS_ARR_STORAGE);
			return { ...state, tasksList: [] };
		}

		default: {
			return state;
		}
	}
};

export const addTask = payload => ({ type: ADD_TASK, payload }),
	asyncAddTaskSaga = payload => ({ type: ASYNC_ADD_TASK_SAGA, payload }),
	removeTask = payload => ({ type: REMOVE_TASK, payload }),
	asyncRemoveTaskSaga = payload => ({
		type: ASYNC_REMOVE_TASK_SAGA,
		payload,
	}),
	removeAllTasks = () => ({ type: REMOVE_ALL_TASK }),
	asyncRemoveAllTasksSaga = () => ({ type: ASYNC_REMOVE_ALL_TASK_SAGA });
