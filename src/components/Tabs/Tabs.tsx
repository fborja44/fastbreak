import { TabList, Tab } from '@headlessui/react';

interface TabsProps {
	children?: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
	return (
		<TabList className='container-row w-full border-y border-gray-200 relative'>
			{children}
		</TabList>
	);
};

export default Tabs;

interface TabProps {
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

export const StyledTab = ({ icon, children }: TabProps) => {
	return (
		<Tab className='group flex-1 h-7 text-xxs text-gray-600 [&:not(:last-child)]:border-r border-gray-200 hover:text-blue-500'>
			<div className='h-full container-center gap-x-1 group-hover:border-b-2 border-blue-500 box-content'>
				{icon && <span>{icon}</span>}
				<span>{children}</span>
				<span className='h-2 bg-blue-500 hidden group-hover:block absolute bottom-0 transition-all'></span>
			</div>
		</Tab>
	);
};
