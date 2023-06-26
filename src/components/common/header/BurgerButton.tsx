import {BarsStyled, BurgerButtonStyled} from './Header.styled.ts';

export interface BurgerStyledPropsType {
    $isBurgerMenuOpened: boolean,
}

interface BurgerButtonPropsType {
    menuIsShow: boolean,
    menuSwitch: () => void,
}

export const BurgerButton = ({menuIsShow, menuSwitch}: BurgerButtonPropsType) =>
    <BurgerButtonStyled onClick={menuSwitch}>
        <BarsStyled
            $isBurgerMenuOpened={menuIsShow}
        />
    </BurgerButtonStyled>
