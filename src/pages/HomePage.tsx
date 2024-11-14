import Header from '../components/Header/Header';
import PageLayout from '../components/PageLayout/PageLayout';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
	return (
		<PageLayout>
			<Header title='Game Feed' icon={<CalendarDaysIcon />}></Header>
		</PageLayout>
	);
};

export default HomePage;
