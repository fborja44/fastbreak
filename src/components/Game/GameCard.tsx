import { Team } from '../../types';
import Logo from '../Logo/Logo';
import StyledLink from '../StyledLink/StyledLink';

const GameCard = () => {
	return (
		<div className='w-full flex flex-col gap-1.5 px-3 py-2.5 bg-white border border-gray rounded-xl shadow-paper'>
			<div className='container-row justify-between text-gray-500 text-xs'>
				<span>NBA Regular Season</span>
				<div>
					<span>12:00 PM</span>
				</div>
			</div>
			<TeamSlot />
			<TeamSlot />
			<div className='w-full container-row justify-between px-6 text-xs border-t border-gray-100 pt-2.5 mt-0.5'>
				<StyledLink to='box-score'>Box Score</StyledLink>
				<StyledLink to='box-score'>Betting Odds</StyledLink>
			</div>
		</div>
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
				<span className='text-gray-900 font-medium text-sm'>
					{team?.fullName ?? 'Team'}
				</span>
				<span className='text-gray-500 text-xs ml-1'>
					{team?.abbreviation ?? 'NBA'}
				</span>
			</div>
			<span className='text-md'>{score}</span>
		</div>
	);
};
