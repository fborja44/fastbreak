import { createColumnHelper } from '@tanstack/react-table';
import React, { useState } from 'react';
import { Player } from '../../types';
import { defaultTeam } from '../../common/teams';
// import Logo from '../Logo/Logo';
import ScrollableTable from './ScrollableTable';
import { formatPercent } from '../../utils/string';

interface BoxScoreStats {
	player: Player;
	min: number;
	pts: number;
	fgm: number;
	fga: number;
	fgPct: number;
	fg3Pct: number;
	ftm: number;
	fta: number;
	ftPct: number;
	oreb: number;
	dreb: number;
	treb: number;
	ast: number;
	stl: number;
	blk: number;
	tov: number;
	pf: number;
}

const defaultPlayer: Player = {
	team: defaultTeam,
	position: 'PG',
	firstName: 'Firstname',
	lastName: 'Lastname',
	height: '0',
	weight: '0',
	jerseyNumber: '0',
	college: 'College',
	draftYear: 1900,
	draftRound: 0,
	draftNumber: 0,
};

const defaultData: BoxScoreStats[] = new Array(15)
	.fill(defaultPlayer)
	.map((player) => {
		return {
			player: player,
			min: 0,
			pts: 0,
			fgm: 0,
			fga: 0,
			fgPct: 0,
			fg3Pct: 0,
			ftm: 0,
			fta: 0,
			ftPct: 0,
			oreb: 0,
			dreb: 0,
			treb: 0,
			ast: 0,
			stl: 0,
			blk: 0,
			tov: 0,
			pf: 0,
		};
	});

const columnHelper = createColumnHelper<BoxScoreStats>();

const columns = [
	columnHelper.accessor('player', {
		cell: (info) => {
			const player = info.getValue();
			return (
				<div className='container-row gap-1'>
					{/* <Logo logo={player.team.abbreviation} className='w-6 h-6' /> */}
					<span className='font-medium'>
						{player.firstName.charAt(0)}. {player.lastName}
					</span>
					{player.position && (
						<span className='text-xxxs text-gray-500 ml-0.5'>
							{player.position}
						</span>
					)}
				</div>
			);
		},
		header: () => 'Player',
		footer: (info) => info.column.id,
		size: 160,
	}),
	columnHelper.accessor('min', {
		header: () => 'MIN',
		footer: (info) => info.column.id,
		size: 28,
	}),
	columnHelper.accessor('pts', {
		cell: (info) => info.getValue(),
		header: () => 'PTS',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('fgPct', {
		cell: (info) => formatPercent(info.getValue()),
		header: () => 'FG%',
		footer: (info) => info.column.id,
		size: 45,
	}),
	columnHelper.accessor('fg3Pct', {
		cell: (info) => formatPercent(info.getValue()),
		header: () => '3P%',
		footer: (info) => info.column.id,
		size: 45,
	}),
	columnHelper.accessor('ftPct', {
		cell: (info) => formatPercent(info.getValue()),
		header: () => 'FT%',
		footer: (info) => info.column.id,
		size: 45,
	}),
	columnHelper.accessor('oreb', {
		cell: (info) => info.getValue(),
		header: () => 'ORB',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('dreb', {
		cell: (info) => info.getValue(),
		header: () => 'DRB',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('treb', {
		cell: (info) => info.getValue(),
		header: () => 'TRB',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('treb', {
		cell: (info) => info.getValue(),
		header: () => 'TRB',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('ast', {
		cell: (info) => info.getValue(),
		header: () => 'AST',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('stl', {
		cell: (info) => info.getValue(),
		header: () => 'STL',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('blk', {
		cell: (info) => info.getValue(),
		header: () => 'BLK',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('tov', {
		cell: (info) => info.getValue(),
		header: () => 'TOV',
		footer: (info) => info.column.id,
		size: 32,
	}),
	columnHelper.accessor('pf', {
		cell: (info) => info.getValue(),
		header: () => 'PF',
		footer: (info) => info.column.id,
		size: 32,
	}),
];

const BoxScoreTable: React.FC = () => {
	const [data] = useState(() => [...defaultData]);

	return (
		<ScrollableTable
			data={data}
			columns={columns}
			pinnedColumns={['number', 'player']}
		/>
	);
};

export default BoxScoreTable;
