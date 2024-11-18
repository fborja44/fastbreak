import { Select, SelectProps } from '@headlessui/react';

interface DropdownProps extends SelectProps {
	placeholder?: string;
}

const Dropdown = ({ children }: DropdownProps) => {
	return (
		<Select className='bg-stone-50 w-full rounded-lg border text-xs font-semibold text-gray-500 border-gray-200 px-2.5 py-1.5'>
			{children}
		</Select>
	);
};

export default Dropdown;
