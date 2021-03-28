import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	avatar: {
		minWidth: 'auto',
		marginRight: theme.spacing(1)
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	}
}));

const Attendees = (props) => {
	const classes = useStyles();
	return (
		<Fragment>
			<Typography variant='h6' component='p'>
				Attendees
			</Typography>
			<List className={classes.root} dense={true}>
				{props.attendees.map((a) => (
					<ListItem key={a} button>
						<ListItemAvatar className={classes.avatar}>
							<Avatar className={classes.small}>
								<FaceIcon />
							</Avatar>
						</ListItemAvatar>{' '}
						<ListItemText primary={a} />
					</ListItem>
				))}
			</List>
		</Fragment>
	);
};

export default Attendees;
