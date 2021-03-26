import Jabber from 'jabber';
import { getRandomNumber } from '../helpers/utils';
import {
	START_HOUR,
	END_HOUR,
	LEAST_MEETING_LENGTH_MINUTES,
	LONGEST_MEETING_STEP,
	MAX_STEP_MINUTES
} from '../constants/constants';
import Events from '../models/Events';

export const generateMockEvents = () => {
	const events = new Array(10).fill({}).map(() => {
		const e = generateRandomEvent();
		return new Events(e.id, e.name, e.description, e.start, e.end, e.attendees);
	});
	return Events.doSequentialize(events);
};

export const generateRandomEvent = () => {
	const jabber = new Jabber();
	const id = Math.random().toString();
	const name = jabber.createParagraph(getRandomNumber(1, 4));
	const description = jabber.createParagraph(getRandomNumber(0, 100));
	const { start, end } = generateMeetingEvents();
	const attendees = new Array(getRandomNumber(0, 4)).fill(null).map(() => {
		return jabber.createFullName(false);
	});

	return {
		id,
		name,
		description,
		start,
		end,
		attendees: attendees
	};
};

//TODO: Refactor
const generateMeetingEvents = () => {
	const lastTime = END_HOUR * 1000 * 60 * 60;
	const randomStart = getRandomNumber(START_HOUR, END_HOUR);
	const randomStartM = getRandomNumber(0, 60 / LEAST_MEETING_LENGTH_MINUTES);
	const start =
		randomStart * 60 * 60 * 1000 +
		randomStartM * LEAST_MEETING_LENGTH_MINUTES * 60 * 1000;

	const randomStartMend = getRandomNumber(1, LONGEST_MEETING_STEP);
	const end =
		start +
		randomStartMend * LEAST_MEETING_LENGTH_MINUTES * 60 * 1000 +
		getRandomNumber(0, MAX_STEP_MINUTES) * 60 * 1000;

	return {
		start: start,
		end: end > lastTime ? lastTime : end
	};
};
