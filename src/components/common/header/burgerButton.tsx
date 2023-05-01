import {BarsStyled, BurgerButtonStyled} from './header.styled.ts';
import {useState} from "react";

export interface BurgerStyledPropsType {
    isBurgerMenuOpened: boolean;
}

export const BurgerButton = () => {
    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState<boolean>(false);

    const onClickHandler = () => {
        setIsBurgerMenuOpened(!isBurgerMenuOpened);
    };

    return (
        <BurgerButtonStyled onClick={onClickHandler}>
            <BarsStyled
                isBurgerMenuOpened={isBurgerMenuOpened}
            />
        </BurgerButtonStyled>
    );
};
