import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import eventsReducer from './store/reducer';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './assets/theme';
import Calendar from './components/calendar/Calendar';

const rootReducer = combineReducers({
	events: eventsReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Calendar />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
