import {
    HeaderContainerStyled, LangContainerStyled,
    BurgerButtonContainerStyled, LogoContainerStyled,
    SocialLinksAndLangContainerStyled,
    SocialLinksContainerStyled, LangStyled,
} from './header.styled.ts';
import {BurgerButton} from './burgerButton.tsx';
import {Logo} from '../logo/logo.component.tsx';
import {IconSet} from '../iconSet/iconSet.component.tsx';

export const Header = () => {

    return (
        <HeaderContainerStyled>
            <BurgerButtonContainerStyled>
                <BurgerButton/>
            </BurgerButtonContainerStyled>
            <LogoContainerStyled>
                <Logo variant='white'/>
            </LogoContainerStyled>
            <SocialLinksAndLangContainerStyled>
                <SocialLinksContainerStyled>
                    <IconSet/>
                </SocialLinksContainerStyled>
                <LangContainerStyled>
                    <LangStyled>RU</LangStyled>
                    <LangStyled>EN</LangStyled>
                </LangContainerStyled>
            </SocialLinksAndLangContainerStyled>
        </HeaderContainerStyled>
    );
};