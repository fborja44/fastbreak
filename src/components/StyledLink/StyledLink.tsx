import { Link, LinkProps } from 'react-router-dom';

interface StyledLinkProps extends LinkProps {
	external?: boolean;
	disabled?: boolean;
}

const StyledLink = ({
	to = '/',
	children,
	external,
	disabled,
}: StyledLinkProps) => {
	return (
		<Link
			className={`text-blue-500 ${
				!disabled ? 'hover:text-indigo-500' : 'opacity-60 pointer-events-none'
			}`}
			to={to}
			target={external ? '_blank' : ''}
		>
			{children}
		</Link>
	);
};

export default StyledLink;
