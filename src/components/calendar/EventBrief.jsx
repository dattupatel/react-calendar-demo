import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Location from './Location';

const useStyles = makeStyles((theme) => ({
	text: {
		lineHeight: 1.5,
		marginBottom: theme.spacing(0.5)
	}
}));

const EventBrief = (props) => {
	const classes = useStyles();
	const mode = useSelector((state) => state.events.debugMode);
	return (
		<Fragment>
			<Typography variant='subtitle2' component='h2' className={classes.text}>
				{mode ? (
					<Fragment>
						[{props.event.layout.sequence}] - <strong>{props.event.startFormatted}</strong> to
						<strong>{props.event.endFormatted}</strong>
					</Fragment>
				) : (
					<strong>{props.event.startFormatted}</strong>
				)}
			</Typography>
			<Typography variant='subtitle1' component='h1' className={classes.text} gutterBottom>
				<strong>{props.event.name}</strong>
			</Typography>
			{mode && <pre>{JSON.stringify(props.event.layout, null, 2)}</pre>}
			<Location location={props.event.location} />
			<Typography variant='body1' component='p' className={classes.text}>
				{props.event.description}
			</Typography>
		</Fragment>
	);
};

export default EventBrief;
