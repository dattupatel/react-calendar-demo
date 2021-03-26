import { LEAST_MEETING_LENGTH_MINUTES, LAYOUT_DIMENSION } from '../constants/constants';

class Event {
	overlaps = {
		before: [],
		after: []
	};
	dimensions = {
		left: 0,
		width: LAYOUT_DIMENSION.width
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
	get rowspan() {
		return this.length / 1000 / 60 / LEAST_MEETING_LENGTH_MINUTES;
	}

	get right() {
		return this.dimensions.left + this.dimensions.width;
	}

	static doSequentialize(events) {
		const left = LAYOUT_DIMENSION.left;
		const width = LAYOUT_DIMENSION.width;

		const newEvents = [ ...events ];
		newEvents.sort((a, b) => (a.end > b.end ? 1 : -1));
		newEvents.sort((a, b) => (a.start > b.start ? 1 : -1));
		newEvents.forEach((event, i) => {
			if (i > 0) {
				event.overlaps.before = newEvents
					.slice(0, i)
					.filter((prev) => event.start >= prev.start && event.start < prev.end)
					.map((a) => a.id);
			}
			if (i < newEvents.length) {
				event.overlaps.after = newEvents
					.slice(i + 1)
					.filter(
						(next) =>
							(event.end > next.start && event.end <= next.end) ||
							(next.start >= event.start && next.start < event.end)
					)
					.map((a) => a.id);
			}

			//@todo Refactor the code to set left and width of the event.
			//In some scenarios, we can show next events on the left of the previous events
			//use rowspan
			const before = event.overlaps.before;
			const after = event.overlaps.after;
			event.dimensions.left =
				before.length === 0
					? 0
					: newEvents.find((e) => e.id === before.slice(-1)[0]).right;
			event.dimensions.width = width - left;
			if (after.length !== 0 || before.length !== 0) {
				event.dimensions.width = (width - left) / events.length;
			}
		});

		return newEvents;
	}
}

export default Event;
