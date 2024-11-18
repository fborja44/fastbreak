import { Team } from '../../types';
import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import StyledLink from '../StyledLink/StyledLink';

interface TeamCardProps {
	team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
	return (
		<Card>
			<div className='flex flex-row gap-1'>
				<Logo logo={team.abbreviation} size={10} />
				<div className='flex flex-col'>
					<span className='text-xs font-semibold'>{team.fullName}</span>
					<span className='text-xxs text-gray-500'>
						{team.abbreviation} 0-0
					</span>
				</div>
			</div>
			<div className='container-row text-xxs gap-3'>
				<StyledLink to='/'>+ Add To My Teams</StyledLink>
				<StyledLink to='/'>Team Stats</StyledLink>
				<StyledLink to='/'>Schedule</StyledLink>
				<StyledLink to='/'>Tickets</StyledLink>
			</div>
		</Card>
	);
};

export default TeamCard;
