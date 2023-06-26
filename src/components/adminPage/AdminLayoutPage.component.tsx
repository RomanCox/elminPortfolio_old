import {useState} from 'react';

import {
    AdminPageContainerStyled
} from './AdminPage.styled.ts';
import {AdminPage} from './AdminPage.component.tsx';
import {LoginPage} from './LoginPage.component.tsx';

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