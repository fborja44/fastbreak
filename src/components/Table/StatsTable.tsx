import { createColumnHelper } from '@tanstack/react-table';
import React, { useState } from 'react';
import { Player } from '../../types';
import { defaultTeam } from '../../common/teams';
import Logo from '../Logo/Logo';
import ScrollableTable from './ScrollableTable';
import { formatPercent } from '../../utils/string';

interface PlayerStats {
	number: number;
	player: Player;
	position: string;
	gamesPlayed: number;
	mpg: number;
	pts: number;
	fgPct: number;
	fg3Pct: number;
	fg2_pct: number;
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

const defaultData: PlayerStats[] = new Array(30)
	.fill(defaultPlayer)
	.map((player, i) => {
		return {
			number: i + 1,
			player: player,
			position: 'XX',
			gamesPlayed: 0,
			mpg: 0,
			pts: 0,
			fgPct: 0,
			fg3Pct: 0,
			fg2_pct: 0,
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

const columnHelper = createColumnHelper<PlayerStats>();

const columns = [
	columnHelper.accessor('number', {
		cell: (info) => (
			<span className='text-gray-400 text-xxs font-medium'>
				{info.getValue()}
			</span>
		),
		header: () => '#',
		footer: (info) => info.column.id,
		size: 20,
	}),
	columnHelper.accessor('player', {
		cell: (info) => {
			const player = info.getValue();
			return (
				<div className='container-row gap-1'>
					<Logo logo={player.team.abbreviation} className='w-6 h-6' />
					<span className='font-medium'>
						{player.firstName.charAt(0)}. {player.lastName}
					</span>
					<span className='text-xxxs text-blue-500 ml-0.5'>
						{player.team.abbreviation}
					</span>
				</div>
			);
		},
		header: () => 'Player',
		footer: (info) => info.column.id,
		size: 160,
	}),
	columnHelper.accessor('position', {
		header: () => 'POS',
		cell: (info) => info.renderValue(),
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('gamesPlayed', {
		header: () => 'GP',
		footer: (info) => info.column.id,
		size: 28,
	}),
	columnHelper.accessor('mpg', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'MIN',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('pts', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'PTS',
		footer: (info) => info.column.id,
		size: 35,
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
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'ORB',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('dreb', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'DRB',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('treb', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'TRB',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('treb', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'TRB',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('ast', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'AST',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('stl', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'STL',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('blk', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'BLK',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('tov', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'TOV',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('pf', {
		cell: (info) => info.getValue().toFixed(1),
		header: () => 'PF',
		footer: (info) => info.column.id,
		size: 35,
	}),
];

const StatsTable: React.FC = () => {
	const [data] = useState(() => [...defaultData]);

	return (
		<ScrollableTable
			id='stats'
			data={data}
			columns={columns}
			pinnedColumns={['number', 'player']}
		/>
	);
};

export default StatsTable;
