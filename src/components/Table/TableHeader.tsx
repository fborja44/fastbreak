interface TableHeaderProps {
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

const TableHeader = ({ children, icon }: TableHeaderProps) => {
	return (
		<div className='container-row w-full h-full pt-2 pb-1.5 px-1.5 gap-1 text-neutral-600 bg-neutral-900 uppercase text-xxs border-b border-neutral-700'>
			{icon}
			<span className='relative top-[1px] text-neutral-500'>{children}</span>
		</div>
	);
};

export default TableHeader;
