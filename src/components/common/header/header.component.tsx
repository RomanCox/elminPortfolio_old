import {
    HeaderContainerStyled, LangContainerStyled,
    LogoContainerStyled, SocialLinksAndLangContainerStyled,
    SocialLinkStyled, SocialLinksContainerStyled, LangStyled,
} from './header.styled.ts';
import {BurgerButton} from './burgerButton.tsx';
import {Logo} from "../logo/logo.component.tsx";

export const Header = () => {

    return (
        <HeaderContainerStyled>
            <BurgerButton/>
            <LogoContainerStyled>
                <Logo variant='white'/>
            </LogoContainerStyled>
            <SocialLinksAndLangContainerStyled>
                <SocialLinksContainerStyled>
                    <SocialLinkStyled>in</SocialLinkStyled>
                    <SocialLinkStyled>tg</SocialLinkStyled>
                    <SocialLinkStyled>ig</SocialLinkStyled>
                    <SocialLinkStyled>Be</SocialLinkStyled>
                </SocialLinksContainerStyled>
                <LangContainerStyled>
                    <LangStyled>RU</LangStyled>
                    <LangStyled>EN</LangStyled>
                </LangContainerStyled>
            </SocialLinksAndLangContainerStyled>
        </HeaderContainerStyled>
    );
};