import axios from 'axios';
import env from '../common/env';

const BASE_URL = 'https://api.balldontlie.io/v1';

const DEFAULT_CONFIG = {
	headers: {
		Authorization: env.VITE_API_KEY,
	},
};

/**
 * Fetches data from the BALLDONTLIE sports API
 * https://docs.balldontlie.io/#nba-api
 * @param endpoint The endpoint to use
 * @param query Optional query parameters in key-value pairs
 * @returns The fetched data if found.
 */
export const fetchData = async (
	endpoint: string,
	query?: Record<string, string>
): Promise<unknown> => {
	// Construct query string from the query object if it exists
	const queryString = query ? '?' + new URLSearchParams(query).toString() : '';

	try {
		// Fetch data from the API with optional query parameters
		const { data } = await axios.get(
			`${BASE_URL}/${endpoint}${queryString}`,
			DEFAULT_CONFIG
		);
		return data.data;
	} catch (error) {
		// TODO: Implement better error handling
		console.error('Error fetching data:', error);
		throw error;
	}
};
