import moment from 'moment';

//@todo Add timezone management
class Event {
	layout = {
		sequence: 0,
		cols: [],
		colsBefore: [],
		column: 0,
		totalColumns: 0,
		width: '100%',
		height: 'auto',
		top: 0,
		left: 0
	};

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
}

export default Event;
