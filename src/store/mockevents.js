import Jabber from 'jabber';
import {getRandomNumber, getMinNumWeightedRandomNumber} from '../helpers/utils';
import {
	START_HOUR,
	END_HOUR,
	LEAST_MEETING_LENGTH_MINUTES,
	LONGEST_MEETING_STEP,
	MAX_EVENTS_PER_DAY
} from '../constants/constants';

const generateRandomEvent = () => {
	const jabber = new Jabber();
	const id = Math.random().toString();
	const name = jabber.createParagraph(getRandomNumber(1, 4));
	const description = jabber.createParagraph(getRandomNumber(0, 100));
	const {start, end} = generateMeetingEvents();
	const attendees = new Array(getRandomNumber(0, 4)).fill(null).map(() => {
		return jabber.createFullName(false);
	});
	const location = jabber.createParagraph(getRandomNumber(0, 4));

	return {
		id,
		name,
		description,
		start,
		end,
		attendees: attendees,
		location
	};
};

//@todo: Refactor the code that generates random meeting events
const generateMeetingEvents = () => {
	const lastTime = END_HOUR * 1000 * 60 * 60;
	const randomStart = getRandomNumber(START_HOUR, END_HOUR);
	const randomStartM = getRandomNumber(0, 60 / LEAST_MEETING_LENGTH_MINUTES);
	const start = randomStart * 60 * 60 * 1000 + randomStartM * LEAST_MEETING_LENGTH_MINUTES * 60 * 1000;

	const randomStartMend = getRandomNumber(1, LONGEST_MEETING_STEP);
	const end =
		start +
		randomStartMend * LEAST_MEETING_LENGTH_MINUTES * 60 * 1000 +
		getMinNumWeightedRandomNumber(0, LEAST_MEETING_LENGTH_MINUTES) * 60 * 1000;

	return {
		start: start,
		end: end > lastTime ? lastTime : end
	};
};

const createMockData = () => {
	return new Promise((resolve, reject) => {
		const data = new Array(MAX_EVENTS_PER_DAY).fill({}).map(() => {
			const e = generateRandomEvent();
			return {
				id: e.id,
				name: e.name,
				description: e.description,
				start: e.start,
				end: e.end,
				attendees: e.attendees,
				location: e.location
			};
		});
		resolve(data);
	});
};

const loadData = async (bug) => {
	if (bug) {
		try {
			const res = await import(`./bugs/${bug}.json`);
			return res.default.map((e) => {
				return {
					id: e.id,
					name: e.name,
					description: e.description,
					start: e.start,
					end: e.end,
					attendees: e.attendees,
					location: e.location
				};
			});
		} catch (err) {
			console.error(err.message, 'Generating mock data instead');
		}
	}
	return createMockData();
};

export const generateMockEvents = async (bug = undefined) => {
	return await loadData(bug);
};
