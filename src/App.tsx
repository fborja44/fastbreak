import { Outlet, useLocation } from 'react-router-dom';
import './css/tailwind.css';
import Layout from './pages/Layout';

const App = () => {
	const { pathname } = useLocation();

	return (
		<Layout>
			<Outlet key={pathname} />
		</Layout>
	);
};

export default App;
