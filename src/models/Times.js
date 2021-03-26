import moment from 'moment';
import { LEAST_MEETING_LENGTH_MINUTES } from '../constants/constants';

class Times {
	constructor(h, m, i) {
		this.h = h > 12 ? h - 12 : h;
		this.m = m.toString().padStart(2, '0');
		this.am = h < 12 ? 'AM' : 'PM';
		this.isStartOfHour = i % (60 / LEAST_MEETING_LENGTH_MINUTES) === 0;
		this.ms = h * 60 * 60 * 1000 + m * 60 * 1000;
	}
	get label() {
		return moment.utc(this.ms).format('h:mm A');
	}
}
export default Times;
