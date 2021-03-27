import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import Attendees from './Attendees';

const useStyles = makeStyles((theme) => ({
	text: {
		lineHeight: 1,
		marginBottom: theme.spacing(0.5)
	},
	popoverPaper: {
		width: 400
	},
	popoverTime: {
		backgroundColor: theme.palette.grey[800],
		color: 'white'
	},
	cardActions: {
		justifyContent: 'flex-end'
	}
}));

const EventDetail = (props) => {
	const classes = useStyles();
	const start = moment.utc(props.event.start).format('h:mm A');
	const end = moment.utc(props.event.end).format('h:mm A');
	return (
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
				<Typography
					variant="body1"
					component="p"
					dangerouslySetInnerHTML={{ __html: props.event.description }}
				/>
			</CardContent>
			{props.event.attendees.length > 0 && (
				<Fragment>
					<Divider />
					<CardContent mt={2}>
						<Attendees attendees={props.event.attendees} />
					</CardContent>
				</Fragment>
			)}
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary" onClick={props.handleClose}>
					Close
				</Button>
			</CardActions>
		</Card>
	);
};

export default EventDetail;
