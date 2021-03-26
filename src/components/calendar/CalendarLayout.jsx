import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { LAYOUT_DIMENSION } from '../../constants/constants';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(5),
		width: LAYOUT_DIMENSION.width,
		padding: 0
	}
}));

const CalendarLayout = (props) => {
	const classes = useStyles();
	return <Container className={classes.root}>{props.children}</Container>;
};

export default CalendarLayout;
