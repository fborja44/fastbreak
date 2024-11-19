import { Select, SelectProps } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface DropdownProps extends SelectProps {
	placeholder?: string;
}

const Dropdown = ({ children }: DropdownProps) => {
	return (
		<div className='w-full container-row relative text-gray-700'>
			<Select className='bg-white w-full rounded-lg border text-xxs appearance-none border-gray-200 px-2.5 py-1.5 focus:outline-none'>
				{children}
			</Select>
			<ChevronDownIcon className='w-3 h-3 absolute right-2.5' />
		</div>
	);
};

export default Dropdown;
