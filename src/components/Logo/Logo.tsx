interface LogoProps {
	logo?: string;
}

const Logo = ({ logo = 'NBA' }: LogoProps) => {
	return <img src={`/assets/img/logos/${logo}.svg`} alt='' />;
};

export default Logo;
