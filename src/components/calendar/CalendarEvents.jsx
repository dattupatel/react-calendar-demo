import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CalendarEvent from './CalendarEvent';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%'
	}
}));

const CalendarEvents = (props) => {
	const events = useSelector((state) => state.events.events);

	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			{events.map((event, index) => (
				<CalendarEvent
					index={index}
					key={event.id}
					event={event}
					height={props.height}
				/>
			))}
		</Grid>
	);
};

export default CalendarEvents;
