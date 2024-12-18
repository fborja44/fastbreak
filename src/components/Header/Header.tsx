import { Link, LinkProps } from 'react-router-dom';
import Title from '../../assets/img/title.svg';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import BackButton from './BackButton';

interface HeaderProps {
	children?: React.ReactNode;
	title: string;
	icon?: React.ReactNode;
	rounded?: boolean;
	showAppBar?: boolean;
	showBackButton?: boolean;
}

const Header = ({
	children,
	title,
	rounded,
	showAppBar = true,
	showBackButton,
}: HeaderProps) => {
	return (
		<header
			className={`container-col z-10 relative w-full bg-neutral-900 shadow-paper pt-1.5 border-b border-neutral-700 ${
				rounded ? 'rounded-b-xl pb-0.5' : ''
			}`}
		>
			{showAppBar && (
				<div className='w-full container-row justify-between px-2.5 mb-0.5'>
					<Link to='/' className='flex-1'>
						<img src={Title} className='h-4 w-auto' />
					</Link>
					<Link to='/'>
						<img src='/assets/icons/icon32.png' className='h-5 w-5' />
					</Link>
					<div className='flex-1 container-row justify-end gap-2 text-neutral-500'>
						<HeaderLink to='/'>
							<BellIcon className='w-5 h-5' />
						</HeaderLink>
						<HeaderLink to='/'>
							<Cog6ToothIcon className='w-5 h-5' />
						</HeaderLink>
					</div>
				</div>
			)}
			<div className='w-full flex flex-col pt-1 items-start'>
				<h1 className='container-row justify-start gap-x-2 px-2.5 mb-2'>
					{/* {icon && <span className='w-5 h-5'>{icon}</span>} */}
					{showBackButton && <BackButton />}
					<span className='font-medium text-sm'>{title}</span>
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
			className='w-full container-row gap-2.5 px-2.5 overflow-x-auto scrollbar-hide mb-2'
			ref={ref}
			{...events}
		>
			{children}
		</div>
	);
};

interface HeaderLinkProps extends LinkProps {
	children?: React.ReactNode;
}

export const HeaderLink = ({ children, to }: HeaderLinkProps) => {
	return (
		<Link to={to} className='container-center hover:text-blue-400'>
			{children}
		</Link>
	);
};
