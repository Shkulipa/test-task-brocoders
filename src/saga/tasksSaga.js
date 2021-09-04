//redux-saga:
import { put, takeEvery } from 'redux-saga/effects';

//reducers:
import { addTask, removeAllTasks, removeTask } from '../store/tasksReducer';

//variables:
import {
	ASYNC_ADD_TASK_SAGA,
	ASYNC_REMOVE_ALL_TASK_SAGA,
	ASYNC_REMOVE_TASK_SAGA,
} from '../utils/consts';

//add one task:
function* addTaskWorker(payload) {
	yield put(addTask(payload));
}

//remove one task:
function* removeTaskWorker(payload) {
	yield put(removeTask(payload));
}

//remove all task:
function* removeAllTasksWorker() {
	yield put(removeAllTasks());
}

export function* tasksWatcher() {
	yield takeEvery(ASYNC_ADD_TASK_SAGA, addTaskWorker);
	yield takeEvery(ASYNC_REMOVE_TASK_SAGA, removeTaskWorker);
	yield takeEvery(ASYNC_REMOVE_ALL_TASK_SAGA, removeAllTasksWorker);
}
