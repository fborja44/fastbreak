import PageLayout from '../components/PageLayout/PageLayout';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Dropdown from '../components/Dropdown/Dropdown';
import { formatDate } from '../utils/date';
import GameCard from '../components/Game/GameCard';
import { HeaderRow } from '../components/Header/Header';
import CardList from '../components/Card/CardList';
import TeamTokens from '../components/Token/TeamTokens';

const HomePage = () => {
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
				{new Array(6).fill(null).map(() => (
					<GameCard />
				))}
			</CardList>
		</PageLayout>
	);
};

export default HomePage;
