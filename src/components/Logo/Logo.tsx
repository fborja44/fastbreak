interface LogoProps {
	logo?: string;
	size?: number;
}

const Logo = ({ logo = 'NBA', size = 7 }: LogoProps) => {
	return (
		<img
			className={`h-${size} w-${size}`}
			src={`/assets/img/logos/${logo}.svg`}
			alt=''
		/>
	);
};

export default Logo;
