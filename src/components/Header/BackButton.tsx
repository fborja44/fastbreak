import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<button
			className='hover:text-blue-500 text-gray-500'
			onClick={() => navigate(-1)}
		>
			<ArrowLeftIcon className='w-4 h-4' />
		</button>
	);
};

export default BackButton;
