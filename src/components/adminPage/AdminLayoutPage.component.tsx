import { useState } from 'react';

import {
    AdminPageContainerStyled
} from './AdminPage.styled.ts';
import { AdminPage } from './AdminPage.component.tsx';
import { LoginPage } from './LoginPage.component.tsx';
import { AboutContextProvider } from '../../state/aboutPage';
import { ContactsPageContextProvider } from '../../state/contactsPage';

export const AdminLayoutPage = () => {
    const [isRight, setIsRight] = useState(true); //change to false
    const [isWrong, setIsWrong] = useState(false);

    return (
        <AdminPageContainerStyled>
            {isRight
                ? <AboutContextProvider>
                    <ContactsPageContextProvider>
                        <AdminPage />
                    </ContactsPageContextProvider>
                </AboutContextProvider>

                : <LoginPage setIsRight={setIsRight} isWrong={isWrong} setIsWrong={setIsWrong} />
            }
        </AdminPageContainerStyled>
    );
};