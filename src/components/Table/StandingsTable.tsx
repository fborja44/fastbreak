import { createColumnHelper } from '@tanstack/react-table';
import React, { useState } from 'react';
import { Team } from '../../types';
import { teams } from '../../common/teams';
import Logo from '../Logo/Logo';
import { formatPercent } from '../../utils/string';
import ScrollableTable from './ScrollableTable';

interface Standings {
	number: number;
	team: Team;
	wins: number;
	losses: number;
	percentage: number;
	gamesBehind: number;
	home: string;
	away: string;
	div: string;
	conf: string;
	last10: string;
	streak: number;
}

const defaultData: Standings[] = teams
	.filter((team) => team.conference === 'EAST')
	.map((team, i) => {
		return {
			number: i + 1,
			team: team,
			wins: 0,
			losses: 0,
			percentage: 0,
			gamesBehind: 0,
			home: '0-0',
			away: '0-0',
			div: '0-0',
			conf: '0-0',
			last10: '0-0',
			streak: 0,
		};
	});

const columnHelper = createColumnHelper<Standings>();

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
	columnHelper.accessor('team', {
		cell: (info) => {
			const team = info.getValue();
			return (
				<div className='container-row gap-1'>
					<Logo logo={team.abbreviation} className='w-6 h-6' />
					<span className='font-medium'>{team.name}</span>
					{/* <span className='text-xxxs text-blue-500'>{team.abbreviation}</span> */}
				</div>
			);
		},
		header: () => 'Team',
		footer: (info) => info.column.id,
		size: 120,
	}),
	columnHelper.accessor('wins', {
		header: () => 'W',
		cell: (info) => info.renderValue(),
		footer: (info) => info.column.id,
		size: 28,
	}),
	columnHelper.accessor('losses', {
		header: () => 'L',
		footer: (info) => info.column.id,
		size: 28,
	}),
	columnHelper.accessor('percentage', {
		cell: (info) => (
			<span className='font-medium italic'>
				{formatPercent(info.getValue())}
			</span>
		),
		header: () => 'PCT',
		footer: (info) => info.column.id,
		size: 45,
	}),
	columnHelper.accessor('gamesBehind', {
		cell: (info) => {
			const gamesBehind = info.getValue();
			return gamesBehind > 0 ? (
				<span className='font-medium italic'>gamesBehind</span>
			) : (
				'-'
			);
		},
		header: () => 'GB',
		footer: (info) => info.column.id,
		size: 30,
	}),
	columnHelper.accessor('home', {
		header: () => 'Home',
		footer: (info) => info.column.id,
		size: 48,
	}),
	columnHelper.accessor('away', {
		header: () => 'Away',
		footer: (info) => info.column.id,
		size: 48,
	}),
	columnHelper.accessor('div', {
		header: () => 'Div',
		footer: (info) => info.column.id,
		size: 48,
	}),
	columnHelper.accessor('conf', {
		header: () => 'Conf',
		footer: (info) => info.column.id,
		size: 48,
	}),
	columnHelper.accessor('last10', {
		header: () => 'L10',
		footer: (info) => info.column.id,
		size: 48,
	}),
	columnHelper.accessor('streak', {
		cell: (info) => {
			const streak = info.getValue();
			if (streak > 0) {
				return <span className='font-medium text-green-500'>W{streak}</span>;
			} else if (streak < 0) {
				return <span className='font-medium text-red-500'>L{streak}</span>;
			} else {
				return '-';
			}
		},
		header: () => 'STRK',
		footer: (info) => info.column.id,
		size: 48,
	}),
];

const StandingsTable: React.FC = () => {
	const [data] = useState(() => [...defaultData]);

	return (
		<ScrollableTable
			id='standings'
			data={data}
			columns={columns}
			pinnedColumns={['number', 'team']}
		/>
	);
};

export default StandingsTable;
