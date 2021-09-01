import React, { useEffect } from 'react';

//redux:
import { addTask } from './store/tasksReducer';
import { useDispatch } from 'react-redux';

//styles:
import './App.css';

//material-ui:
import Container from '@material-ui/core/Container';

//react-router-dom:
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

//pages:
import { routers } from './routers/routers';

//variables:
import { TASKS_ARR_STORAGE } from './utils/consts';

function App() {
    const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem(TASKS_ARR_STORAGE)) {
			const parseTaskListLocalStorage = JSON.parse(localStorage.getItem(TASKS_ARR_STORAGE));
			parseTaskListLocalStorage.forEach(task => dispatch(addTask(task)));
		}
	}, [dispatch])

	return (
		<Container maxWidth="lg">
			<Router>
				<Switch>
					{routers.map(({path, Component, isExact}) =>
						<Route key={path} path={path} exact={isExact} component={Component} />
					)}
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
