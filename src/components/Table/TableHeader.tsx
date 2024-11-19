interface TableHeaderProps {
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

const TableHeader = ({ children, icon }: TableHeaderProps) => {
	return (
		<div className='container-row w-full h-full pt-2 pb-1.5 px-1.5 gap-1 text-gray-600 bg-white uppercase text-xxs border-b border-gray-200'>
			{icon}
			<span className='relative top-[1px] text-gray-500'>{children}</span>
		</div>
	);
};

export default TableHeader;
