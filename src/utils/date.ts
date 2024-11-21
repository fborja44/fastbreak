import { DataPeriod } from '../types/data';

/**
 * Formats a date to Month DD, YYYY.
 * ex. January 1, 1999
 * @param {Date} date The date to format
 * @returns {string} The formated date in Month DD, YYYY format.
 */
export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	};
	return date.toLocaleDateString('en-US', options);
};

/**
 * Formats a given date to the format YYYY-MM-DD.
 *
 * @param {Date} date - The date object to be formatted.
 * @returns {string} - The formatted date in YYYY-MM-DD format.
 */
export const apiDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

/**
 * Formats a given Date object to a string in the format hh:MM AM/PM (local time).
 * @param {Date} date - The Date object to be formatted.
 * @returns {string} - The formatted time in hh:MM AM/PM format.
 */
export const formatTime = (date: Date): string => {
	let hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const ampm = hours >= 12 ? 'PM' : 'AM';

	// Convert 24-hour time to 12-hour format
	hours = hours % 12;
	hours = hours ? hours : 12; // 0 should be 12 in 12-hour format

	return `${hours}:${minutes} ${ampm}`;
};

/**
 * Checks if a game is started given the
 * A game has not yet been started if the game status is a string in ISO 8601 time format.
 * @param {string} dateString - The game status to be checked.
 * @returns {boolean} - Returns true if the game has started, false otherwise.
 */
export const isGameStarted = (gameStatus: string | DataPeriod): boolean => {
	const isoRegex =
		/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d{1,3})?)?(Z|([+-]\d{2}:\d{2})))?$/;

	return isoRegex.test(gameStatus);
};
