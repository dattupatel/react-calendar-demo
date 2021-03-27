import { generateMockEvents } from './mockevents';
import Events from '../models/Events';
import { doSequentialize } from '../helpers/events.sequentialize';

export const SET_EVENTS = 'SET_EVENTS';
export const loadEvents = () => {
	return async (dispatch) => {
		const result = await generateMockEvents();
		const events = result.map(
			(e) =>
				new Events(
					e.id,
					e.name,
					e.description,
					e.start,
					e.end,
					e.attendees,
					e.location
				)
		);
		console.log(events);

		const sequentialized = doSequentialize(events);

		dispatch({
			type: SET_EVENTS,
			payload: {
				events: sequentialized
			}
		});
	};
};
