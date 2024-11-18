import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import StandingsPage from './pages/StandingsPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Layout from './pages/Layout.tsx';
import TeamsPage from './pages/TeamsPage.tsx';

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
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
