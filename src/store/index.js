import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers:
import { tasksReducer } from './tasksReducer';

const rootReducer = combineReducers({
	tasks: tasksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
