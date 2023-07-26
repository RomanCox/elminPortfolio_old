import {useCallback, useState} from 'react';
import {
	HomePageContainerStyled, ContentContainerStyled, TitleContainer,
	ServicesListContainer, ButtonStyled,
} from './HomePage.styled.ts';
import {Header} from '../common/header/Header.component.tsx';
import {VideoBG} from './VideoBG.component.tsx';
import {Title} from '../common/title/Title.component.tsx';
import {Footer} from '../common/footer/Footer.component.tsx';
import {BurgerMenu} from '../common/burgerMenu/BurgerMenu.component.tsx';

export const HomePage = () => {
	const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

	const menuSwitch = () => {
		setMenuIsShow(!menuIsShow);
	}

	const onClickHandler = useCallback(() => console.log('click'), [])

	return (
		<HomePageContainerStyled>
			<VideoBG/>
			<Header menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage/>
			<BurgerMenu menuIsShow={menuIsShow} homePage/>
			<ContentContainerStyled>
				<TitleContainer>
					<Title text='Elmin Karaev' variant='h2' color='#fff'/>
				</TitleContainer>
				<ServicesListContainer>
					3D Modeling | visualization | animation | interactive | VR & AR
				</ServicesListContainer>
				<ButtonStyled
					onClick={onClickHandler}
					variant='contained'
				>
					Contact me
				</ButtonStyled>
			</ContentContainerStyled>
			<Footer $homePage/>
		</HomePageContainerStyled>
	);
};