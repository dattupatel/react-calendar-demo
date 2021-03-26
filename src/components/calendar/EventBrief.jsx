import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
	text: {
		lineHeight: 1,
		marginBottom: theme.spacing(0.5)
	}
}));

const EventBrief = (props) => {
	const classes = useStyles();
	const start = moment.utc(props.event.start).format('h:mm A');
	return (
		<Fragment>
			<Typography variant="subtitle1" component="h2" className={classes.text}>
				<strong>{start}</strong>
			</Typography>
			<Typography variant="subtitle1" component="h1" className={classes.text}>
				<strong>{props.event.name}</strong>
			</Typography>
			<Typography variant="body1" component="p" className={classes.text}>
				{props.event.description}
			</Typography>
		</Fragment>
	);
};

export default EventBrief;
