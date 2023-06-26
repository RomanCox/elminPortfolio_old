import {useContactsState} from '../../state/contacts';

import {Header} from '../common/header/Header.component.tsx';
import {Footer} from '../common/footer/Footer.component.tsx';

import {ContactsPageContainerStyled, TitleContainerStyled} from './ContactsPage.styled.ts';
import {Title} from '../common/title/Title.component.tsx';
import {Contacts} from "./Contacts.container.tsx";


export const ContactsPage = () => {
    const context = useContactsState();

    return (
        <ContactsPageContainerStyled>
            <Header/>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text={context.title}/>
            </TitleContainerStyled>
            <Contacts/>
            <Footer/>
        </ContactsPageContainerStyled>
    );
};