import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
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
		<Box className={classes.root}>
			{events.map((event, index) => (
				<CalendarEvent
					index={index}
					key={event.id}
					event={event}
					rowHeight={props.rowHeight}
				/>
			))}
		</Box>
	);
};

export default CalendarEvents;
