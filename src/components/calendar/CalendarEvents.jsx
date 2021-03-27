import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CalendarEvent from './CalendarEvent';
import {
	LAYOUT_DIMENSION,
	START_HOUR,
	LEAST_MEETING_LENGTH_MINUTES
} from '../../constants/constants';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%'
	}
}));

const doSomething = (events, rowHeight) => {
	const startOfDay = START_HOUR * 60;
	const newEvents = [ ...events ];
	newEvents.forEach((e) => {
		const topSpan = (e.startInMinutes - startOfDay) / LEAST_MEETING_LENGTH_MINUTES;
		e.layout.top = rowHeight * topSpan + topSpan;

		const minutesSpan = e.lengthInMinutes / LEAST_MEETING_LENGTH_MINUTES;
		e.layout.height = rowHeight * minutesSpan + minutesSpan;

		const width = LAYOUT_DIMENSION.width - LAYOUT_DIMENSION.left;
		e.layout.width = width / (e.layout.totalColumns + 1);
		e.layout.left = width / (e.layout.totalColumns + 1) * e.layout.column;
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
