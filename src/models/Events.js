import moment from 'moment';

//@todo  Include both start and end comparision for both
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
	get startInMinutes() {
		return this.start / 1000 / 60;
	}
	get startFormatted() {
		return moment.utc(this.start).format('h:mm A');
	}
	get endFormatted() {
		return moment.utc(this.end).format('h:mm A');
	}

	//Using https://jsfiddle.net/ilpo/ftbjan06/5/ as a source
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

		for (let i = 0; i < newEvents.length; i++) {
			let el = newEvents[i];
			if (i > 0 && el.layout.colsBefore.length > 0) {
				if (newEvents[i - 1].layout.column > 0) {
					for (let j = 0; j < newEvents[i - 1].layout.column; j++) {
						if (el.layout.colsBefore.indexOf(i - (j + 2)) === -1) {
							el.layout.column = newEvents[i - (j + 2)].layout.column;
						}
					}
					if (typeof el.layout.column === 'undefined')
						el.column = newEvents[i - 1].column + 1;
				} else {
					let column = 0;
					for (let j = 0; j < el.layout.colsBefore.length; j++) {
						if (
							newEvents[
								el.layout.colsBefore[el.layout.colsBefore.length - 1 - j]
							].layout.column === column
						)
							column++;
					}
					el.layout.column = column;
				}
			} else el.layout.column = 0;
		}

		for (let i = 0; i < newEvents.length; i++) {
			newEvents[i].totalColumns = 0;
			if (newEvents[i].layout.cols.length > 1) {
				let conflictGroup = [];
				let conflictingColumns = [];

				const addConflictsToGroup = (a) => {
					for (let k = 0; k < a.layout.cols.length; k++) {
						if (conflictGroup.indexOf(a.layout.cols[k]) === -1) {
							conflictGroup.push(a.layout.cols[k]);
							conflictingColumns.push(
								newEvents[a.layout.cols[k]].layout.column
							);
							addConflictsToGroup(newEvents[a.layout.cols[k]]);
						}
					}
				};

				addConflictsToGroup(newEvents[i]);

				newEvents[i].layout.totalColumns = Math.max.apply(
					null,
					conflictingColumns
				);
			}
		}

		console.log(newEvents);
		return newEvents;
	}
}

export default Event;
