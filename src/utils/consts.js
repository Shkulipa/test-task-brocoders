//routers:
export const HOME_ROUTE = '/',
	TASK_ROUTE = '/task',
	ERROR_404_ROUTE = '/404',
	NOT_FOUND_ROUTE = '*';

//reducers:
export const ADD_TASK = 'ADD_TASK',
	REMOVE_TASK = 'REMOVE_TASK',
	REMOVE_ALL_TASK = 'REMOVE_ALL_TASK';

//variables for localStorage and default initial value of task:
export const DESC_TASK_STORAGE = 'descTask',
	TIME_START_STORAGE = 'timeStart',
	TASKS_ARR_STORAGE = 'tasksList',
	INIT_TASK = 'Name of your task';

//colors:
export const COLOR_1 = '#3057c8',
	COLOR_2 = '#eaf6ff';

//styles:
export const BORDER_STYLE = '2px solid #e0e0e0';

//random a Tasks:
export const RANDOM_TASKS_ARR = [
	'To wash the dishes',
	'Clean up the house',
	'fill the car',
	'read a book',
	'teach lessons',
	'Vacuum the room',
	'Learn English',
	'Make a test of "Brocoders"',
	'Finish a pet project',
	'Repeat Design Algorithms',
	'Learn React',
	'Learn React Redax, Mobx',
	'Repeat regular expressions',
	'Take over the world',
	'Invent a vaccine against coronavirus',
	'help the poor',
	'Meditate',
	'To do something useful for humanity',
	'Do sports',
	'Find a new hobby',
	'The Running',
	'To build a house',
	'To see a movie',
	'Relax',
	'Wash',
	'Mop the floors',
];
