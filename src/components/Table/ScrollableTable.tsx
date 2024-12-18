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
	column: Column<RowData>,
	isHeader: boolean = false
): CSSProperties => {
	const isPinned = column.getIsPinned();
	const isLastLeftPinnedColumn =
		isPinned === 'left' && column.getIsLastColumn('left');
	const isFirstRightPinnedColumn =
		isPinned === 'right' && column.getIsFirstColumn('right');

	return {
		borderLeft: isFirstRightPinnedColumn ? '1px solid #3F3F46' : undefined,
		borderRight: isLastLeftPinnedColumn ? `1px solid #3F3F46` : undefined,
		left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
		right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
		top: isHeader ? '0px' : undefined,
		opacity: isPinned ? 0.95 : 1,
		position: isPinned || isHeader ? 'sticky' : 'relative',
		width: column.getSize(),
		zIndex: 0 + (isHeader ? 1 : 0) + (isPinned ? 1 : 0),
	};
};

interface ScrollableTableProps<RowData> {
	id: string;
	data: RowData[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columns: ColumnDef<RowData, any>[];
	pinnedColumns?: string[];
}

const ScrollableTable = <RowData,>({
	id,
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
		enableRowPinning: true,
		initialState: {
			columnPinning: {
				left: pinnedColumns ?? [],
			},
		},
	});

	return (
		<div
			className='overflow-x-auto w-full h-full scrollbar-hide select-none'
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
					{table.getHeaderGroups().map((headerGroup, i) => (
						<tr key={`${id}-${headerGroup.id}=${i}`}>
							{headerGroup.headers.map((header, j) => {
								const { column } = header;
								return (
									<th
										key={`${id}-${header.id}-${j}`}
										className='bg-neutral-900 text-xxxs text-neutral-400 font-normal uppercase py-1 px-2 border-b border-neutral-700 text-left'
										style={{ ...getCommonPinningStyles(column, true) }}
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
					{table.getRowModel().rows.map((row, i) => (
						<tr key={`${id}-${row.id}-${i}`} className='group'>
							{row.getVisibleCells().map((cell, j) => {
								const { column } = cell;
								return (
									<td
										key={`${id}-${cell.id}=${j}`}
										className='bg-neutral-800 h-7 group-hover:bg-neutral-700 text-neutral-300 py-0.5 px-2 text-xs border-b border-neutral-700'
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
