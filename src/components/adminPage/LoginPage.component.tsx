import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

import {Title} from '../common/title/Title.component.tsx';

import {
    LoginContainerStyled, TitleContainerStyled, LabelStyled,
    FormStyled, IconButtonStyled, LoginButtonStyled, InputStyled,
} from './AdminPage.styled.ts';

interface PropsType {
    setIsRight: Dispatch<SetStateAction<boolean>>,
    isWrong: boolean,
    setIsWrong: Dispatch<SetStateAction<boolean>>,
}

export const LoginPage = ({setIsRight, isWrong, setIsWrong}: PropsType) => {
    const [passIsShow, setPassIsShow] = useState(true);
    const [login, setLogin] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const changePassIsShow = () => {
        setPassIsShow(!passIsShow);
    };

    const loginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }

    const passHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
    }

    const onSubmitHandler = () => {
        if (login === 'Elmin' && pass === 'nimlE') {
            setIsRight(true);
        } else {
            setIsWrong(true);
            setTimeout(() => {
                setIsWrong(false);
            }, 600)
        }
    }

    return (
        <LoginContainerStyled $isWrong={isWrong}>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text='Hello, Elmin!'/>
            </TitleContainerStyled>
            <FormStyled>
                <InputStyled label='Login' variant='outlined' onChange={loginHandler} />
                <LabelStyled>
                    <InputStyled label='Password' variant='outlined' type={passIsShow ? 'password' : 'text'} onChange={passHandler} />
                    <IconButtonStyled aria-label='delete' onClick={changePassIsShow} type={'button'}>
                        {passIsShow ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                    </IconButtonStyled>
                </LabelStyled>
                <LoginButtonStyled variant='contained' onClick={onSubmitHandler} endIcon={<LoginIcon />}><b>Login</b></LoginButtonStyled>
            </FormStyled>
        </LoginContainerStyled>
    );
};