interface CardListProps {
	children?: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
	return <div className='flex flex-col gap-1.5 p-1.5'>{children} </div>;
};

export default CardList;
