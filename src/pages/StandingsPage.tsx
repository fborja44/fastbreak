import PageLayout from '../components/PageLayout/PageLayout';
import { TrophyIcon } from '@heroicons/react/24/outline';
import Tabs, { StyledTab } from '../components/Tabs/Tabs';
import Logo from '../components/Logo/Logo';
import StandingsTable from '../components/Table/StandingsTable';
import TableHeader from '../components/Table/TableHeader';

const StandingsPage = () => {
	return (
		<PageLayout
			headerTitle='2024-2025 League Standings'
			headerIcon={<TrophyIcon />}
			headerContent={
				<Tabs>
					<StyledTab
						icon={<Logo logo='NBA' className='h-6 w-3.5 object-cover' />}
					>
						League
					</StyledTab>
					<StyledTab icon={<Logo logo='EAST' className='h-5 w-5' />}>
						East Conf.
					</StyledTab>
					<StyledTab icon={<Logo logo='WEST' className='h-5 w-5' />}>
						West Conf.
					</StyledTab>
				</Tabs>
			}
		>
			<section className='w-full scrollbar-none'>
				<TableHeader icon={<Logo logo='EAST' className='w-5 h-5' />}>
					Eastern Conference
				</TableHeader>
				<StandingsTable />
				<TableHeader icon={<Logo logo='WEST' className='w-5 h-5' />}>
					Western Conference
				</TableHeader>
				<StandingsTable />
			</section>
		</PageLayout>
	);
};

export default StandingsPage;
