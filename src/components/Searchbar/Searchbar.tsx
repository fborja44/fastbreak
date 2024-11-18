import { Input, InputProps } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Searchbar = ({ placeholder }: InputProps) => {
	return (
		<div className='relative container-row w-full text-gray-500'>
			<MagnifyingGlassIcon className='absolute left-3 h-3.5 w-3.5' />
			<Input
				type='text'
				className='bg-stone-50 w-full rounded-lg border text-[11px] placeholder:text-gray-400 border-gray-200 pl-8 pr-2.5 py-2'
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Searchbar;
