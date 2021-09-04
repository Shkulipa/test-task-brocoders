//redux:
import { createStore, combineReducers, applyMiddleware } from 'redux';

//redux-devtools-extension:

//reducers:
import { tasksReducer } from './tasksReducer';

//redux-saga:
import createSagaMiddleware from 'redux-saga';
//root watcher:
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	tasks: tasksReducer,
});

// export const store = createStore(rootReducer);
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
