import {useEffect, useState} from 'react';
import {useWindowSize} from '../../../hooks/useWindowSize.ts';

import {BurgerButton} from './BurgerButton.tsx';
import {Logo} from '../logo/Logo.component.tsx';
import {IconSet} from '../iconSet/IconSet.component.tsx';
import {PATH} from '../../../App.tsx';

import {
    BottomLineStyled,
    HeaderContainerStyled,
    LangContainerStyled,
    LangStyled,
    LogoContainerStyled,
    NavbarItemStyled,
    NavbarStyled,
    SeparatorStyled,
    SocialLinksAndLangContainerStyled,
    SocialLinksContainerStyled,
} from './Header.styled.ts';

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
    const [isShowBurgerButton, setIsShowBurgerButton] = useState<boolean>(false);

    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width && windowSize.width >= 900) {
            setIsShowBurgerButton(false);
        }
        if (windowSize.width && windowSize.width < 900) {
            setIsShowBurgerButton(true);
        }
    }, [windowSize.width])

    return (
        <HeaderContainerStyled $homePage={homePage}>
            {homePage
                ? <>
                    <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage}/>
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
                    {isShowBurgerButton
                        ? <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage}/>
                        : <NavbarStyled>
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
                        </NavbarStyled>}
                    <BottomLineStyled/>
                </>
            }
        </HeaderContainerStyled>
    );
};