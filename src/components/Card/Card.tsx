interface CardProps {
	children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
	return (
		<div className='w-full flex flex-col gap-1.5 px-2 py-2 bg-white border border-gray rounded-xl shadow-paper'>
			{children}{' '}
		</div>
	);
};

export default Card;
