import {useState} from 'react';
import {useContactsPageState} from '../../state/contactsPage';

import {Header} from '../common/header/Header.component.tsx';
import {BurgerMenu} from '../common/burgerMenu/BurgerMenu.component.tsx';
import {Footer} from '../common/footer/Footer.component.tsx';

import {ContactsPageContainerStyled, TitleContainerStyled} from './ContactsPage.styled.ts';
import {Title} from '../common/title/Title.component.tsx';
import {Contacts} from './Contacts.container.tsx';


export const ContactsPage = () => {
    const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

    const context = useContactsPageState();

    const menuSwitch = () => {
        setMenuIsShow(!menuIsShow);
    }

    return (
        <ContactsPageContainerStyled>
            <Header menuIsShow={menuIsShow} menuSwitch={menuSwitch}/>
            {menuIsShow && <BurgerMenu menuIsShow={menuIsShow}/>}
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text={context.title}/>
            </TitleContainerStyled>
            <Contacts/>
            <Footer/>
        </ContactsPageContainerStyled>
    );
};