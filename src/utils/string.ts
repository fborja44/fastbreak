/**
 * Formats a percentage to three decimal places, omitting the ones digit if it is less than 1.
 * @param num The number to format.
 * @returns The formatted percentage.
 */
export const formatPercent = (num: number): string => {
	// Round the number to 3 decimal points
	const roundedNum = num.toFixed(3);

	// If the number is less than 1, remove the leading zero (e.g., 0.123 → .123)
	if (num < 1) {
		return roundedNum.replace(/^0+/, '');
	}

	return roundedNum;
};
