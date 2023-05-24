import {useState} from 'react';

import {
    AdminPageContainerStyled
} from './adminPage.styled.ts';
import {AdminPage} from './adminPage.component.tsx';
import {LoginPage} from './loginPage.component.tsx';

export const AdminLayoutPage = () => {
    const [isRight, setIsRight] = useState(false); //change to false
    const [isWrong, setIsWrong] = useState(false);


    return (
        <AdminPageContainerStyled>
            {isRight
                ? <AdminPage/>
                : <LoginPage setIsRight={setIsRight} isWrong={isWrong} setIsWrong={setIsWrong}/>
            }
        </AdminPageContainerStyled>
    );
};