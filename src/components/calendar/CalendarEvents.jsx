import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CalendarEvent from './CalendarEvent';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%'
	}
}));

const CalendarEvents = (props) => {
	const [ height, setHeight ] = useState(0);
	const ref = useRef(null);

	useEffect(
		() => {
			setHeight(ref.current.clientHeight);
		},
		[ ref ]
	);

	const classes = useStyles();
	return (
		<div ref={ref} className={classes.root}>
			{props.events.map((event, index) => (
				<CalendarEvent
					index={index}
					key={event.id}
					event={event}
					height={height}
				/>
			))}
		</div>
	);
};

export default CalendarEvents;
