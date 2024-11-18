import PageLayout from '../components/PageLayout/PageLayout';
import { HeaderRow } from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Tabs, { StyledTab } from '../components/Tabs/Tabs';
import CardList from '../components/Card/CardList';
import { UsersIcon } from '@heroicons/react/24/outline';
import Dropdown from '../components/Dropdown/Dropdown';
import LeaderCard from '../components/Leader/LeaderCard';

const LeadersPage = () => {
	return (
		<PageLayout
			headerTitle='League Leaders'
			headerIcon={<UsersIcon />}
			headerContent={
				<>
					<HeaderRow>
						<Dropdown>
							<option>All Stats</option>
						</Dropdown>
					</HeaderRow>
					<Tabs>
						<StyledTab icon={<Logo logo='NBA' size={5} />}>League</StyledTab>
						<StyledTab icon={<Logo logo='EAST' size={5} />}>
							East Conf.
						</StyledTab>
						<StyledTab icon={<Logo logo='WEST' size={5} />}>
							West Conf.
						</StyledTab>
					</Tabs>
				</>
			}
		>
			<StatSection stat='Points' />
			<StatSection stat='Assists' />
		</PageLayout>
	);
};

export default LeadersPage;

interface StatSectionProps {
	stat: string;
}

const StatSection = ({ stat }: StatSectionProps) => {
	return (
		<div className='mt-1'>
			<CardList>
				<span className='text-[11px] uppercase text-gray-500'>{stat}</span>
				{new Array(5).fill(null).map((_val, i) => (
					<LeaderCard number={i + 1} />
				))}
			</CardList>
		</div>
	);
};