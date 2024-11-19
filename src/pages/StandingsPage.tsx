import PageLayout from '../components/PageLayout/PageLayout';
import { TrophyIcon } from '@heroicons/react/24/outline';
import Tabs, { StyledTab } from '../components/Tabs/Tabs';
import Logo from '../components/Logo/Logo';
import StandingsTable from '../components/Table/StandingsTable';

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
				<div className='container-row w-full h-full pt-2 pb-1.5 px-1.5 gap-1 text-gray-600 bg-white uppercase text-xxs border-b border-gray-200'>
					<span className='w-6 h-6'>
						<Logo logo='EAST' />
					</span>
					<span className='text-gray-500'>Eastern Conference</span>
				</div>
				<div className='overflow-x-auto scrollbar-hide'>
					<StandingsTable />
				</div>
				<div className='container-row w-full h-full pt-2 pb-1.5 px-1.5 gap-1 text-gray-600 bg-white uppercase text-xxs border-b border-gray-200'>
					<span className='w-6 h-6'>
						<Logo logo='WEST' />
					</span>
					<span className='text-gray-500'>Western Conference</span>
				</div>
				<div className='overflow-x-auto scrollbar-hide'>
					<StandingsTable />
				</div>
			</section>
		</PageLayout>
	);
};

export default StandingsPage;
