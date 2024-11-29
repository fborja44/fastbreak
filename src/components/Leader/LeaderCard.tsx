import Card from '../Card/Card';
import Logo from '../Logo/Logo';

interface LeaderCardProps {
	number: number;
}

const LeaderCard = ({ number }: LeaderCardProps) => {
	return (
		<Card>
			<div className='container-row justify-between'>
				<div className='container-row'>
					<span className='w-6 h-6 container-center text-neutral-400 text-xl italic font-semibold'>
						{number}
					</span>
					<Logo className='h-8 w-8' />
					<div className='flex flex-col justify-between h-full'>
						<div className='container-row gap-1.5'>
							<span className='text-sm font-semibold'>Player</span>
							<span className='text-xxxs text-neutral-500'>POS</span>
						</div>
						<span className='text-xxs text-blue-400'>Team Name</span>
					</div>
				</div>
				<div className='container-row gap-1'>
					<span className='font-semibold'>0</span>
					<span className='text-xxs text-neutral-500 uppercase'>val</span>
				</div>
			</div>
		</Card>
	);
};

export default LeaderCard;
