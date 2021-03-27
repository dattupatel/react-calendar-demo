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
	get rowspan() {
		return this.length / 1000 / 60 / LEAST_MEETING_LENGTH_MINUTES;
	}

	get right() {
		return this.dimensions.left + this.dimensions.width;
	}

	static doSequentialize(events) {
		const newEvents = [ ...events ];
		newEvents.sort((a, b) => (a.end > b.end ? 1 : -1));
		newEvents.sort((a, b) => (a.start > b.start ? 1 : -1));
		return newEvents;
	}
}

export default Event;
