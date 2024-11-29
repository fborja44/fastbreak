interface CardProps {
	children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
	return (
		<div className='w-full flex flex-col gap-1.5 px-2 py-2 bg-card border border-neutral-700 rounded-xl shadow-paper'>
			{children}{' '}
		</div>
	);
};

export default Card;
