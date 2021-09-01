//variables:
import { ADD_TASK, REMOVE_TASK, TASKS_ARR_STORAGE } from '../utils/consts';


const taskListStore = {
	tasksList: [],
}

export const tasksReducer = (state = taskListStore, action) => {
	switch (action.type) {
		case ADD_TASK:
			const tasksListAddedTask = [action.payload, ...state.tasksList];
			const newStateAddedTask = {...state, tasksList: tasksListAddedTask};
			localStorage.setItem(TASKS_ARR_STORAGE, JSON.stringify(tasksListAddedTask));
			return newStateAddedTask;

		case REMOVE_TASK:
			const tasksListRemovedTask = state.tasksList.filter(item => item.id !== action.payload);
			const newStateRemovedTask = {...state, tasksList: tasksListRemovedTask};
			localStorage.setItem(TASKS_ARR_STORAGE, JSON.stringify(tasksListRemovedTask));
			return newStateRemovedTask;

		default:
			return state;
	}
}

export const addTask = payload => ({type: ADD_TASK, payload}),
		  removeTask = payload => ({type: REMOVE_TASK, payload});
