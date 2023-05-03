import {
    ButtonStyled,
} from './button.styled.ts';


export type TitlePropsType = {
    text: string,
}

export const Button = ({text}: TitlePropsType) => {

    return (
        <ButtonStyled>{text}</ButtonStyled>
    );
};