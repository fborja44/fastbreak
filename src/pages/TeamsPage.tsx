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
			headerIcon={<Logo size={5} />}
			headerContent={
				<>
					<HeaderRow>
						<Searchbar placeholder='Search for a team...' />
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
