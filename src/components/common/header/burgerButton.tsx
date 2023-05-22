import {BarsStyled, BurgerButtonStyled} from './header.styled.ts';

export interface BurgerStyledPropsType {
    isBurgerMenuOpened: boolean,
}

interface BurgerButtonPropsType {
    menuIsShow: boolean,
    menuSwitch: ()=> void,
}

export const BurgerButton = ({menuIsShow, menuSwitch}: BurgerButtonPropsType) => {
    // const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState<boolean>(false);
    //
    // const onClickHandler = () => {
    //     setIsBurgerMenuOpened(!isBurgerMenuOpened);
    // };

    return (
        <BurgerButtonStyled onClick={menuSwitch}>
            <BarsStyled
                isBurgerMenuOpened={menuIsShow}
            />
        </BurgerButtonStyled>
    );
};
