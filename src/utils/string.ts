import { DataGame, DataPeriod } from '../types/data';

/**
 * Formats a percentage to three decimal places, omitting the ones digit if it is less than 1.
 * @param num The number to format.
 * @returns The formatted percentage.
 */
export const formatPercent = (num: number): string => {
	if (!num) return '-';

	// Round the number to 3 decimal points
	const roundedNum = num.toFixed(3);

	// If the number is less than 1, remove the leading zero (e.g., 0.123 → .123)
	if (num < 1) {
		return roundedNum.replace(/^0+/, '');
	}

	return roundedNum;
};

/**
 * Gets a game's current display time.
 * @param game The game to parse.
 * @returns The formatted game time.
 */
export const getGameTime = (game: DataGame): string => {
	if (game.time === 'Half') {
		return 'Halftime';
	}
	switch (game.status as string | DataPeriod) {
		case 'Halftime':
			return 'Halftime';
		case 'Final':
			return 'Final';
		case '1st Qtr':
			return `Q1 ${game.time}`;
		case '2nd Qtr':
			return `Q2 ${game.time}`;
		case '3rd Qtr':
			return `Q2 ${game.time}`;
		case '4th Qtr':
			return `Q2 ${game.time}`;
		default:
			return 'Unknown';
	}
};
