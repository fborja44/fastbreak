import { Team } from '../../types';
import { DataGame, DataTeam } from '../../types/data';
import { formatTime, isGameStarted } from '../../utils/date';
import { getGameTime } from '../../utils/string';
import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import StyledLink from '../StyledLink/StyledLink';

interface GameCardProps {
	game: DataGame;
}

const GameCard = ({ game }: GameCardProps) => {
	const isStarted = !isGameStarted(game.status);
	const timeDisplay = getGameTime(game);

	return (
		<Card>
			<div className='container-row justify-between text-gray-500 text-xxs'>
				<span>
					{!game.postseason ? 'NBA Regular Season' : 'NBA Post Season'}
				</span>
				{
					<div>
						{!isStarted ? (
							<span>{formatTime(new Date(game.status))}</span>
						) : game.status !== 'Final' ? (
							/* TODO: Period Tokens */
							<span className='bg-green-400 border border-green-200 text-green-50 px-1.5 py-[2px] rounded-md text-xxxs'>
								{timeDisplay}{' '}
								{/* TODO: Tick time down (by best case, ignore time stoppages unless refresh) */}
							</span>
						) : (
							<span className='bg-gray-700 border border-gray-300 text-gray-300 px-1.5 py-[2px] rounded-md text-xxxs'>
								{timeDisplay}{' '}
								{/* TODO: Tick time down (by best case, ignore time stoppages unless refresh) */}
							</span>
						)}
					</div>
				}
			</div>
			<TeamSlot
				team={game.home_team}
				score={isStarted ? game.home_team_score : undefined}
			/>
			<TeamSlot
				team={game.visitor_team}
				score={isStarted ? game.visitor_team_score : undefined}
			/>
			<div className='w-full container-row justify-between px-6 text-xxs border-t border-gray-100 pt-2 mt-0.5'>
				<StyledLink
					to={`/box-score/${game.id}`}
					disabled={timeDisplay !== 'Final'}
				>
					Box Score
				</StyledLink>
				<StyledLink to='/box-score' disabled>
					Betting Odds
				</StyledLink>
			</div>
		</Card>
	);
};

export default GameCard;

interface TeamSlotProps {
	team?: Team | DataTeam;
	score?: string | number;
}

const TeamSlot = ({ team, score }: TeamSlotProps) => {
	return (
		<div className='container-row justify-between w-full'>
			<div className='container-row gap-1'>
				<Logo logo={team?.abbreviation} />
				<span className='text-gray-900 font-medium text-xs'>
					{team?.full_name ?? 'Team'}
				</span>
				<span className='text-gray-500 text-xxs ml-1 relative top-[1px]'>
					{team?.abbreviation ?? 'NBA'}
				</span>
			</div>
			<span className={`${score ? 'text-[13px]' : 'text-base'}`}>
				{score ?? '-'}
			</span>
			{/* TODO: Show team record if game has not yet started */}
		</div>
	);
};
