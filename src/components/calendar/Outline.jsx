import React, { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { LAYOUT_DIMENSION } from '../../constants/constants';

const useStyles = makeStyles((theme) => ({
	timeContainer: {
		borderTopWidth: 1,
		borderTopStyle: 'solid'
	},
	timeContainerBold: {
		borderTopColor: theme.palette.grey[500]
	},
	timeContainerNormal: {
		borderTopColor: theme.palette.grey[100]
	},
	timeContainerNormalEnd: {
		backgroundColor: 'transparent'
	},
	timeLabel: {
		width: LAYOUT_DIMENSION.left,
		padding: theme.spacing(1),
		textAlign: 'right',
		borderRightWidth: 1,
		borderRightStyle: 'solid',
		borderRightColor: theme.palette.grey[500]
	},
	timeLabelBold: {
		fontWeight: 'bold'
	},
	timeLabelNormal: {
		color: theme.palette.grey[500]
	},
	eventContainer: {
		flexGrow: 1
	},
	timeEndContainer: {
		backgroundColor: 'transparent'
	},
	timeLabelEnd: {
		borderRightColor: 'transparent'
	}
}));

const Outline = forwardRef((props, ref) => {
	const classes = useStyles();
	const refProps = {};
	if (ref) {
		refProps.ref = ref;
	}
	return (
		<Card
			{...refProps}
			elevation={0}
			className={[
				classes.timeContainer,
				props.timeData.isStartOfHour
					? classes.timeContainerBold
					: classes.timeContainerNormal,
				props.isEnd ? classes.timeContainerNormalEnd : ''
			].join(' ')}
		>
			<Grid container>
				<Grid
					item
					className={[
						classes.timeLabel,
						props.isEnd ? classes.timeLabelEnd : ''
					].join(' ')}
				>
					<Typography
						variant="body2"
						className={[
							props.timeData.isStartOfHour
								? classes.timeLabelBold
								: classes.timeLabelNormal
						].join(' ')}
					>
						{props.timeData.label}
					</Typography>
				</Grid>
				<Grid item className={classes.eventContainer} />
			</Grid>
		</Card>
	);
});

export default Outline;
