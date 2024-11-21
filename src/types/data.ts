export interface DataTeam {
	id: number;
	conference: string;
	division: string;
	city: string;
	name: string;
	full_name: string;
	abbreviation: string;
}

export interface DataGame {
	id: number;
	date: string;
	season: number;
	status: string;
	period: string | DataPeriod;
	time: string;
	postseason: boolean;
	home_team_score: number;
	visitor_team_score: number;
	home_team: DataTeam;
	visitor_team: DataTeam;
}

export type DataPeriod =
	| '1st Qtr'
	| '2nd Qtr'
	| 'Halftime'
	| '3rd Qtr'
	| '4th Qtr'
	| 'Final';
