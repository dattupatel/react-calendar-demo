import {TOGGLE_DEBUG_MODE, SET_EVENTS} from './actions';
const initialState = {
	events: [],
	debugMode: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EVENTS:
			return {
				...state,
				events: action.payload.events
			};
		case TOGGLE_DEBUG_MODE:
			return {
				...state,
				debugMode: !state.debugMode
			};
		default:
			return state;
	}
};

export default reducer;
