interface LogoProps {
	logo?: string;
	className?: string;
}

const Logo = ({ logo = 'NBA', className = 'h-6 w-6' }: LogoProps) => {
	return (
		<img className={className} src={`/assets/img/logos/${logo}.svg`} alt='' />
	);
};

export default Logo;
