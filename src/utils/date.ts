/**
 * Formats a date to Month, DD, YYYY.
 * ex. January 1, 1999
 * @param date The date to format
 * @returns The formated date.
 */
export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	};
	return date.toLocaleDateString('en-US', options);
};
