import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [{ path: '/', element: <HomePage /> }],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
