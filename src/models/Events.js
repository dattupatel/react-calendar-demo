import moment from 'moment';

//@todo Add timezone management
class Event {
	layout = {
		sequence: 0,
		cols: [],
		colsBefore: [],
		column: undefined,
		totalColumns: 1,
		colspan: 1,
		width: '100%',
		height: 'auto',
		top: 0,
		left: 0
	};

	constructor(id, name, description, start, end, attendees, location) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.start = start;
		this.end = end;
		this.attendees = attendees || [];
		this.location = location;
	}
	set setLayout(val) {
		this.layout = val;
	}

	get length() {
		return this.end - this.start;
	}
	get lengthInMinutes() {
		return this.length / 1000 / 60;
	}
	get startInMinutes() {
		return this.start / 1000 / 60;
	}
	get startFormatted() {
		return moment.utc(this.start).format('h:mm A');
	}
	get endFormatted() {
		return moment.utc(this.end).format('h:mm A');
	}

	static cloneEvent(event) {
		const newEvent = new Event(
			event.id,
			event.name,
			event.description,
			event.start,
			event.end,
			event.attendees,
			event.location
		);
		newEvent.setLayout = event.layout;
		return newEvent;
	}
}

export default Event;
