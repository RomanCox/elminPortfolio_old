import {
    MenuContainerStyled,
    NavbarStyled,
    NavbarItemStyled,
} from './BurgerMenu.styled.ts';
import {PATH} from '../../../App.tsx';

interface BurgerMenuPropsType {
    menuIsShow: boolean,
}

export const BurgerMenu = ({menuIsShow}: BurgerMenuPropsType) =>
    <MenuContainerStyled $menuIsShow={menuIsShow}>
        <NavbarStyled>
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
    </MenuContainerStyled>
