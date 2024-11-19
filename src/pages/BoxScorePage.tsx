import PageLayout from '../components/PageLayout/PageLayout';
import { TrophyIcon } from '@heroicons/react/24/outline';
import Tabs, { StyledTab } from '../components/Tabs/Tabs';
import Logo from '../components/Logo/Logo';
import BoxScoreTable from '../components/Table/BoxScoreTable';
import TableHeader from '../components/Table/TableHeader';

const StatsPage = () => {
	return (
		<PageLayout
			headerTitle='Away @ Home - Box Score'
			headerIcon={<TrophyIcon />}
			headerContent={
				<>
					<BoxScoreHeader />
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
				<TableHeader icon={<Logo logo='NBA' className='w-5 h-5' />}>
					<span className='text-blue-500'>Home Team</span>
				</TableHeader>
				<BoxScoreTable />
				<TableHeader icon={<Logo logo='NBA' className='w-5 h-5' />}>
					<span className='text-blue-500'>Away Team</span>
				</TableHeader>
				<BoxScoreTable />
			</section>
		</PageLayout>
	);
};

export default StatsPage;

export const BoxScoreHeader = () => {
	return (
		<section className='container-row justify-around w-full border-t border-gray-200 py-1.5 px-2 bg-gray-50'>
			<BoxScoreTeam />
			<div className='container-col gap-0.5'>
				<span className='bg-green-400 rounded text-green-50 text-xs py-0.5 px-1.5'>
					12:00
				</span>
				<span className='text-xxxs text-gray-500'>1st QT</span>
			</div>
			<BoxScoreTeam reverse />
		</section>
	);
};

interface BoxScoreTeamProps {
	reverse?: boolean;
}

export const BoxScoreTeam = ({ reverse }: BoxScoreTeamProps) => {
	return (
		<div
			className={`flex ${
				reverse ? 'flex-row-reverse' : 'flex-row'
			} items-center gap-3`}
		>
			<span className='text-sm font-medium'>NBA</span>
			<Logo logo={'NBA'} className='h-9 w-9' />
			<span className='font-bold text-2xl'>0</span>
		</div>
	);
};
