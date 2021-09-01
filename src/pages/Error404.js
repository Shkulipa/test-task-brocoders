import React from 'react';

//images:
import img404 from './../assets/images/error-404-design.png';

//material-ui:
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import makeStyles from '@material-ui/core/styles/makeStyles';

//styles:
const useStyles = makeStyles({
	errorBlock: {
		height: '100vh',
	},
});

const Error404 = () => {
	const classes = useStyles();

	return (
		<Grid container justifyContent='center' alignItems='center' direction='column' className={classes.errorBlock}>
			<Grid item>
				<img src={img404} alt='404' />
			</Grid>
			<Grid item>
				<Alert severity="error">Sorry, this page not found :(</Alert>
			</Grid>

		</Grid>
	);
};

export default Error404;
