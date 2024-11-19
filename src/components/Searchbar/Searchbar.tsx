import { Input, InputProps } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Searchbar = ({ placeholder }: InputProps) => {
	return (
		<div className='relative container-row w-full text-gray-700 placeholder:text-gray-500'>
			<MagnifyingGlassIcon className='absolute left-2 h-3 w-3' />
			<Input
				type='text'
				className='bg-white w-full rounded-lg border text-xxs placeholder:text-gray-400 border-gray-200 pl-6 pr-2.5 py-1.5'
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Searchbar;
