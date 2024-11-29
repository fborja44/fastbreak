import { Input, InputProps } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Searchbar = ({ placeholder }: InputProps) => {
	return (
		<div className='relative container-row w-full text-neutral-400 placeholder:text-neutral-500'>
			<MagnifyingGlassIcon className='absolute left-2 h-3 w-3' />
			<Input
				type='text'
				className='bg-neutral-900 w-full rounded-lg border text-xxs placeholder:text-neutral-400 border-neutral-700 pl-6 pr-2.5 py-1'
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Searchbar;
