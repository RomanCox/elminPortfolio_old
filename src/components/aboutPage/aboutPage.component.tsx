import {
	AboutPageContainerStyled,
} from './aboutPage.styled.ts';
import {Header} from '../common/header/header.component.tsx';
import {Footer} from '../common/footer/footer.component.tsx';

export const AboutPage = () => {

	return (
		<AboutPageContainerStyled>
			<Header/>
			<Footer/>
		</AboutPageContainerStyled>
	);
};