//components:
import HomeContainer from '../pages/home/homeContainer';
import TaskIdContainer from '../pages/taskId/taskIdContainer';
import Error404 from '../pages/Error404';

//variables:
import { ERROR_404_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE, TASK_ROUTE } from '../utils/consts';

export const routers = [
	{
		path: HOME_ROUTE,
		Component: HomeContainer,
		isExact: true,
	},
	{
		path: TASK_ROUTE + '/:id',
		Component: TaskIdContainer,
		isExact: true,
	},
	{
		path: ERROR_404_ROUTE,
		Component: Error404,
		isExact: true,
	},
	{
		path: NOT_FOUND_ROUTE,
		Component: Error404,
		isExact: false,
	},

];
