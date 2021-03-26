import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, fade } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

import {
	LEAST_MEETING_LENGTH_MINUTES,
	START_HOUR,
	END_HOUR
} from '../../constants/constants';

const DELAY = 60;

const useStyles = makeStyles((theme) => ({
	nowLineContainer: {
		position: 'absolute',
		zIndex: 10,
		width: '100%',
		cursor: 'pointer'
	},
	nowLine: {
		marginLeft: theme.spacing(1),
		width: `calc(100% - ${theme.spacing(1)}px )`,
		background: `linear-gradient(to right top, ${fade(red[900], 0.6)}, ${fade(
			purple[700],
			0.6
		)})`,
		transition: theme.transitions.create([ 'top', 'visibility', 'background' ]),
		'&:hover': {
			background: `linear-gradient(to right top, ${purple[700]}, ${red[900]})`,
			'&:after': {
				background: fade(red[900], 1)
			}
		},
		'&:after': {
			content: "' '",
			display: 'block',
			height: 0,
			width: 0,
			padding: theme.spacing(1),
			borderRadius: '50%',
			background: fade(red[900], 0.6),
			position: 'absolute',
			left: -theme.spacing(1),
			top: -theme.spacing(1)
		}
	},
	nowLineShow: {
		visibility: 'visible'
	},
	nowLineHide: {
		visibility: 'hidden'
	}
}));

//@todo The now line doesn't start at the accurate seconds interval
const NowLine = ({ height, ...props }) => {
	const timer = useRef(null);
	const dayStartsAt = START_HOUR * 60 * 60 * 1000;
	const dayEndsAt = END_HOUR * 60 * 60 * 1000;
	// const nowInHM = (START_HOUR + 0.5) * 60 * 60 * 1000;
	const nowInHM = moment
		.duration(moment().seconds(0).milliseconds(0).format('HH:mm'))
		.asMilliseconds();

	const classes = useStyles();
	const [ timerHasStarted, setTimerHasStarted ] = useState(false);
	const [ startTimer, setStartTimer ] = useState(false);
	const [ top, setTop ] = useState(0);

	useEffect(
		() => {
			if (
				top === 0 &&
				nowInHM >= dayStartsAt &&
				nowInHM < dayEndsAt &&
				height > 0
			) {
				const now = nowInHM - dayStartsAt;
				const minute = (height + 1) / LEAST_MEETING_LENGTH_MINUTES;
				const top = minute * moment.duration(now).asMinutes();
				setTop(top);
			}
		},
		[ top, height, nowInHM, dayStartsAt, dayEndsAt ]
	);

	useEffect(
		() => {
			if (!timerHasStarted && nowInHM > dayStartsAt && nowInHM < dayEndsAt) {
				setStartTimer(true);
			} else if (timerHasStarted && nowInHM > dayEndsAt) {
				setTimerHasStarted(false);
			}

			if (startTimer && !timerHasStarted) {
				timer.current = setInterval(() => {
					setTop((prev) => prev + height / LEAST_MEETING_LENGTH_MINUTES);
				}, DELAY * 1000);
				setTimerHasStarted(true);
			}
		},
		[ startTimer, timerHasStarted, top, height, dayStartsAt, dayEndsAt, nowInHM ]
	);
	useEffect(() => {
		return () => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
		};
	}, []);

	return (
		<Tooltip title="Now" placement="left">
			<div
				className={[
					classes.nowLineContainer,
					timerHasStarted ? classes.nowLineShow : classes.nowLineHide
				].join(' ')}
				style={{ top: top }}
			>
				<Divider className={classes.nowLine} />
			</div>
		</Tooltip>
	);
};

export default NowLine;
