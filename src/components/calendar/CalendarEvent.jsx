import React, { useState, useMemo, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, darken } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { generateLightColorHex } from '../../helpers/utils';
import EventDetail from './EventDetail';
import EventBrief from './EventBrief';
import { LAYOUT_DIMENSION } from '../../constants/constants';

const useStyles = makeStyles((theme) => ({
	root: {
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
	},
	layout: {
		position: 'absolute',
		width: `${100 / 4}%`,
		height: 500,
		overflow: 'hidden'
	}
}));

const CalendarEvent = (props) => {
	const classes = useStyles({
		bgColor: useMemo(() => generateLightColorHex(), [])
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
			<Grid
				item
				component={Box}
				p={0.5}
				className={[ classes.root, classes.layout ].join(' ')}
				onClick={handleClick}
			>
				<EventBrief event={props.event} />
			</Grid>
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
