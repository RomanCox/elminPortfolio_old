import {useCallback, useState} from 'react';
import {
	HomePageContainerStyled, ContentContainerStyled, TitleContainer,
	ServicesListContainer, ButtonStyled,
} from './homePage.styled.ts';
import {Header} from '../common/header/header.component.tsx';
import {VideoBG} from './videoBG.component.tsx';
import {Title} from '../common/title/title.component.tsx';
import {Footer} from '../common/footer/footer.component.tsx';
import {BurgerMenu} from '../common/burgerMenu/burgerMenu.component.tsx';


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
			<BurgerMenu menuIsShow={menuIsShow}/>
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
			<Footer homePage/>
		</HomePageContainerStyled>
	);
};