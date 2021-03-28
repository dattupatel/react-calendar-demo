//Using https://jsfiddle.net/ilpo/ftbjan06/5/ as a source

const collidesWith = (a, b) => {
	return a.end > b.start && a.start < b.end;
};

const doSortEvents = (a, b) => {
	if (a.start === b.start) {
		return a.length > b.length ? -1 : 1;
	}
	return a.start > b.start ? 1 : -1;
};

export const doSequentialize = (events) => {
	const newEvents = [...events];

	newEvents.sort(doSortEvents);

	for (let i = 0; i < newEvents.length; i++) {
		for (let j = 0; j < newEvents.length; j++) {
			if (collidesWith(newEvents[i], newEvents[j])) {
				newEvents[i].layout.cols.push(j);
				if (i > j) newEvents[i].layout.colsBefore.push(j);
			}
		}
	}

	newEvents.forEach((event, i) => {
		if (i > 0 && event.layout.colsBefore.length > 0) {
			const previousEvent = newEvents[i - 1];
			if (previousEvent.layout.column > 0) {
				for (let j = 0; j < previousEvent.layout.colsBefore.length; j++) {
					const res = event.layout.colsBefore.indexOf(i - (j + 2));
					if (res === -1 && !collidesWith(event, previousEvent)) {
						event.layout.column = newEvents[i - (j + 2)].layout.column;
					}
				}
				if (typeof event.layout.column === 'undefined') {
					if (collidesWith(event, previousEvent)) {
						event.layout.column = previousEvent.layout.column + 1;
					}
					else {
						event.layout.column = previousEvent.layout.column;
					}
				}
			}
			else {
				let column = 0;
				for (let j = 0; j < event.layout.colsBefore.length; j++) {
					const comparingEvent = newEvents[event.layout.colsBefore[event.layout.colsBefore.length - 1 - j]];

					if (comparingEvent.layout.column === column) {
						column++;
					}
				}
				event.layout.column = column;
			}
		}
		else {
			event.layout.column = 0;
		}
	});

	//@todo The values for column, totalColumns and colspan are not being set properly.
	newEvents.forEach((event, i) => {
		if (event.layout.cols.length > 1) {
			let conflictGroup = [];
			let conflictingColumns = [];

			const addConflictsToGroup = (a) => {
				for (let k = 0; k < a.layout.cols.length; k++) {
					if (conflictGroup.indexOf(a.layout.cols[k]) === -1) {
						conflictGroup.push(a.layout.cols[k]);
						conflictingColumns.push(newEvents[a.layout.cols[k]].layout.column);
						addConflictsToGroup(newEvents[a.layout.cols[k]]);
					}
				}
			};
			addConflictsToGroup(event);

			event.layout.totalColumns = Math.max.apply(null, conflictingColumns) + 1;
		}
	});

	newEvents.forEach((event, i) => (event.layout.sequence = i));

	return newEvents;
};
