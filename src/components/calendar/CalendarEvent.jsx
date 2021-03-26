import React, { useState, useMemo, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, darken } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { generateLightColorHex } from '../../helpers/utils';
import { LAYOUT_DIMENSION } from '../../constants/constants';
import EventDetail from './EventDetail';
import EventBrief from './EventBrief';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		left: (props) => props.left,
		marginLeft: LAYOUT_DIMENSION.left,
		width: (props) => props.width,
		height: (props) => props.height,
		overflow: 'hidden',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: (props) => darken(props.bgColor, 0.5),
		backgroundColor: (props) => props.bgColor,
		boxSizing: 'border-box',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: (props) => darken(props.bgColor, 0.2),
			borderColor: (props) => darken(props.bgColor, 0.8)
		}
	}
}));

const CalendarEvent = (props) => {
	const classes = useStyles({
		height: props.height * props.event.rowspan + props.event.rowspan,
		left: props.event.dimensions.left,
		width: props.event.dimensions.width,
		bgColor: useMemo(() => generateLightColorHex(), [])
	});
	const [ anchorEl, setAnchorEl ] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? `event-popover-${props.event.id}` : undefined;
	return (
		<Fragment>
			<Box
				p={0.5}
				className={classes.root}
				aria-describedby={id}
				onClick={handleClick}
			>
				<EventBrief event={props.event} />
			</Box>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'center',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<EventDetail event={props.event} handleClose={handleClose} />
			</Popover>
		</Fragment>
	);
};

export default CalendarEvent;
