import React, { useState, useMemo, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, darken } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { generateLightColorHex } from '../../helpers/utils';
import EventDetail from './EventDetail';
import EventBrief from './EventBrief';

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

const CalendarEvent = (props) => {
	const classes = useStyles({
		bgColor: useMemo(() => generateLightColorHex(), []),
		layout: props.event.layout
	});

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
				<EventBrief event={props.event} />
			</Box>
			<Popover
				{...popoverProps}
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={handleClose}
			>
				<EventDetail event={props.event} handleClose={handleClose} />
			</Popover>
		</Fragment>
	);
};

export default CalendarEvent;
