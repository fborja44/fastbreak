import {
	Column,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import React, { CSSProperties, useState } from 'react';
import { Team } from '../../types';
import { teams } from '../../common/teams';
import Logo from '../Logo/Logo';
import { formatPercent } from '../../utils/string';

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

/**
 * Creates style classes for pinned columns.
 * @param column The column to style.
 * @returns The style class for the column.
 */
const getCommonPinningStyles = (column: Column<Standings>): CSSProperties => {
	const isPinned = column.getIsPinned();
	const isLastLeftPinnedColumn =
		isPinned === 'left' && column.getIsLastColumn('left');
	const isFirstRightPinnedColumn =
		isPinned === 'right' && column.getIsFirstColumn('right');

	return {
		borderLeft: isFirstRightPinnedColumn ? '1px solid #E5E7EB' : undefined,
		borderRight: isLastLeftPinnedColumn ? `1px solid #E5E7EB` : undefined,
		left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
		right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
		opacity: isPinned ? 0.95 : 1,
		position: isPinned ? 'sticky' : 'relative',
		width: column.getSize(),
		zIndex: isPinned ? 1 : 0,
	};
};

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
			<span className='text-gray-400 text-xs font-medium italic'>
				{info.getValue()}
			</span>
		),
		header: () => '#',
		footer: (info) => info.column.id,
		size: 30,
	}),
	columnHelper.accessor('team', {
		cell: (info) => {
			const team = info.getValue();
			return (
				<div className='container-row gap-1'>
					<Logo logo={team.abbreviation} />
					<span className='font-medium'>{team.name}</span>
				</div>
			);
		},
		header: () => 'Team',
		footer: (info) => info.column.id,
		size: 140,
	}),
	columnHelper.accessor('wins', {
		header: () => 'W',
		cell: (info) => info.renderValue(),
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('losses', {
		header: () => 'L',
		footer: (info) => info.column.id,
		size: 35,
	}),
	columnHelper.accessor('percentage', {
		cell: (info) => (
			<span className='font-semibold'>{formatPercent(info.getValue())}</span>
		),
		header: () => 'PCT',
		footer: (info) => info.column.id,
		size: 60,
	}),
	columnHelper.accessor('gamesBehind', {
		header: () => 'GB',
		footer: (info) => info.column.id,
		size: 60,
	}),
	columnHelper.accessor('home', {
		header: () => 'Home',
		footer: (info) => info.column.id,
		size: 60,
	}),
	columnHelper.accessor('away', {
		header: () => 'Away',
		footer: (info) => info.column.id,
		size: 60,
	}),
	columnHelper.accessor('div', {
		header: () => 'Div',
		footer: (info) => info.column.id,
		size: 60,
	}),
	columnHelper.accessor('conf', {
		header: () => 'Conf',
		footer: (info) => info.column.id,
		size: 60,
	}),
	columnHelper.accessor('last10', {
		header: () => 'L10',
		footer: (info) => info.column.id,
		size: 60,
	}),
	columnHelper.accessor('streak', {
		header: () => 'STRK',
		footer: (info) => info.column.id,
		size: 60,
	}),
];

const ScrollableTable: React.FC = () => {
	const [data, _setData] = React.useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		initialState: {
			columnPinning: {
				left: ['number', 'team'],
			},
		},
	});

	return (
		<div className='overflow-x-auto w-full scrollbar-hide'>
			<table
				className='min-w-full table-fixed border-collapse'
				style={{
					width: table.getTotalSize(),
				}}
			>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const { column } = header;
								return (
									<th
										key={header.id}
										className='bg-white text-xs text-gray-500 font-normal uppercase py-1 px-2 border-b border-gray-200 text-left'
										style={{ ...getCommonPinningStyles(column) }}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => {
								const { column } = cell;
								return (
									<td
										key={cell.id}
										className='bg-stone-50 text-gray-700 py-1 px-2 text-sm border-b border-gray-200'
										style={{ ...getCommonPinningStyles(column) }}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ScrollableTable;
