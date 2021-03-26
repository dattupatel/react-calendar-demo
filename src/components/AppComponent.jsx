import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { LAYOUT_DIMENSION } from '../constants/constants';
import Calendar from './calendar/Calendar';
import Explanation from './Explanation';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(10),
		width: LAYOUT_DIMENSION.width,
		padding: 0
	}
}));

const AppComponent = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Container className={classes.root}>
				<Calendar />
			</Container>
			<Explanation />
		</Fragment>
	);
};

export default AppComponent;
