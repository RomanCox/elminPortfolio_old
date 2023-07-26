import {BarsStyled, BurgerButtonStyled} from './Header.styled.ts';

export interface BurgerStyledPropsType {
    $isBurgerMenuOpened: boolean,
    $homePage: boolean,
}

interface BurgerButtonPropsType {
    menuIsShow: boolean,
    homePage: boolean,
    menuSwitch: () => void,
}

export const BurgerButton = ({menuIsShow, menuSwitch, homePage}: BurgerButtonPropsType) =>
    <BurgerButtonStyled onClick={menuSwitch}>
        <BarsStyled
            $isBurgerMenuOpened={menuIsShow}
            $homePage={homePage}
        />
    </BurgerButtonStyled>
