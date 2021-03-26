import { generateMockEvents } from './mockevents';
export const SET_EVENTS = 'SET_EVENTS';

export const loadEvents = () => {
	return {
		type: SET_EVENTS,
		payload: {
			events: generateMockEvents()
		}
	};
};
