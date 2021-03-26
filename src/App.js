import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import eventsReducer from './store/reducer';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './assets/theme';
import AppComponent from './components/AppComponent';

const rootReducer = combineReducers({
	events: eventsReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppComponent />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
