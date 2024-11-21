import PageLayout from '../components/PageLayout/PageLayout';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Dropdown from '../components/Dropdown/Dropdown';
import { formatDate } from '../utils/date';
import GameCard from '../components/Game/GameCard';
import { HeaderRow } from '../components/Header/Header';
import CardList from '../components/Card/CardList';
import TeamTokens from '../components/Token/TeamTokens';
import { useLoaderData } from 'react-router-dom';
import { DataGame } from '../types/data';

const HomePage = () => {
	const data = useLoaderData() as DataGame[];

	return (
		<PageLayout
			headerTitle='Game Feed'
			headerIcon={<CalendarDaysIcon />}
			headerContent={
				<>
					<TeamTokens />
					<HeaderRow>
						<Dropdown>
							<option>Today - {formatDate(new Date())}</option>
						</Dropdown>
					</HeaderRow>
				</>
			}
			headerRounded
		>
			<CardList>
				{data.map((game, i) => (
					<GameCard key={i} game={game} />
				))}
			</CardList>
		</PageLayout>
	);
};

export default HomePage;
