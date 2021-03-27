import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HelpIcon from '@material-ui/icons/Help';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		left: 10
	}
}));

const Explanation = () => {
	const classes = useStyles();
	const [ open, setOpen ] = useState(false);
	const handleClick = (event) => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Original demo constraints</DialogTitle>
				<DialogContent>
					<DialogContentText component="div">
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
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Explanation;
