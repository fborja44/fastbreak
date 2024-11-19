import PageLayout from '../components/PageLayout/PageLayout';
import { TrophyIcon } from '@heroicons/react/24/outline';
import TeamTokens from '../components/Token/TeamTokens';
import { HeaderRow } from '../components/Header/Header';
import Searchbar from '../components/Searchbar/Searchbar';
import StatsTable from '../components/Table/StatsTable';

const StatsPage = () => {
	return (
		<PageLayout
			headerTitle='2024-2025 League Stats'
			headerIcon={<TrophyIcon />}
			headerContent={
				<>
					<HeaderRow>
						<Searchbar placeholder='Search for a player...' />
					</HeaderRow>
					<TeamTokens />
					<span className='pb-0.5'></span>
				</>
			}
		>
			<StatsTable />
		</PageLayout>
	);
};

export default StatsPage;
