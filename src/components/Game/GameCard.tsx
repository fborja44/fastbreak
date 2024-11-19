import { Team } from '../../types';
import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import StyledLink from '../StyledLink/StyledLink';

const GameCard = () => {
	return (
		<Card>
			<div className='container-row justify-between text-gray-500 text-xxs'>
				<span>NBA Regular Season</span>
				<div>
					<span>12:00 PM</span>
				</div>
			</div>
			<TeamSlot />
			<TeamSlot />
			<div className='w-full container-row justify-between px-6 text-xxs border-t border-gray-100 pt-2 mt-0.5'>
				<StyledLink to='box-score'>Box Score</StyledLink>
				<StyledLink to='box-score'>Betting Odds</StyledLink>
			</div>
		</Card>
	);
};

export default GameCard;

interface TeamSlotProps {
	team?: Team;
	score?: string | number;
}

const TeamSlot = ({ team, score = '-' }: TeamSlotProps) => {
	return (
		<div className='container-row justify-between w-full'>
			<div className='container-row gap-1'>
				<Logo logo={team?.abbreviation} />
				<span className='text-gray-900 font-medium text-xs'>
					{team?.fullName ?? 'Team'}
				</span>
				<span className='text-gray-500 text-xxs ml-1 relative top-[1px]'>
					{team?.abbreviation ?? 'NBA'}
				</span>
			</div>
			<span className='text-md'>{score}</span>
		</div>
	);
};
