import { TabList, Tab } from '@headlessui/react';

interface TabsProps {
	children?: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
	return (
		<TabList className='container-row w-full border-t border-neutral-700 relative'>
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
		<Tab className='group flex-1 h-7 text-xxs text-neutral-400 [&:not(:last-child)]:border-r border-neutral-700 hover:text-blue-400'>
			<div className='h-full container-center gap-x-1 group-hover:border-b-2 border-blue-400 box-content'>
				{icon && <span>{icon}</span>}
				<span>{children}</span>
				<span className='h-2 bg-blue-400 hidden group-hover:block absolute bottom-0 transition-all'></span>
			</div>
		</Tab>
	);
};
