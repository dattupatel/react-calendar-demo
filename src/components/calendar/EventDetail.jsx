import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Attendees from './Attendees';
import Location from './Location';

const useStyles = makeStyles((theme) => ({
	text: {
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
	const mode = useSelector((state) => state.events.debugMode);

	return (
		<Card className={classes.popoverPaper}>
			<CardContent className={classes.popoverTime}>
				<Typography>
					<strong>
						{props.event.startFormatted} &mdash; {props.event.endFormatted}
					</strong>
				</Typography>
			</CardContent>
			{mode && (
				<CardContent>
					<pre>{JSON.stringify(props.event.layout, null, 2)}</pre>
					<Grid container>
						{['totalColumns', 'column', 'colspan'].map((c) => {
							return (
								<Fragment key={c}>
									<Grid item xs={6}>
										{c}
									</Grid>
									<Grid item xs={6}>
										<input
											type='number'
											value={props.event.layout[c]}
											onChange={props.onChange.bind(this, c)}
										/>
									</Grid>
								</Fragment>
							);
						})}
					</Grid>
				</CardContent>
			)}
			<CardContent>
				<Typography variant='h5' component='h1'>
					<strong>{props.event.name}</strong>
				</Typography>
				<Location location={props.event.location} fontSize='large' iconColor='primary' fontColor='primary' />

				<Typography variant='body1' component='p' dangerouslySetInnerHTML={{__html: props.event.description}} />
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
				<Grid container direction='row' justify='flex-end' alignItems='center'>
					<Grid item>
						<Button size='small' color='primary' onClick={props.handleClose}>
							Close
						</Button>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	);
};

export default EventDetail;
