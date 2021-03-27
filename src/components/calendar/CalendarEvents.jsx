import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CalendarEvent from './CalendarEvent';
import { LEAST_MEETING_LENGTH_MINUTES } from '../../constants/constants';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%'
	}
}));

const doSomething = (events, rowHeight) => {
	const newEvents = [ ...events ];
	newEvents.forEach((e) => {
		const rowspan = e.lengthInMinutes / LEAST_MEETING_LENGTH_MINUTES;
		e.layout.height = rowHeight * rowspan + rowspan;
	});
	return newEvents;
};

const CalendarEvents = (props) => {
	const events = useSelector((state) =>
		doSomething(state.events.events, props.rowHeight)
	);

	const classes = useStyles();
	return (
		<Box className={classes.root}>
			{events.map((event) => (
				<CalendarEvent key={event.id} event={event} rowHeight={props.rowHeight} />
			))}
		</Box>
	);
};

export default CalendarEvents;
