import PageLayout from '../components/PageLayout/PageLayout';
import {
	CalendarDaysIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { apiDate, formatDate, getDayAfter, getDayBefore } from '../utils/date';
import GameCard from '../components/Game/GameCard';
import { HeaderRow } from '../components/Header/Header';
import CardList from '../components/Card/CardList';
import TeamTokens from '../components/Token/TeamTokens';
import { useLoaderData } from 'react-router-dom';
import { DataGame } from '../types/data';
import { useEffect, useState } from 'react';
import { fetchData } from '../api';

const HomePage = () => {
	const loaderData = useLoaderData() as DataGame[];

	const [data, setData] = useState<DataGame[]>(loaderData);
	const [date, setDate] = useState<Date>(new Date());

	console.log(data);

	useEffect(() => {
		const fetch = async () => {
			const newData = (await fetchData('games', {
				'dates[]': apiDate(date),
			})) as DataGame[];
			setData(newData);
		};
		fetch();
	}, [date]);

	return (
		<PageLayout
			headerTitle='Game Feed'
			headerIcon={<CalendarDaysIcon />}
			headerContent={
				<>
					<TeamTokens />
					<HeaderRow>
						<div className='w-full container-row justify-between mt-0.5'>
							<button
								className='hover:text-blue-400'
								onClick={() => setDate(getDayBefore(date))}
							>
								<ChevronLeftIcon className='h-4 w-4' />
							</button>
							<span className='text-sm font-medium'>{formatDate(date)}</span>
							<button
								className='hover:text-blue-400'
								onClick={() => setDate(getDayAfter(date))}
							>
								<ChevronRightIcon className='h-4 w-4' />
							</button>
						</div>
					</HeaderRow>
				</>
			}
			headerRounded
		>
			<CardList>
				{data.map((game, i) => (
					<GameCard key={i} game={game} />
				))}
			</CardList>
		</PageLayout>
	);
};

export default HomePage;
