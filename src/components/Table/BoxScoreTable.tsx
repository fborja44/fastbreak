import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
// import Logo from '../Logo/Logo';
import ScrollableTable from './ScrollableTable';
import { formatPercent } from '../../utils/string';
import { DataStats } from '../../types/data';

const columnHelper = createColumnHelper<DataStats>();

const columns = [
	columnHelper.accessor('player', {
		cell: (info) => {
			const player = info.getValue();
			return (
				<div className='container-row gap-1'>
					{/* <Logo logo={player.team.abbreviation} className='w-6 h-6' /> */}
					<span className='font-medium'>
						{player.first_name.charAt(0)}. {player.last_name}
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
		size: 140,
	}),
	columnHelper.accessor('min', {
		cell: (info) => info.getValue().replace(/^0+(?!$)/, ''),
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
	columnHelper.accessor('fg_pct', {
		cell: (info) => formatPercent(info.getValue()),
		header: () => 'FG%',
		footer: (info) => info.column.id,
		size: 48,
	}),
	columnHelper.accessor('fg3_pct', {
		cell: (info) => formatPercent(info.getValue()),
		header: () => '3P%',
		footer: (info) => info.column.id,
		size: 48,
	}),
	columnHelper.accessor('ft_pct', {
		cell: (info) => formatPercent(info.getValue()),
		header: () => 'FT%',
		footer: (info) => info.column.id,
		size: 48,
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
	columnHelper.accessor('reb', {
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
	columnHelper.accessor('turnover', {
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

interface BoxScoreTableProps {
	id: string;
	stats: DataStats[];
}

const BoxScoreTable = ({ id, stats }: BoxScoreTableProps) => {
	const [data] = useState(() => [...stats]);

	return (
		<ScrollableTable
			id={id}
			data={data}
			columns={columns}
			pinnedColumns={['number', 'player']}
		/>
	);
};

export default BoxScoreTable;
