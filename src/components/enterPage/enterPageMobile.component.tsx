import {
    EnterPageContainerStyled,
    PhotoContainerStyled,
    PhotoStyled,
    ContentContainerStyled,
    MobileLogoContainer,
    LogoContainerStyled,
    NameContainerStyled,
    NameStyled,
    DescriptionContainerStyled,
    ButtonContainerStyled, ButtonStyled,
    ButtonDescriptionContainerStyled,
} from './enterPage.styled.ts';
import avatar from '../../assets/images/avatar.webp';
import {PATH} from '../../App.tsx';
import {Logo} from "../common/logo/logo.component.tsx";

export const EnterPageMobile = () => {

    return (
        <EnterPageContainerStyled>
            <MobileLogoContainer>
                <LogoContainerStyled>
                    <Logo variant='black'/>
                </LogoContainerStyled>
            </MobileLogoContainer>
            <PhotoContainerStyled>
                <PhotoStyled src={avatar}/>
            </PhotoContainerStyled>
            <ContentContainerStyled>
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