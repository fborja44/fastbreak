import { Link } from 'react-router-dom';
import Title from '../../assets/img/title.svg';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

interface HeaderProps {
	children?: React.ReactNode;
	title: string;
	icon?: React.ReactNode;
	rounded?: boolean;
}

const Header = ({ children, title, icon, rounded }: HeaderProps) => {
	return (
		<header
			className={`container-col z-10 relative w-full bg-white shadow-paper pt-1.5 border-b border-gray-200 ${
				rounded ? 'rounded-b-xl pb-3' : ''
			}`}
		>
			<div className='w-full container-row justify-between px-2.5 mb-0.5'>
				<Link to='/' className='flex-1'>
					<img src={Title} className='h-4 w-auto' />
				</Link>
				<Link to='/'>
					<img src='/assets/icons/icon32.png' className='h-6 w-6' />
				</Link>
				<div className='flex-1'></div>
			</div>
			<div className='w-full flex flex-col gap-2 pt-1 items-start'>
				<h1 className='container-row justify-start gap-x-1.5 px-2.5'>
					{icon && <span className='w-5 h-5'>{icon}</span>}
					<span className='font-semibold text-gray-900 text-sm'>{title}</span>
				</h1>
				{children}
			</div>
		</header>
	);
};

export default Header;

interface HeaderRowProps {
	children?: React.ReactNode;
}

export const HeaderRow = ({ children }: HeaderRowProps) => {
	const ref =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	return (
		<div
			className='w-full container-row gap-2.5 px-2.5 overflow-x-auto scrollbar-hide'
			ref={ref}
			{...events}
		>
			{children}
		</div>
	);
};
