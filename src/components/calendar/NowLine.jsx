// import React, { useState, useEffect } from 'react';
// import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

// import { LEAST_MEETING_LENGTH_MINUTES, START_HOUR } from '../../constants/constants';

// const useStyles = makeStyles((theme) => ({
// 	nowLine: {
// 		position: 'absolute',
// 		height: 1,
// 		left: 0,
// 		top: 0,
// 		width: '100%',
// 		backgroundColor: purple[500],
// 		transition: theme.transitions.create([ 'top' ])
// 	}
// }));

// const NowLine = ({ height, ...props }) => {
// 	const now = new Date().getTime();
// 	const dayStartAt = START_HOUR * 60 * 60 * 1000;
// 	const classes = useStyles();
// 	const [ timerStarted, setTimerStarted ] = useState();
// 	const [ top, setTop ] = useState(0);

// 	useEffect(
// 		() => {
// 			const timeout = setTimeout(() => {
// 				setTop((prev) => prev + height / LEAST_MEETING_LENGTH_MINUTES);
// 			}, 60 * 1000);

// 			return () => {
// 				if (timeout) {
// 					clearTimeout(timeout);
// 				}
// 			};
// 		},
// 		[ top, height ]
// 	);

// 	return <Divider className={classes.nowLine} style={{ top: top }} />;
// };

// export default NowLine;
