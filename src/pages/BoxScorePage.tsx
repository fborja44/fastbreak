import PageLayout from '../components/PageLayout/PageLayout';
import { TrophyIcon } from '@heroicons/react/24/outline';
import Tabs, { StyledTab } from '../components/Tabs/Tabs';
import Logo from '../components/Logo/Logo';
import BoxScoreTable from '../components/Table/BoxScoreTable';
import TableHeader from '../components/Table/TableHeader';
import { useLoaderData } from 'react-router-dom';
import { DataGame, DataStats, DataTeam } from '../types/data';

const StatsPage = () => {
	const { stats, game } = useLoaderData() as {
		stats: DataStats[];
		game: DataGame;
	};

	console.log(stats);
	console.log(game);

	const homeStats = stats.filter((stat) => stat.team.id === game.home_team.id);
	console.log(homeStats);
	const visitorStats = stats.filter(
		(stat) => stat.team.id === game.visitor_team.id
	);

	return (
		<PageLayout
			headerTitle='Away @ Home - Box Score'
			headerIcon={<TrophyIcon />}
			headerContent={
				<>
					<BoxScoreHeader game={game} />
					<Tabs>
						<StyledTab
						// icon={<Logo logo='NBA' className='h-6 w-3.5 object-cover' />}
						>
							Box Score
						</StyledTab>
						<StyledTab icon={<Logo className='h-5 w-5' />}>Home</StyledTab>
						<StyledTab icon={<Logo className='h-5 w-5' />}>Away</StyledTab>
					</Tabs>
				</>
			}
			showAppBar={false}
			showBackButton
		>
			<section className='w-full scrollbar-none'>
				<TableHeader
					icon={
						<Logo logo={game?.home_team.abbreviation} className='w-5 h-5' />
					}
				>
					<span className='text-blue-400'>
						{game.home_team.full_name ?? 'Home Team'}
					</span>
				</TableHeader>
				<BoxScoreTable id='home' stats={homeStats} />
				<TableHeader
					icon={
						<Logo logo={game?.visitor_team.abbreviation} className='w-5 h-5' />
					}
				>
					<span className='text-blue-400'>
						{game?.visitor_team.full_name ?? 'Away Team'}
					</span>
				</TableHeader>
				<BoxScoreTable id='visiting' stats={visitorStats} />
			</section>
		</PageLayout>
	);
};

export default StatsPage;

interface BoxScoreHeaderProps {
	game: DataGame;
}

export const BoxScoreHeader = ({ game }: BoxScoreHeaderProps) => {
	return (
		<section className='container-row justify-around w-full border-t border-neutral-200 py-1.5 px-2 bg-neutral-50'>
			<BoxScoreTeam team={game.home_team} />
			<div className='container-col gap-0.5'>
				<span className='bg-green-400 rounded text-green-50 text-xs py-0.5 px-1.5'>
					12:00
				</span>
				<span className='text-xxxs text-neutral-500'>1st QT</span>
			</div>
			<BoxScoreTeam team={game.visitor_team} reverse />
		</section>
	);
};

interface BoxScoreTeamProps {
	team: DataTeam;
	reverse?: boolean;
}

export const BoxScoreTeam = ({ team, reverse }: BoxScoreTeamProps) => {
	return (
		<div
			className={`flex ${
				reverse ? 'flex-row-reverse' : 'flex-row'
			} items-center gap-3`}
		>
			<span className='text-sm font-medium'>{team.abbreviation ?? 'NBA'}</span>
			<Logo logo={team.abbreviation ?? 'NBA'} className='h-9 w-9' />
			<span className='font-bold text-2xl'>0</span>
		</div>
	);
};
