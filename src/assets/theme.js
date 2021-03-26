import { createMuiTheme } from '@material-ui/core/styles';

const shape = {
	borderRadius: 0
};

export const theme = createMuiTheme({
	shape: { ...shape }
});
