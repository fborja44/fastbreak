import PageLayout from '../components/PageLayout/PageLayout';
import { HeaderRow } from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Searchbar from '../components/Searchbar/Searchbar';
import Tabs, { StyledTab } from '../components/Tabs/Tabs';
import CardList from '../components/Card/CardList';
import TeamCard from '../components/Team/TeamCard';
import { divisions, teams } from '../common/teams';
import { Division } from '../types';

const TeamsPage = () => {
	return (
		<PageLayout
			headerTitle='League Teams'
			headerIcon={<Logo />}
			headerContent={
				<>
					<HeaderRow>
						<Searchbar placeholder='Search for a team...' />
					</HeaderRow>
					<Tabs>
						<StyledTab icon={<Logo logo='NBA' />}>League</StyledTab>
						<StyledTab icon={<Logo logo='EAST' />}>East Conf.</StyledTab>
						<StyledTab icon={<Logo logo='WEST' />}>West Conf.</StyledTab>
					</Tabs>
				</>
			}
		>
			{divisions.map((division) => (
				<DivisionSection division={division} />
			))}
		</PageLayout>
	);
};

export default TeamsPage;

interface DivisionSectionProps {
	division: Division;
}

const DivisionSection = ({ division }: DivisionSectionProps) => {
	return (
		<div className='mt-1'>
			<CardList>
				<span className='text-[11px] uppercase text-gray-500'>{division}</span>
				{teams
					.filter((team) => team.division === division)
					.map((team) => (
						<TeamCard team={team} />
					))}
			</CardList>
		</div>
	);
};
