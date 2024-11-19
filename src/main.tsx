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
			{ path: '/', element: <HomePage /> },
			{ path: '/standings', element: <StandingsPage /> },
			{ path: '/teams', element: <TeamsPage /> },
			{ path: '/stats', element: <StatsPage /> },
			{ path: '/leaders', element: <LeadersPage /> },
			{ path: '/box-score', element: <BoxScorePage /> },
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
