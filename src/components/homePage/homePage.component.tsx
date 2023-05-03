import {
	HomePageContainerStyled,
	ContentContainerStyled,
	TitleContainer,
	ServicesListContainer,
	ButtonContainer,
} from './homePage.styled.ts';
import {Header} from '../common/header/header.component.tsx';
import {VideoBG} from './videoBG.component.tsx';
import {Title} from '../common/title/title.component.tsx';
import {Button} from '../common/button/button.component.tsx';
import {Footer} from '../common/footer/footer.component.tsx';

export const EnterPage = () => {

	return (
		<HomePageContainerStyled>
			<VideoBG/>
			<Header/>
			<ContentContainerStyled>
				<TitleContainer>
					<Title text='Elmin Karaev' variant='h2' color='white'/>
				</TitleContainer>
				<ServicesListContainer>
					3D Modeling | visualization | animation | interactive | VR & AR
				</ServicesListContainer>
				<ButtonContainer>
					<Button text='Contact me'/>
				</ButtonContainer>
			</ContentContainerStyled>
			<Footer/>
		</HomePageContainerStyled>
	);
};