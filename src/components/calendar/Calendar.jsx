import React, { useEffect, Fragment } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { loadEvents } from '../../store/actions';
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
		<Fragment>
			<Typography variant="h5" component="h1">
				Today's Calendar
			</Typography>
			<Typography color="textSecondary" gutterBottom>
				{moment().format('dddd, MMMM DD, YYYY')}
			</Typography>
			<CalendarOutline />
		</Fragment>
	);
};

export default Calendar;
