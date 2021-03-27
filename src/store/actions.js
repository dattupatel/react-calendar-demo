import { generateMockEvents } from './mockevents';
import Events from '../models/Events';

export const SET_EVENTS = 'SET_EVENTS';
export const loadEvents = () => {
	const events = generateMockEvents().map(
		(e) => new Events(e.id, e.name, e.description, e.start, e.end, e.attendees)
	);
	return {
		type: SET_EVENTS,
		payload: {
			events: Events.doSequentialize(events)
		}
	};
};
