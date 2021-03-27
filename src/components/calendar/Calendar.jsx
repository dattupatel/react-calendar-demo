import React, { useCallback, useEffect, Fragment } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { loadEvents } from '../../store/actions';
import CalendarOutline from './CalendarOutline';
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';

//@todo Auto refresh to next day when day changes
const Calendar = () => {
	const dispatch = useDispatch();
	const onLoad = useCallback(
		() => {
			dispatch(loadEvents());
		},
		[ dispatch ]
	);

	useEffect(
		() => {
			onLoad();
		},
		[ onLoad ]
	);

	return (
		<Fragment>
			<Grid container direction="row" justify="space-between" alignItems="center">
				<Grid item>
					<Typography variant="h5" component="h1">
						Today's Calendar
					</Typography>
					<Typography color="textSecondary" gutterBottom>
						{moment().format('dddd, MMMM DD, YYYY')}
					</Typography>
				</Grid>
				<Grid item>
					<IconButton onClick={onLoad} size="small">
						<AutorenewIcon fontSize="small" />
					</IconButton>
				</Grid>
			</Grid>
			<CalendarOutline />
		</Fragment>
	);
};

export default Calendar;
