import {
    HeaderContainerStyled, LangContainerStyled, BurgerButtonContainerStyled,
    LogoContainerStyled, SocialLinksAndLangContainerStyled, SocialLinksContainerStyled,
    LangStyled, NavbarStyled, NavbarItemStyled, BottomLineStyled,
} from './header.styled.ts';
import {BurgerButton} from './burgerButton.tsx';
import {Logo} from '../logo/logo.component.tsx';
import {IconSet} from '../iconSet/iconSet.component.tsx';
import {PATH} from '../../../App.tsx';

interface HeaderPropsType {
    menuIsShow?: boolean,
    menuSwitch?: () => void,
    homePage?: boolean,
}

export const Header = ({
                           menuIsShow = false,
                           menuSwitch = () => console.log('empty function'),
                           homePage = false
                       }: HeaderPropsType) => {

    return (
        <HeaderContainerStyled $homePage={homePage}>
            {homePage
                ? <>
                    <BurgerButtonContainerStyled>
                        <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch}/>
                    </BurgerButtonContainerStyled>
                    <LogoContainerStyled $homePage>
                        <Logo variant='white' homePage/>
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
                </>
                : <>
                    <LogoContainerStyled>
                        <Logo variant='black'/>
                    </LogoContainerStyled>
                    <NavbarStyled>
                        <NavbarItemStyled to={PATH.ABOUT}>
                            About
                        </NavbarItemStyled>
                        <NavbarItemStyled to={PATH.PORTFOLIO}>
                            Portfolio
                        </NavbarItemStyled>
                        <NavbarItemStyled to={PATH.SERVICE}>
                            Service
                        </NavbarItemStyled>
                        <NavbarItemStyled to={PATH.CONTACT}>
                            Contact
                        </NavbarItemStyled>
                    </NavbarStyled>
                    <BottomLineStyled/>
                </>
            }
        </HeaderContainerStyled>
    );
};