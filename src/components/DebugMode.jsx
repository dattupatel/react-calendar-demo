import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import {makeStyles} from '@material-ui/core/styles';
import {toggleDebugMode} from '../store/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		left: 0,
		top: 110
	}
}));

const DebugMode = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const mode = useSelector((state) => state.events.debugMode);

	const handleChange = (event) => {
		dispatch(toggleDebugMode());
	};
	return (
		<Tooltip title='Debug?' placement='right'>
			<Switch checked={mode} onChange={handleChange} className={classes.root} color='primary' />
		</Tooltip>
	);
};

export default DebugMode;
