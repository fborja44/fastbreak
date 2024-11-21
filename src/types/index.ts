export type Team = {
	city: string;
	abbreviation: string;
	name: string;
	full_name: string;
	conference: Conference;
	division: Division;
};

export type Conference = 'EAST' | 'WEST';

export type Division =
	| 'Atlantic'
	| 'Central'
	| 'Southeast'
	| 'Northwest'
	| 'Pacific'
	| 'Southwest';

export type Player = {
	team: Team;
	position?: string;
	firstName: string;
	lastName: string;
	height: string;
	weight: string;
	jerseyNumber: string;
	college: string;
	draftYear: number;
	draftRound: number;
	draftNumber: number;
};

export enum Position {
	G = 'Guard',
	PG = 'Point Guard',
	SG = 'Shooting Guard',
	F = 'Forward',
	SF = 'Small Forward',
	PF = 'Power Forward',
	C = 'Center',
}
