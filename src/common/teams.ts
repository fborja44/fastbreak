import { Division, Team } from '../types';

export const teams: Team[] = [
	// Eastern Conference - Atlantic Division
	{
		city: 'Boston',
		abbreviation: 'BOS',
		name: 'Celtics',
		full_name: 'Boston Celtics',
		conference: 'EAST',
		division: 'Atlantic',
	},
	{
		city: 'Brooklyn',
		abbreviation: 'BKN',
		name: 'Nets',
		full_name: 'Brooklyn Nets',
		conference: 'EAST',
		division: 'Atlantic',
	},
	{
		city: 'New York',
		abbreviation: 'NYK',
		name: 'Knicks',
		full_name: 'New York Knicks',
		conference: 'EAST',
		division: 'Atlantic',
	},
	{
		city: 'Philadelphia',
		abbreviation: 'PHI',
		name: '76ers',
		full_name: 'Philadelphia 76ers',
		conference: 'EAST',
		division: 'Atlantic',
	},
	{
		city: 'Toronto',
		abbreviation: 'TOR',
		name: 'Raptors',
		full_name: 'Toronto Raptors',
		conference: 'EAST',
		division: 'Atlantic',
	},

	// Eastern Conference - Central Division
	{
		city: 'Chicago',
		abbreviation: 'CHI',
		name: 'Bulls',
		full_name: 'Chicago Bulls',
		conference: 'EAST',
		division: 'Central',
	},
	{
		city: 'Cleveland',
		abbreviation: 'CLE',
		name: 'Cavaliers',
		full_name: 'Cleveland Cavaliers',
		conference: 'EAST',
		division: 'Central',
	},
	{
		city: 'Detroit',
		abbreviation: 'DET',
		name: 'Pistons',
		full_name: 'Detroit Pistons',
		conference: 'EAST',
		division: 'Central',
	},
	{
		city: 'Indiana',
		abbreviation: 'IND',
		name: 'Pacers',
		full_name: 'Indiana Pacers',
		conference: 'EAST',
		division: 'Central',
	},
	{
		city: 'Milwaukee',
		abbreviation: 'MIL',
		name: 'Bucks',
		full_name: 'Milwaukee Bucks',
		conference: 'EAST',
		division: 'Central',
	},

	// Eastern Conference - Southeast Division
	{
		city: 'Atlanta',
		abbreviation: 'ATL',
		name: 'Hawks',
		full_name: 'Atlanta Hawks',
		conference: 'EAST',
		division: 'Southeast',
	},
	{
		city: 'Charlotte',
		abbreviation: 'CHA',
		name: 'Hornets',
		full_name: 'Charlotte Hornets',
		conference: 'EAST',
		division: 'Southeast',
	},
	{
		city: 'Miami',
		abbreviation: 'MIA',
		name: 'Heat',
		full_name: 'Miami Heat',
		conference: 'EAST',
		division: 'Southeast',
	},
	{
		city: 'Orlando',
		abbreviation: 'ORL',
		name: 'Magic',
		full_name: 'Orlando Magic',
		conference: 'EAST',
		division: 'Southeast',
	},
	{
		city: 'Washington',
		abbreviation: 'WAS',
		name: 'Wizards',
		full_name: 'Washington Wizards',
		conference: 'EAST',
		division: 'Southeast',
	},

	// Western Conference - Northwest Division
	{
		city: 'Denver',
		abbreviation: 'DEN',
		name: 'Nuggets',
		full_name: 'Denver Nuggets',
		conference: 'WEST',
		division: 'Northwest',
	},
	{
		city: 'Minnesota',
		abbreviation: 'MIN',
		name: 'Timberwolves',
		full_name: 'Minnesota Timberwolves',
		conference: 'WEST',
		division: 'Northwest',
	},
	{
		city: 'Oklahoma City',
		abbreviation: 'OKC',
		name: 'Thunder',
		full_name: 'Oklahoma City Thunder',
		conference: 'WEST',
		division: 'Northwest',
	},
	{
		city: 'Portland',
		abbreviation: 'POR',
		name: 'Trail Blazers',
		full_name: 'Portland Trail Blazers',
		conference: 'WEST',
		division: 'Northwest',
	},
	{
		city: 'Utah',
		abbreviation: 'UTA',
		name: 'Jazz',
		full_name: 'Utah Jazz',
		conference: 'WEST',
		division: 'Northwest',
	},

	// Western Conference - Pacific Division
	{
		city: 'Golden State',
		abbreviation: 'GSW',
		name: 'Warriors',
		full_name: 'Golden State Warriors',
		conference: 'WEST',
		division: 'Pacific',
	},
	{
		city: 'Los Angeles',
		abbreviation: 'LAC',
		name: 'Clippers',
		full_name: 'Los Angeles Clippers',
		conference: 'WEST',
		division: 'Pacific',
	},
	{
		city: 'Los Angeles',
		abbreviation: 'LAL',
		name: 'Lakers',
		full_name: 'Los Angeles Lakers',
		conference: 'WEST',
		division: 'Pacific',
	},
	{
		city: 'Phoenix',
		abbreviation: 'PHX',
		name: 'Suns',
		full_name: 'Phoenix Suns',
		conference: 'WEST',
		division: 'Pacific',
	},
	{
		city: 'Sacramento',
		abbreviation: 'SAC',
		name: 'Kings',
		full_name: 'Sacramento Kings',
		conference: 'WEST',
		division: 'Pacific',
	},

	// Western Conference - Southwest Division
	{
		city: 'Dallas',
		abbreviation: 'DAL',
		name: 'Mavericks',
		full_name: 'Dallas Mavericks',
		conference: 'WEST',
		division: 'Southwest',
	},
	{
		city: 'Houston',
		abbreviation: 'HOU',
		name: 'Rockets',
		full_name: 'Houston Rockets',
		conference: 'WEST',
		division: 'Southwest',
	},
	{
		city: 'Memphis',
		abbreviation: 'MEM',
		name: 'Grizzlies',
		full_name: 'Memphis Grizzlies',
		conference: 'WEST',
		division: 'Southwest',
	},
	{
		city: 'New Orleans',
		abbreviation: 'NOP',
		name: 'Pelicans',
		full_name: 'New Orleans Pelicans',
		conference: 'WEST',
		division: 'Southwest',
	},
	{
		city: 'San Antonio',
		abbreviation: 'SAS',
		name: 'Spurs',
		full_name: 'San Antonio Spurs',
		conference: 'WEST',
		division: 'Southwest',
	},
];

export const defaultTeam: Team = {
	city: 'NBA',
	abbreviation: 'NBA',
	name: 'Team',
	full_name: 'NBA Team',
	conference: 'EAST',
	division: 'Atlantic',
};

export const divisions: Division[] = [
	'Atlantic',
	'Central',
	'Southeast',
	'Northwest',
	'Pacific',
	'Southwest',
];
