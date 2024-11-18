import PageLayout from '../components/PageLayout/PageLayout';

const ErrorPage = () => {
	return (
		<PageLayout headerTitle='Error' headerRounded>
			<div className='w-full h-full container-center pb-16 text-sm'>
				Something Went Wrong
			</div>
		</PageLayout>
	);
};

export default ErrorPage;
