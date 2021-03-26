import React, { useEffect } from 'react';
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
			<Typography variant="h5" component="h1" gutterBottom>
				Today's Calendar
			</Typography>
			<CalendarOutline />
		</CalendarLayout>
	);
};

export default Calendar;
