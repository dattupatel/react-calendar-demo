import {generateMockEvents} from './mockevents';
import Events from '../models/Events';
import {doSequentialize} from '../helpers/events.sequentialize';

export const SET_EVENTS = 'SET_EVENTS';
export const TOGGLE_DEBUG_MODE = 'TOGGLE_DEBUG_MODE';

export const loadEvents = () => {
	return async (dispatch) => {
		let demo;
		//demo = 'demo1';
		const result = await generateMockEvents(demo);
		const events = result.map(
			(e) => new Events(e.id, e.name, e.description, e.start, e.end, e.attendees, e.location)
		);
		if (!demo) {
			console.log(events);
		}

		const sequentialized = doSequentialize(events);

		dispatch({
			type: SET_EVENTS,
			payload: {
				events: sequentialized
			}
		});
	};
};

export const toggleDebugMode = (mode) => {
	return {
		type: TOGGLE_DEBUG_MODE
	};
};
