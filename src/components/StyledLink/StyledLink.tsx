import { Link, LinkProps } from 'react-router-dom';

interface StyledLinkProps extends LinkProps {
	external?: boolean;
}

const StyledLink = ({ to = '/', children }: StyledLinkProps) => {
	return (
		<Link
			className='text-blue-500 hover:text-indigo-500'
			to={to}
			target={external ? '_blank' : ''}
		>
			{children}
		</Link>
	);
};

export default StyledLink;
