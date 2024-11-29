import {
	CalendarDaysIcon,
	ChartBarIcon,
	TrophyIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';
import { Link, LinkProps } from 'react-router-dom';
import NBA from '../../assets/img/nba.svg';

const Footer = () => {
	return (
		<footer className='absolute container-row bottom-0 bg-neutral-900 w-full h-11 justify-around border-t border-neutral-800 z-10'>
			<FooterButton label='Feed' icon={<CalendarDaysIcon />} to='/' />
			<FooterButton label='Standings' icon={<TrophyIcon />} to='/standings' />
			<Link to='/teams'>
				<img className='h-9' src={NBA} alt='' />
			</Link>
			<FooterButton label='Stats' icon={<ChartBarIcon />} to='/stats' />
			<FooterButton label='Leaders' icon={<UsersIcon />} to='/leaders' />
		</footer>
	);
};

export default Footer;

export interface FooterButtonProps extends LinkProps {
	icon?: React.ReactNode;
	label?: string;
}

export const FooterButton = ({ to, icon, label }: FooterButtonProps) => {
	return (
		<Link
			to={to}
			className='container-col text-neutral-400 pt-0.5 hover:text-blue-400'
		>
			{icon && <span className='w-4 h-4'>{icon}</span>}
			{label && <span className='whitespace-nowrap text-xxs'>{label}</span>}
		</Link>
	);
};
