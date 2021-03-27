const collidesWith = (a, b) => {
	return a.end > b.start && a.start < b.end;
};

class Event {
	layout = {
		cols: [],
		colsBefore: [],
		column: 0,
		totalColumns: 0,
		width: 0,
		height: 0,
		top: 0,
		left: 0
	};
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
