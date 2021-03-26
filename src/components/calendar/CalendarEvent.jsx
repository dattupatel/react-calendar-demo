import React, { useState, useMemo, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, darken } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import { generateLightColorHex } from '../../helpers/utils';
import { LAYOUT_DIMENSION } from '../../constants/constants';

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
		borderColor: theme.palette.grey[500],
		backgroundColor: (props) => props.bgColor,
		boxSizing: 'border-box',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: (props) => darken(props.bgColor, 0.1)
		}
	},
	text: {
		lineHeight: 1,
		marginBottom: theme.spacing(0.5)
	},
	popoverPaper: {
		maxWidth: 400
	},
	popoverTime: {
		backgroundColor: theme.palette.grey[800],
		color: 'white'
	},
	cardActions: {
		justifyContent: 'flex-end'
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

	const start = moment.utc(props.event.start).format('h:mm a');
	const end = moment.utc(props.event.end).format('h:mm a');

	return (
		<Fragment>
			<Box
				p={0.5}
				className={classes.root}
				aria-describedby={id}
				onClick={handleClick}
			>
				<Typography variant="subtitle1" component="h2" className={classes.text}>
					<strong>{start}</strong>
				</Typography>
				<Typography variant="subtitle1" component="h1" className={classes.text}>
					<strong>{props.event.name}</strong>
				</Typography>
				<Typography variant="body1" component="p" className={classes.text}>
					{props.event.description}
				</Typography>
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
				<Card className={classes.popoverPaper}>
					<CardContent className={classes.popoverTime}>
						<Typography>
							<strong>
								{start} &mdash; {end}
							</strong>
						</Typography>
					</CardContent>
					<CardContent>
						<Typography variant="h5" component="h1">
							<strong>{props.event.name}</strong>
						</Typography>
						<Typography variant="body1" component="p">
							{props.event.description}
						</Typography>
					</CardContent>

					{props.event.attendees.length > 0 && (
						<Fragment>
							<Divider />
							<CardContent mt={2}>
								<Typography variant="h6" component="p">
									Attendees
								</Typography>
								<ul>
									{props.event.attendees.map((a) => (
										<li key={a}>{a}</li>
									))}
								</ul>
							</CardContent>
						</Fragment>
					)}
					<CardContent>
						<pre>{JSON.stringify(props.event.overlaps, null, 2)}</pre>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button size="small" color="primary" onClick={handleClose}>
							Dismiss
						</Button>
					</CardActions>
				</Card>
			</Popover>
		</Fragment>
	);
};

export default CalendarEvent;
