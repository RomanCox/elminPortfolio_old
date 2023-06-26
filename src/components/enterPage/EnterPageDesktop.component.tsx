import {
	EnterPageContainerStyled,
	PhotoContainerStyled,
	PhotoStyled,
	ContentContainerStyled,
	LogoContainerStyled,
	NameContainerStyled,
	NameStyled,
	DescriptionContainerStyled,
	ButtonContainerStyled, ButtonStyled,
	ButtonDescriptionContainerStyled,
} from './EnterPage.styled.ts';
import avatar from '../../assets/images/photo/avatar.webp';
import {PATH} from '../../App.tsx';
import {Logo} from '../common/logo/Logo.component.tsx';

export const EnterPageDesktop = () => {

	return (
		<EnterPageContainerStyled>
			<PhotoContainerStyled>
				<PhotoStyled src={avatar}/>
			</PhotoContainerStyled>
			<ContentContainerStyled>
				<LogoContainerStyled>
					<Logo variant='black' size='large'/>
				</LogoContainerStyled>
				<NameContainerStyled>
					<NameStyled>Elmin Karaev</NameStyled>
					<DescriptionContainerStyled>
                        My name is Elmin, and I am a CG Artist from Minsk. I specialize in 3D graphics
					</DescriptionContainerStyled>
				</NameContainerStyled>
				<ButtonContainerStyled>
					<ButtonStyled to={PATH.HOME}>Enter</ButtonStyled>
					<ButtonDescriptionContainerStyled>
                        Press Enter to go to my site
					</ButtonDescriptionContainerStyled>
				</ButtonContainerStyled>
			</ContentContainerStyled>
		</EnterPageContainerStyled>
	);
};