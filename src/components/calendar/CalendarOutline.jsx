import React, {useState, useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {START_HOUR, END_HOUR, LEAST_MEETING_LENGTH_MINUTES, LAYOUT_DIMENSION} from '../../constants/constants';
import CalendarEvents from './CalendarEvents';
import Times from '../../models/Times';
import NowLine from './NowLine';
import Outline from './Outline';

const generateLayoutArray = () => {
	const hours = END_HOUR - START_HOUR;
	const length = hours * (60 / LEAST_MEETING_LENGTH_MINUTES);
	return new Array(length).fill({}).map((val, i) => {
		const h = Math.floor(i / (60 / LEAST_MEETING_LENGTH_MINUTES)) + START_HOUR;
		const m = (i % (60 / LEAST_MEETING_LENGTH_MINUTES)) * LEAST_MEETING_LENGTH_MINUTES;
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
		width: LAYOUT_DIMENSION.width - LAYOUT_DIMENSION.left,
		height: (props) => `calc(100% - ${props.rowHeight}px)`
	}
}));

const CalendarOutline = () => {
	const [rowHeight, setRowHeight] = useState(0);
	const ref = useRef(null);

	useEffect(
		() => {
			if (ref.current) {
				setRowHeight(ref.current.clientHeight);
			}
		},
		[ref]
	);

	const classes = useStyles({
		rowHeight: rowHeight
	});
	const layoutArray = generateLayoutArray();
	return (
		<section className={classes.root}>
			<NowLine rowHeight={rowHeight} />
			<Box>
				{layoutArray.map((timeData, i) => <Outline key={i} timeData={timeData} />)}
				<Outline ref={ref} isEnd={true} timeData={new Times(END_HOUR, 0, 0)} />
			</Box>
			<div className={classes.eventsContainer}>
				<CalendarEvents rowHeight={rowHeight} />
			</div>
		</section>
	);
};

export default CalendarOutline;
