import React from 'react';

//react-router-dom
import { useHistory } from "react-router-dom";

//components:
import TimeDisplay from '../../components/timeDisplay';

//material-ui:
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Timer from '../../components/timer/timer';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

//variables:
import { COLOR_1, COLOR_2, BORDER_STYLE } from '../../utils/consts';

//styles:
const useStyles = makeStyles({
	panelControl: {
		marginTop: 20,
	},
	input: {
		'& > div': {
			color: COLOR_1,
		},
	},
	tasksLog: {
		background: '#1fbcd3',
		color: 'white',
		textTransform: 'capitalize',
		height: 50,
	},
	panelControlItem: {
		color: 'gray',
		padding: '20px 0'
	},
	taskBlock: {
		color: COLOR_1,
		padding: '20px 0',
		background: COLOR_2,
		borderBottom: BORDER_STYLE
	},
	panelLog: {
		borderBottom: BORDER_STYLE
	},
	btn: {
		color: COLOR_1,
		background: 'white'
	}
});

const Home = ({inputTask, handleChange, time, isRun, startTimer, stopTimer, taskList, deleteTask}) => {
	//styles
	const classes = useStyles();

	//history
	const history = useHistory();

	return (
		<>
			{/*Panel Control*/}
			<Grid container spacing={2}
				  direction='column'
				  alignItems='center'
				  className={classes.panelControl}
			>
				{/*Task name*/}
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
						onChange={e => handleChange(e)}
						className={classes.input}
					/>
				</Grid>

				{/*Timer*/}
				<Grid item>
					<Timer
						time={time}
					/>
				</Grid>

				{/*Button*/}
				<Grid item>
					{isRun ?
						<Button
							variant='contained'
							color='secondary'
							onClick={stopTimer}
						>
							STOP
						</Button>
						:
						<Button
							variant='outlined'
							onClick={startTimer}
							color='primary'
						>
							START
						</Button>
					}
				</Grid>

			</Grid>


			{/* Panel Header */}
			<Grid container justifyContent='center' className={classes.panelControl}>
				<Grid item className={classes.tasksLog} xs={12} container justifyContent='center' alignItems='center'>
					TASKS LOG
				</Grid>
			</Grid>

			{/*	Panel Log */}
			<Grid container justifyContent='space-around' alignItems='center' className={classes.panelLog}>
				<Grid item xs={1}>
					<Box className={classes.panelControlItem}>
						№
					</Box>
				</Grid>
				<Grid item xs={1}>
					<Box className={classes.panelControlItem}>
						Task
					</Box>
				</Grid>
				<Grid item xs={1}>
					<Box className={classes.panelControlItem}>
						Time start
					</Box>
				</Grid>
				<Grid item xs={1}>
					<Box className={classes.panelControlItem}>
						Time end
					</Box>
				</Grid>
				<Grid  item xs={1}>
					<Box className={classes.panelControlItem}>
						Time spend
					</Box>
				</Grid>
				<Grid  item xs={1}>
					<Box className={classes.panelControlItem}>
						Info
					</Box>
				</Grid>
				<Grid item xs={1}>
					<Box className={classes.panelControlItem}>
						Delete
					</Box>
				</Grid>
			</Grid>

			{/*history log*/}
			{taskList.map( ({id, descTask, startTime, endTime, spendTime}, i) =>{
				return (
					<Grid key={id} container justifyContent='space-around' alignItems='center' className={classes.taskBlock}>
						<Grid item xs={1}>
							<Box>
								{i + 1}
							</Box>
						</Grid>
						<Grid item xs={1}>
							<Box>
								{descTask.length >=13 ? descTask.slice(0, 12) + '...' :  descTask}
							</Box>
						</Grid>
						<TimeDisplayWithDate item xs={1} time={startTime} />
						<TimeDisplayWithDate item xs={1} time={endTime} />
						<TimeDisplay time={spendTime} item xs={1}/>
						<Grid item xs={1}>
							<Button variant='outlined' className={classes.btn} onClick={() => history.push('/task/' + id)}>
								Info
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button variant='outlined' className={classes.btn} onClick={() => deleteTask(id)}>
								Delete
							</Button>
						</Grid>
					</Grid>
				)
			})}
		</>
	);
};

const TimeDisplayWithDate = ({time, ...props}) => {
	return (
		<Grid {...props}>
			<Box>
				{time.h >= 10 ? time.h : '0'+time.h}
				:{time.m >= 10 ? time.m : '0'+time.m}
				:{time.s >= 10 ? time.s : '0'+time.s}
				<br />

				({time.day < 10 ? '0'+time.day : time.day}
				.{time.month < 10 ? '0'+time.month : time.month}
				.{time.year})
			</Box>
		</Grid>
	);
};


export default Home;
