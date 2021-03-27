import { LEAST_MEETING_LENGTH_MINUTES } from '../constants/constants';

class Event {
	//We do constructor this way so that we can pass these values from the API
	constructor(id, name, description, start, end, attendees) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.start = start;
		this.end = end;
		this.attendees = attendees;
	}
	get length() {
		return this.end - this.start;
	}

	static doSequentialize(events) {
		const newEvents = [ ...events ];
		newEvents.sort((a, b) => a.start - b.start);
		return newEvents;
	}
}

export default Event;
