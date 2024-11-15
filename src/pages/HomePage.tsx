import Header from '../components/Header/Header';
import PageLayout from '../components/PageLayout/PageLayout';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Token from '../components/Token/Token';
import { teams } from '../common/teams';
import Dropdown from '../components/Dropdown/Dropdown';
import { formatDate } from '../utils/date';
import Footer from '../components/Footer/Footer';
import GameCard from '../components/Game/GameCard';

const HomePage = () => {
	return (
		<PageLayout>
			<Header title='Game Feed' icon={<CalendarDaysIcon />}>
				<div className='container-row gap-2.5'>
					<Token icon={<img src='/assets/img/emojis/star-shine.svg' alt='' />}>
						My Teams
					</Token>
					<Token icon={<img src='/assets/img/logos/EAST.svg' alt='' />}>
						EAST
					</Token>
					<Token icon={<img src='/assets/img/logos/WEST.svg' alt='' />}>
						WEST
					</Token>
					{teams
						.sort((a, b) => {
							return a.name.localeCompare(b.name);
						})
						.map((team) => (
							<Token
								icon={
									<img
										src={`/assets/img/logos/${team.abbreviation}.svg`}
										alt=''
									/>
								}
							>
								{team.name}
							</Token>
						))}
				</div>
				<Dropdown>
					<option>Today - {formatDate(new Date())}</option>
				</Dropdown>
			</Header>
			<main className='flex-auto self-stretch p-1.5 container-col gap-1.5 overflow-y-auto min-h-2'>
				{new Array(6).fill(null).map(() => (
					<GameCard />
				))}
			</main>
			<Footer />
		</PageLayout>
	);
};

export default HomePage;
