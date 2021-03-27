//Using https://jsfiddle.net/ilpo/ftbjan06/5/ as a source

const collidesWith = (a, b) => {
	return a.end > b.start && a.start < b.end;
};

const sortEvents = (a, b) => {
	if (a.start === b.start) {
		return a.length > b.length ? -1 : 1;
	}
	return a.start > b.start ? 1 : -1;
};

export const doSequentialize = (events) => {
	const newEvents = [ ...events ];

	newEvents.sort(sortEvents);

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
		}
	}

	//@todo The values for columns, totalColumns and colspan are not being set properly.
	for (let i = 0; i < newEvents.length; i++) {
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
			newEvents[i].layout.totalColumns =
				Math.max.apply(null, conflictingColumns) + 1;
		}
	}

	newEvents.forEach((e, i) => (e.layout.sequence = i));

	return newEvents;
};
