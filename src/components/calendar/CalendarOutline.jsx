import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
	START_HOUR,
	END_HOUR,
	LEAST_MEETING_LENGTH_MINUTES,
	LAYOUT_DIMENSION
} from '../../constants/constants';
import CalendarEvents from './CalendarEvents';
import Times from '../../models/Times';

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
		position: 'relative'
	},
	calendarContainer: {
		flexWrap: 'wrap'
	},
	timeContainer: {
		borderTopWidth: 1,
		borderTopStyle: 'solid'
	},
	timeContainerBold: {
		borderTopColor: theme.palette.grey[500]
	},
	timeContainerNormal: {
		borderTopColor: theme.palette.grey[100]
	},
	timeLabel: {
		width: LAYOUT_DIMENSION.left,
		padding: theme.spacing(1),
		textAlign: 'right',
		borderRightWidth: 1,
		borderRightStyle: 'solid',
		borderRightColor: theme.palette.grey[500]
	},
	timeLabelBold: {
		fontWeight: 'bold'
	},
	timeLabelNormal: {
		color: theme.palette.grey[500]
	},
	eventContainer: {
		flexGrow: 1
	}
}));

const CalendarOutline = () => {
	const events = useSelector((state) => state.events.events);
	const classes = useStyles();
	const layoutArray = generateLayoutArray();
	return (
		<div className={classes.root}>
			{layoutArray.map((timeData, i) => (
				<Card
					elevation={0}
					key={i}
					className={[
						classes.timeContainer,
						timeData.isStartOfHour
							? classes.timeContainerBold
							: classes.timeContainerNormal
					].join(' ')}
				>
					<Grid container className={classes.calendarContainer}>
						<Grid item className={classes.timeLabel}>
							<Typography
								variant="body2"
								className={[
									timeData.isStartOfHour
										? classes.timeLabelBold
										: classes.timeLabelNormal
								].join(' ')}
							>
								{timeData.label}
							</Typography>
						</Grid>
						<Grid item className={classes.eventContainer}>
							<CalendarEvents
								events={events.filter((e) => e.start === timeData.ms)}
							/>
						</Grid>
					</Grid>
				</Card>
			))}
		</div>
	);
};

export default CalendarOutline;
