import React, { useEffect, useState } from 'react';

//components
import Timer from '../components/timer/timer';

//material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

//styles
const useStyles = makeStyles({
	panelControl: {
		padding: '15px 0',
	},
	input: {
		'& > div': {
			color: '#3057c8'
		},
	},
});

const Home = () => {
	//styles
	const classes = useStyles();

	//input of task
	const [inputTask, setInputTask] = useState('Name of your task');
	const handleChange = e => setInputTask(e.currentTarget.value);

	//timer
	const [time, setTime] = useState({h: 0, m: 0, s: 0, date: null});
	const [interv, setInterv] = useState();
	const [isRun, setIsRun] = useState(false);
	let updatedH = time.h,
		updatedM = time.m,
		updatedS = time.s;

	useEffect(() => {
		if (localStorage.getItem('timer') && localStorage.getItem('taskName')) {
			const {date} = JSON.parse(localStorage.getItem('timer'));
			setInputTask(localStorage.getItem('taskName'))
			const dateStartTask = new Date(date);
			const newTime =  new Date(Date.now() - dateStartTask);
			setIsRun(true);
			updatedH = parseInt((newTime / (1000 * 60 * 60)) % 24);
			updatedM = parseInt((newTime / (1000 * 60)) % 60);
			updatedS = parseInt((newTime / 1000) % 60);
			setInterv(setInterval(run, 1000));
		}
	}, [])

	const handlerBtn = () => {
		if (!isRun) {
			run();
			setTime({h: 0, m: 0, s: 1, date: Date.now()});
			localStorage.setItem('timer', JSON.stringify({date: Date.now()}))
			localStorage.setItem('taskName', inputTask);
			setIsRun(state => !state);
			setInterv(setInterval(run, 1000));
		} else {
			clearInterval(interv);
			setIsRun(state => !state);
			setTime({h: 0, m: 0, s: 0, date: null});
			localStorage.removeItem('timer');
		}
	};

	const run = () => {
		if (updatedM === 59) {
			updatedH++;
			updatedM = -1;
		}
		if (updatedS === 59) {
			updatedM++;
			updatedS = -1;
		}
		updatedS++;
		return setTime(state => ({h: updatedH, m: updatedM, s: updatedS, date: state.date}));
	};

	return (
		<Container maxWidth="md">

			{/*Panel Control*/}
			<Grid container spacing={2}
				  direction='column'
				  alignItems='center'
				  className={classes.panelControl}
			>
				<Grid item>
					<TextField
						id="task-input"
						label={false}
						color="primary"
						inputProps={{
							min: 0,
							maxLength: 55,
							style: {textAlign: 'center'}
						}}
						multiline
						maxRows={4}
						value={inputTask}
						onChange={handleChange}
						className={classes.input}
					/>
				</Grid>

				<Grid item>
					<Timer time={time} />
				</Grid>

				<Grid item>
					<Button
						variant={isRun ? 'contained' : 'outlined'}
						color={isRun ? 'secondary' : 'default'}
						onClick={handlerBtn}
					>
						{isRun ? 'STOP' : 'START'}
					</Button>
				</Grid>

			</Grid>


			{/*Panel Log*/}
			<Grid container spacing={2} justifyContent='center' className={classes.panelControl}>
				<Grid item>
					Panel log
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
