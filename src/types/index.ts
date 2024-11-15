export type Team = {
	city: string;
	abbreviation: string;
	name: string;
	fullName: string;
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
