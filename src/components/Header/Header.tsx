import Title from '../../assets/img/title.svg';

interface HeaderProps {
	children?: React.ReactNode;
	title: string;
	icon?: React.ReactNode;
}

const Header = ({ children, title, icon }: HeaderProps) => {
	return (
		<header className='container-col w-full'>
			<div className='w-full container-row justify-between px-2.5 pt-1.5 pb-0.5'>
				<div className='flex-1'>
					<img src={Title} className='h-5 w-auto' />
				</div>
				<img src='/assets/icons/icon32.png' className='h-6 w-6' />
				<div className='flex-1'></div>
			</div>
			<div className='w-full flex flex-col gap-1.5 px-2.5 py-1 items-start'>
				<div className='container-row justify-start gap-x-1.5'>
					{icon && <span className='w-5 h-5'>{icon}</span>}
					<span className='font-bold'>{title}</span>
				</div>
				{children}
			</div>
		</header>
	);
};

export default Header;
