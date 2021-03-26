import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HelpIcon from '@material-ui/icons/Help';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreIcon from '@material-ui/icons/More';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'right',
		marginRight: theme.spacing(5),
		marginBottom: theme.spacing(5)
	},
	card: {
		backgroundColor: theme.palette.grey[300]
	},
	title: {
		backgroundColor: theme.palette.grey[800],
		color: 'white',
		position: 'relative'
	},
	titleIcon: {
		position: 'absolute',
		right: 10,
		top: 'calc(50% - 10px)'
	}
}));

const Explanation = () => {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);

	const notes = [
		'Use React and some other packages, <strong><em>except a package that generates a calendar layout</em></strong>.',
		'Randomely generate 10 calendar events.',
		'9 AM to 9 PM.',
		'Meeting is at least 15 minutes long, with step of 1 minutes.',
		'Fixed width of 700px.',
		'Various edge cases of overlapping events.'
	];

	return (
		<div className={classes.root}>
			<IconButton onClick={handleClick}>
				{open ? (
					<HelpOutlineIcon fontSize="small" />
				) : (
					<HelpIcon fontSize="small" />
				)}
			</IconButton>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
			>
				<Card className={classes.card}>
					<CardContent className={classes.title}>
						<Typography>Original demo constraints</Typography>
						<MoreIcon fontSize="small" className={classes.titleIcon} />
					</CardContent>
					<CardContent>
						<List dense={true}>
							{notes.map((note, i) => (
								<ListItem key={i}>
									<ListItemIcon style={{ minWidth: 0 }}>
										<ArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<span
												dangerouslySetInnerHTML={{ __html: note }}
											/>
										}
									/>
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
			</Popover>
		</div>
	);
};

export default Explanation;
