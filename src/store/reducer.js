import { SET_EVENTS } from './actions';
const initialState = {
	events: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EVENTS:
			return {
				events: action.payload.events
			};
		default:
			return state;
	}
};

export default reducer;
