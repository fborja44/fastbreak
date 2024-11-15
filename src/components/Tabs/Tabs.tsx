import { TabList, Tab } from '@headlessui/react';

interface TabsProps {
	children?: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
	return (
		<TabList className='container-row w-full border-y border-gray-200'>
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
		<Tab className='flex-1 h-9 text-sm text-gray-500 font-medium container-center gap-x-1 [&:not(:last-child)]:border-r border-gray-200 hover:text-blue-500 transition-colors'>
			{icon && <span className='w-6 h-6'>{icon}</span>}
			<span>{children}</span>
		</Tab>
	);
};
