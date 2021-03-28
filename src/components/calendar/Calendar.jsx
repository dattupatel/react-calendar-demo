import React, {useCallback, useEffect, Fragment} from 'react';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import {loadEvents} from '../../store/actions';
import CalendarOutline from './CalendarOutline';
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';

//@todo Auto refresh the Date and Events on date change.
const Calendar = () => {
	const dispatch = useDispatch();
	const onLoad = useCallback(
		() => {
			dispatch(loadEvents());
		},
		[dispatch]
	);

	useEffect(
		() => {
			onLoad();
		},
		[onLoad]
	);

	return (
		<Fragment>
			<div style={{position: 'fixed', left: 10, top: 70}}>
				<Tooltip title='Refresh Events' placement='right'>
					<IconButton onClick={onLoad} size='small'>
						<AutorenewIcon fontSize='small' />
					</IconButton>
				</Tooltip>
			</div>
			<Typography variant='h5' component='h1'>
				Today's Calendar
			</Typography>
			<Typography color='textSecondary' gutterBottom>
				{moment().format('dddd, MMMM DD, YYYY')}
			</Typography>

			<CalendarOutline />
		</Fragment>
	);
};

export default Calendar;
