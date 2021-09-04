import { all } from 'redux-saga/effects';

//watchers:
import { tasksWatcher } from './tasksSaga';

export function* rootWatcher() {
	yield all([tasksWatcher()]);
}
