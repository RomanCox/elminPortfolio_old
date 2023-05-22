import {
    MenuContainerStyled,
    NavbarStyled,
    NavbarItemStyled,
} from './burgerMenu.styled.ts';
import {PATH} from '../../../App.tsx';

interface BurgerMenuPropsType {
    menuIsShow: boolean,
}

export const BurgerMenu = ({menuIsShow}: BurgerMenuPropsType) => {

    return (
        <MenuContainerStyled menuIsShow={menuIsShow}>
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
        </MenuContainerStyled>
    );
};