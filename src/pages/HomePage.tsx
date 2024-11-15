import PageLayout from '../components/PageLayout/PageLayout';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Token from '../components/Token/Token';
import { teams } from '../common/teams';
import Dropdown from '../components/Dropdown/Dropdown';
import { formatDate } from '../utils/date';
import GameCard from '../components/Game/GameCard';
import { HeaderRow } from '../components/Header/Header';

const HomePage = () => {
	return (
		<PageLayout
			headerTitle='Game Feed'
			headerIcon={<CalendarDaysIcon />}
			headerContent={
				<>
					<HeaderRow>
						<Token
							icon={<img src='/assets/img/emojis/star-shine.svg' alt='' />}
						>
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
					</HeaderRow>
					<HeaderRow>
						<Dropdown>
							<option>Today - {formatDate(new Date())}</option>
						</Dropdown>
					</HeaderRow>
				</>
			}
			headerRounded
		>
			<div className='container-col gap-1.5 p-1.5'>
				{new Array(6).fill(null).map(() => (
					<GameCard />
				))}
			</div>
		</PageLayout>
	);
};

export default HomePage;
