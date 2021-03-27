import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {
	START_HOUR,
	END_HOUR,
	LEAST_MEETING_LENGTH_MINUTES,
	LAYOUT_DIMENSION
} from '../../constants/constants';
import CalendarEvents from './CalendarEvents';
import Times from '../../models/Times';
import NowLine from './NowLine';
import Outline from './Outline';

const generateLayoutArray = () => {
	const hours = END_HOUR - START_HOUR;
	const length = hours * (60 / LEAST_MEETING_LENGTH_MINUTES);
	return new Array(length).fill({}).map((val, i) => {
		const h = Math.floor(i / (60 / LEAST_MEETING_LENGTH_MINUTES)) + START_HOUR;
		const m =
			(i % (60 / LEAST_MEETING_LENGTH_MINUTES)) * LEAST_MEETING_LENGTH_MINUTES;
		return new Times(h, m, i);
	});
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		width: '100%'
	},
	eventsContainer: {
		position: 'absolute',
		top: 0,
		left: LAYOUT_DIMENSION.left,
		width: LAYOUT_DIMENSION.width - LAYOUT_DIMENSION.left
	}
}));

const CalendarOutline = () => {
	const [ height, setHeight ] = useState(0);
	const ref = useRef(null);

	useEffect(
		() => {
			if (ref.current) {
				setHeight(ref.current.clientHeight + 1);
			}
		},
		[ ref ]
	);

	const classes = useStyles();
	const layoutArray = generateLayoutArray();
	return (
		<div className={classes.root}>
			<NowLine height={height} />
			<Box>
				{layoutArray.map((timeData, i) => (
					<Outline key={i} timeData={timeData} />
				))}
				<Outline
					ref={ref}
					isEnd={true}
					timeData={{
						isStartOfHour: true,
						label: (
							<span>
								{END_HOUR > 12 ? END_HOUR - 12 : END_HOUR}:00{' '}
								{END_HOUR > 12 && END_HOUR !== 24 ? 'PM' : 'AM'}
							</span>
						)
					}}
				/>
			</Box>
			<div className={classes.eventsContainer}>
				<CalendarEvents height={height} />
			</div>
		</div>
	);
};

export default CalendarOutline;
