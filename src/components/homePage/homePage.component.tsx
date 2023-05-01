import {
	HomePageContainerStyled,
} from './homePage.styled.ts';
import {Header} from '../common/header/header.component.tsx';
import {VideoBG} from './videoBG.component.tsx';

export const EnterPage = () => {

	return (
		<HomePageContainerStyled>
			<VideoBG/>
			<Header/>
		</HomePageContainerStyled>
	);
};