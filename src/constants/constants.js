//The start/end hours in a 24 hour clock
export const START_HOUR = 9;
export const END_HOUR = 21;

//Must be a factor of 60
export const LEAST_MEETING_LENGTH_MINUTES = 15;

//The longest a meeting can be in minutes => ((LEAST_MEETING_LENGTH_MINUTES * LONGEST_MEETING_STEP) + random number between 0 and 15) minutes meetings
export const LONGEST_MEETING_STEP = 8;

export const LAYOUT_DIMENSION = {
	left: 90,
	width: 700
};
