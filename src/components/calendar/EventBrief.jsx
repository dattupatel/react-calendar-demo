import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	text: {
		lineHeight: 1,
		marginBottom: theme.spacing(0.5)
	}
}));

const EventBrief = (props) => {
	const classes = useStyles();
	return (
		<Fragment>
			<Typography variant="subtitle1" component="h2" className={classes.text}>
				{/* [{props.event.layout.sequence}] -{' '}
				<strong>{props.event.startFormatted}</strong> to
				<strong>{props.event.endFormatted}</strong> */}
				<strong>{props.event.startFormatted}</strong>
			</Typography>
			<Typography
				variant="subtitle1"
				component="h1"
				className={classes.text}
				gutterBottom
			>
				<strong>{props.event.name}</strong>
			</Typography>

			{props.event.location && (
				<Grid container direction="row" alignItems="center">
					<Grid item>
						<LocationOnOutlinedIcon fontSize="small" color="action" />
					</Grid>
					<Grid item>
						<Typography
							variant="body2"
							component="h2"
							className={classes.text}
						>
							{props.event.location}
						</Typography>
					</Grid>
				</Grid>
			)}

			<Typography variant="body1" component="p" className={classes.text}>
				{props.event.description}
			</Typography>
		</Fragment>
	);
};

export default EventBrief;
