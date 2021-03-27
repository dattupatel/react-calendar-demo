import { generateMockEvents } from './mockevents';
import Events from '../models/Events';
import { doSequentialize } from '../helpers/events.sequentialize';

export const SET_EVENTS = 'SET_EVENTS';
export const loadEvents = () => {
	return async (dispatch) => {
		let demo;
		// demo = 'demo1';
		const result = await generateMockEvents(demo);
		const events = result.map(
			(e) => new Events(e.id, e.name, e.description, e.start, e.end, e.attendees)
		);
		if (!demo) {
			console.log(events);
		}

		dispatch({
			type: SET_EVENTS,
			payload: {
				events: doSequentialize(events)
			}
		});
	};
};
