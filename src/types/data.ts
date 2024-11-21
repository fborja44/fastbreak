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

export interface DataStats {
	id: number;
	min: string;
	fgm: number;
	fga: number;
	fg_pct: number;
	fg3m: number;
	fg3a: number;
	fg3_pct: number;
	ftm: number;
	fta: number;
	ft_pct: number;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	stl: number;
	blk: number;
	turnover: number;
	pf: number;
	pts: number;
	player: DataPlayer;
	team: DataTeam;
	game: DataGame;
}

export interface DataPlayer {
	id: number;
	first_name: string;
	last_name: string;
	position: string;
	height: string;
	weight: string;
	jersey_number: string;
	college: string;
	country: string;
	draft_year: number;
	draft_round: number;
	draft_number: number;
	team_id: number;
}
