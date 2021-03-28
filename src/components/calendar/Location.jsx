import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		flexWrap: 'nowrap'
	},
	location: {
		overflow: 'hidden'
	},
	text: {
		marginBottom: theme.spacing(0.5)
	},
	textSmall: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	}
}));

const Location = ({fontSize = 'small', iconColor = 'action', fontColor = 'initial', ...props}) => {
	const classes = useStyles();
	return (
		<Fragment>
			{props.location && (
				<Grid container direction='row' alignItems='center' component={Box} mb={2} className={classes.root}>
					<Grid item>
						<LocationOnOutlinedIcon fontSize={fontSize} color={iconColor} />
					</Grid>
					<Grid item className={classes.location}>
						<Typography
							variant={fontSize === 'small' ? 'subtitle2' : 'body1'}
							color={fontColor}
							component='h2'
							className={[classes.text, fontSize === 'small' ? classes.textSmall : ''].join(' ')}>
							{props.location}
						</Typography>
					</Grid>
				</Grid>
			)}
		</Fragment>
	);
};

export default Location;
