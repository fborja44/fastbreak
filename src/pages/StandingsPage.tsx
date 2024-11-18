import PageLayout from '../components/PageLayout/PageLayout';
import { TrophyIcon } from '@heroicons/react/24/outline';
import Tabs, { StyledTab } from '../components/Tabs/Tabs';
import Logo from '../components/Logo/Logo';
import ScrollableTable from '../components/Table/Table';

const StandingsPage = () => {
	return (
		<PageLayout
			headerTitle='2024-2025 League Standings'
			headerIcon={<TrophyIcon />}
			headerContent={
				<Tabs>
					<StyledTab icon={<Logo logo='NBA' />}>League</StyledTab>
					<StyledTab icon={<Logo logo='EAST' />}>East Conf.</StyledTab>
					<StyledTab icon={<Logo logo='WEST' />}>West Conf.</StyledTab>
				</Tabs>
			}
		>
			<section className='w-full scrollbar-none'>
				<div className='container-row w-full h-full pt-2.5 pb-1.5 px-1.5 gap-1 text-gray-600 bg-white uppercase text-xs border-b border-gray-200'>
					<span className='w-6 h-6'>
						<Logo logo='EAST' />
					</span>
					<span>Eastern Conference</span>
				</div>
				<div className='overflow-x-auto scrollbar-hide'>
					<ScrollableTable />
				</div>
				<div className='container-row w-full h-full pt-2.5 pb-1.5 px-1.5 gap-1 text-gray-600 bg-white uppercase text-xs border-b border-gray-200'>
					<span className='w-6 h-6'>
						<Logo logo='WEST' />
					</span>
					<span>Western Conference</span>
				</div>
				<div className='overflow-x-auto scrollbar-hide'>
					<ScrollableTable />
				</div>
			</section>
		</PageLayout>
	);
};

export default StandingsPage;
