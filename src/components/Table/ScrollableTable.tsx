import {
	Column,
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { CSSProperties, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

/**
 * Creates style classes for pinned columns.
 * @param column The column to style.
 * @returns The style class for the column.
 */
const getCommonPinningStyles = <RowData,>(
	column: Column<RowData>
): CSSProperties => {
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

interface ScrollableTableProps<RowData> {
	data: RowData[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columns: ColumnDef<RowData, any>[];
	pinnedColumns?: string[];
}

const ScrollableTable = <RowData,>({
	data,
	columns,
	pinnedColumns,
}: ScrollableTableProps<RowData>) => {
	const ref =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		initialState: {
			columnPinning: {
				left: pinnedColumns ?? [],
			},
		},
	});

	return (
		<div
			className='overflow-x-auto w-full scrollbar-hide select-none'
			{...events}
			ref={ref}
		>
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
										className='bg-gray-50 text-xxxs text-gray-500 font-normal uppercase py-1 px-2 border-b border-gray-200 text-left'
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
						<tr key={row.id} className='group'>
							{row.getVisibleCells().map((cell) => {
								const { column } = cell;
								return (
									<td
										key={cell.id}
										className='bg-white h-7 group-hover:bg-blue-50 text-gray-700 py-0.5 px-2 text-xs border-b border-gray-200'
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
