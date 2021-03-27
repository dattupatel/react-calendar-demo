import moment from 'moment';

const collidesWith = (a, b) => {
	return a.end > b.start && a.start < b.end;
};

//@todo Add timezone management
class Event {
	layout = {
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
	get startFormatted() {
		return moment.utc(this.start).format('h:mm A');
	}
	get endFormatted() {
		return moment.utc(this.end).format('h:mm A');
	}

	static doSequentialize(events) {
		const newEvents = [ ...events ];
		newEvents.sort((a, b) => a.start - b.start);
		for (let i = 0; i < newEvents.length; i++) {
			for (let j = 0; j < newEvents.length; j++) {
				if (collidesWith(newEvents[i], newEvents[j])) {
					newEvents[i].layout.cols.push(j);
					if (i > j) newEvents[i].layout.colsBefore.push(j);
				}
			}
		}
		return newEvents;
	}
}

export default Event;
