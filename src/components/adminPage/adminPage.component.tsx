import {useState} from 'react';

import {
    AdminPageContainerStyled
} from './adminPage.styled.ts';
import {LoginPage} from './loginPage.component.tsx';

export const AdminPage = () => {
    const [isRight, setIsRight] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    return (
        <AdminPageContainerStyled>
            {isRight
                ? <h1>YO!!</h1>
                : <LoginPage setIsRight={setIsRight} isWrong={isWrong} setIsWrong={setIsWrong}/>
            }
        </AdminPageContainerStyled>
    );
};