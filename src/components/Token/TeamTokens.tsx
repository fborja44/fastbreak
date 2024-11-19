import { teams } from '../../common/teams';
import { HeaderRow } from '../Header/Header';
import Token from './Token';

const TeamTokens = () => {
	return (
		<HeaderRow>
			<Token icon={<img src='/assets/img/emojis/star-shine.svg' alt='' />}>
				My Teams
			</Token>
			<Token icon={<img src='/assets/img/logos/EAST.svg' alt='' />}>East</Token>
			<Token icon={<img src='/assets/img/logos/WEST.svg' alt='' />}>West</Token>
			{teams
				.sort((a, b) => {
					return a.name.localeCompare(b.name);
				})
				.map((team) => (
					<Token
						icon={
							<img src={`/assets/img/logos/${team.abbreviation}.svg`} alt='' />
						}
					>
						{team.name}
					</Token>
				))}
		</HeaderRow>
	);
};

export default TeamTokens;
