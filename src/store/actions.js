import { generateMockEvents } from './mockevents';
import Events from '../models/Events';
import { doSequentialize } from '../helpers/events.sequentialize';

// import bug1 from './bugs/bug1.json';
// import bug2 from './bugs/bug2.json';
// import bug3 from './bugs/bug3.json';
// import bug4 from './bugs/bug4.json';
// import bug5 from './bugs/bug5.json';

export const SET_EVENTS = 'SET_EVENTS';
export const loadEvents = () => {
	const bug = undefined;
	const events = generateMockEvents(bug).map(
		(e) => new Events(e.id, e.name, e.description, e.start, e.end, e.attendees)
	);
	if (!bug) {
		console.log(events);
	}

	return {
		type: SET_EVENTS,
		payload: {
			events: doSequentialize(events)
		}
	};
};
