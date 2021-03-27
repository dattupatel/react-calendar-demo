import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	text: {
		lineHeight: 1,
		marginBottom: theme.spacing(0.5)
	}
}));

const EventBrief = (props) => {
	const classes = useStyles();
	return (
		<Fragment>
			<Typography variant="subtitle1" component="h2" className={classes.text}>
				<strong>{props.event.startFormatted}</strong>
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
