import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { loadEvents } from '../../store/actions';
import CalendarLayout from './CalendarLayout';
import CalendarOutline from './CalendarOutline';

const Calendar = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(loadEvents());
		},
		[ dispatch ]
	);

	return (
		<CalendarLayout>
			<Typography variant="h5" component="h1">
				Today's Calendar
			</Typography>
			<Typography color="textSecondary" gutterBottom>
				{moment().format('dddd, MMMM DD, YYYY')}
			</Typography>
			<CalendarOutline />
		</CalendarLayout>
	);
};

export default Calendar;
