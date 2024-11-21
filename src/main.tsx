import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import StandingsPage from './pages/StandingsPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Layout from './pages/Layout.tsx';
import TeamsPage from './pages/TeamsPage.tsx';
import LeadersPage from './pages/LeadersPage.tsx';
import StatsPage from './pages/StatsPage.tsx';
import BoxScorePage from './pages/BoxScorePage.tsx';
import { fetchData } from './api/index.ts';
import { apiDate } from './utils/date.ts';

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		errorElement: (
			<Layout>
				<ErrorPage />
			</Layout>
		),
		children: [
			{
				path: '/',
				element: <HomePage />,
				loader: async () =>
					await fetchData('games', {
						'dates[]': apiDate(new Date()),
					}),
			},
			{ path: '/standings', element: <StandingsPage /> },
			{ path: '/teams', element: <TeamsPage /> },
			{ path: '/stats', element: <StatsPage /> },
			{ path: '/leaders', element: <LeadersPage /> },
			{
				path: '/box-score/:id',
				element: <BoxScorePage />,
				loader: async ({ params }) => {
					const { id } = params;
					if (!id) return [];
					return {
						stats: await fetchData('stats', {
							'game_ids[]': id,
							per_page: '40',
						}),
						game: await fetchData(`games/${id}`),
					};
				},
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
