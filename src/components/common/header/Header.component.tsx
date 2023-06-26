import {
    HeaderContainerStyled, LangContainerStyled, BurgerButtonContainerStyled,
    LogoContainerStyled, SocialLinksAndLangContainerStyled, SocialLinksContainerStyled,
    LangStyled, SeparatorStyled, NavbarStyled, NavbarItemStyled, BottomLineStyled,
} from './Header.styled.ts';
import {BurgerButton} from './BurgerButton.tsx';
import {Logo} from '../logo/Logo.component.tsx';
import {IconSet} from '../iconSet/IconSet.component.tsx';
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
                            <SeparatorStyled/>
                            <LangStyled>EN</LangStyled>
                        </LangContainerStyled>
                    </SocialLinksAndLangContainerStyled>
                </>
                : <>
                    <LogoContainerStyled>
                        <Logo variant='black'/>
                    </LogoContainerStyled>
                    <NavbarStyled>
                        <NavbarItemStyled to={PATH.HOME}>
                            Home
                        </NavbarItemStyled>
                        <NavbarItemStyled to={PATH.ABOUT}>
                            About
                        </NavbarItemStyled>
                        <NavbarItemStyled to={PATH.PORTFOLIO}>
                            Portfolio
                        </NavbarItemStyled>
                        <NavbarItemStyled to={PATH.SERVICES}>
                            Services
                        </NavbarItemStyled>
                        <NavbarItemStyled to={PATH.CONTACTS}>
                            Contacts
                        </NavbarItemStyled>
                    </NavbarStyled>
                    <BottomLineStyled/>
                </>
            }
        </HeaderContainerStyled>
    );
};