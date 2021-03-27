import React, { useState, useCallback, useEffect, useRef } from 'react';
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
		cursor: 'pointer',
		transition: theme.transitions.create([ 'top', 'background' ])
	},
	nowLineContainerShow: {
		visibility: 'visible'
	},
	nowLineContainerHide: {
		visibility: 'hidden'
	},
	nowLine: {
		marginLeft: theme.spacing(1),
		width: `calc(100% - ${theme.spacing(1)}px )`,
		background: `linear-gradient(to right top, ${fade(red[900], 0.6)}, ${fade(
			purple[700],
			0.6
		)})`,
		transition: theme.transitions.create([ 'top', 'background' ]),
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
	}
}));

//@todo Start when the page was loaded before START_HOUR
//@todo End when the page was loaded before END_HOUR
//@todo Start the timer with the second (or ms) precision and then set interval
const NowLine = ({ rowHeight, ...props }) => {
	const getNowInMs = useCallback(() => {
		// return (START_HOUR + 1) * 60 * 60 * 1000;
		return moment
			.duration(moment().seconds(0).milliseconds(0).format('HH:mm'))
			.asMilliseconds();
	}, []);

	const timer = useRef(null);
	const dayStartsAt = START_HOUR * 60 * 60 * 1000;
	const dayEndsAt = END_HOUR * 60 * 60 * 1000;
	const nowInMs = getNowInMs();

	const classes = useStyles();
	const [ timerHasStarted, setTimerHasStarted ] = useState(false);
	const [ startTimer, setStartTimer ] = useState(false);
	const [ top, setTop ] = useState(0);

	useEffect(
		() => {
			if (
				top === 0 &&
				nowInMs >= dayStartsAt &&
				nowInMs < dayEndsAt &&
				rowHeight > 0
			) {
				const now = nowInMs - dayStartsAt;
				const minute = (rowHeight + 1) / LEAST_MEETING_LENGTH_MINUTES;
				const top = minute * moment.duration(now).asMinutes();
				setTop(top);
			}
		},
		[ top, rowHeight, nowInMs, dayStartsAt, dayEndsAt ]
	);

	useEffect(
		() => {
			if (!timerHasStarted && nowInMs > dayStartsAt && nowInMs < dayEndsAt) {
				setStartTimer(true);
			} else if (timerHasStarted && nowInMs > dayEndsAt) {
				setTimerHasStarted(false);
			}

			if (startTimer && !timerHasStarted) {
				timer.current = setInterval(() => {
					setTop((prev) => prev + rowHeight / LEAST_MEETING_LENGTH_MINUTES);
				}, DELAY * 1000);
				setTimerHasStarted(true);
			}
		},
		[ startTimer, timerHasStarted, top, rowHeight, dayStartsAt, dayEndsAt, nowInMs ]
	);
	useEffect(() => {
		return () => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
		};
	}, []);

	const getToolTipTitle = () => {
		return `Now ${moment().format('HH:mm A')}`;
	};

	return (
		<Tooltip title={getToolTipTitle()} placement="left">
			<div
				className={[
					classes.nowLineContainer,
					timerHasStarted
						? classes.nowLineContainerShow
						: classes.nowLineContainerHide
				].join(' ')}
				style={{ top: top }}
			>
				<Divider className={classes.nowLine} />
			</div>
		</Tooltip>
	);
};

export default NowLine;
