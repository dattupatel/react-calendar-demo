import React, { useCallback, useState, useMemo, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, darken } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { generateLightColorHex } from '../../helpers/utils';
import Event from '../../models/Events';
import EventDetail from './EventDetail';
import EventBrief from './EventBrief';
import {
	LAYOUT_DIMENSION,
	START_HOUR,
	LEAST_MEETING_LENGTH_MINUTES
} from '../../constants/constants';

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: 'hidden',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: (props) => darken(props.bgColor, 0.2),
		backgroundColor: (props) => props.bgColor,
		boxSizing: 'border-box',
		transition: theme.transitions.create([ 'border', 'background' ]),
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: (props) => darken(props.bgColor, 0.2),
			borderColor: (props) => darken(props.bgColor, 0.4)
		}
	},
	layout: {
		position: 'absolute',
		left: (props) => props.layout.left,
		top: (props) => props.layout.top,
		height: (props) => props.layout.height,
		width: (props) => props.layout.width
	}
}));

const doSetupLayout = (event, rowHeight) => {
	const e = Event.cloneEvent(event);
	const startOfDay = START_HOUR * 60;
	const topSpan = (e.startInMinutes - startOfDay) / LEAST_MEETING_LENGTH_MINUTES;
	e.layout.top = rowHeight * topSpan + topSpan;

	const minutesSpan = e.lengthInMinutes / LEAST_MEETING_LENGTH_MINUTES;
	e.layout.height = rowHeight * minutesSpan + minutesSpan;

	const width = LAYOUT_DIMENSION.width - LAYOUT_DIMENSION.left;

	const colWidth = width / e.layout.totalColumns;

	e.layout.width = colWidth * e.layout.colspan;
	e.layout.left = colWidth * e.layout.column;
	return e;
};

const CalendarEvent = ({ rowHeight, ...props }) => {
	const setupLayout = useCallback(
		(event) => {
			return doSetupLayout(event, rowHeight);
		},
		[ rowHeight ]
	);

	const [ event, setEvent ] = useState(setupLayout(props.event));

	const classes = useStyles({
		bgColor: useMemo(() => generateLightColorHex(), []),
		layout: event.layout
	});

	const onChangeHandler = (key, e) => {
		setEvent((prev) => {
			const newE = Event.cloneEvent(prev);
			newE.layout[key] = parseInt(e.target.value);
			return setupLayout(newE);
		});
	};

	//#region Popover
	const [ anchorEl, setAnchorEl ] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const popoverProps = {
		anchorOrigin: {
			vertical: 'center',
			horizontal: 'center'
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'center'
		}
	};
	//#endregion

	return (
		<Fragment>
			<Box
				p={0.5}
				className={[ classes.root, classes.layout ].join(' ')}
				onClick={handleClick}
			>
				<EventBrief event={event} />
			</Box>
			<Popover
				{...popoverProps}
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={handleClose}
			>
				<EventDetail
					event={event}
					handleClose={handleClose}
					onChange={onChangeHandler}
				/>
			</Popover>
		</Fragment>
	);
};

export default CalendarEvent;
