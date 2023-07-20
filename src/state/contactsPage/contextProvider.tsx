import {createContext, ReactNode, useContext, useReducer} from 'react';
import {contactsPageReducer, ActionsType} from './reducer.ts';
import {v4 as uuidv4} from 'uuid';

interface ContextProviderPropsType {
    children: ReactNode,
}

export type DispatchType = (action: ActionsType) => void;

export const ContactsPageStateContext = createContext<ContactsPageContextType | undefined>(undefined);
export const ContactsPageDispatchContext = createContext<DispatchType | undefined>(undefined);

const contactsPage = {
    id: uuidv4(),
    title: 'Contacts',
    //photo: '../src/assets/images/photo/avatar.webp',
    photo: 'avatar.webp',
    socials: [
        {
            id: uuidv4(),
            title: 'LinkedIn',
            //icon: '../src/assets/icons/linkedin.webp',
            icon: '/socialIcons/linkedin.webp',
            link: 'https://www.linkedin.com/in/elminkaraev',
        },
        {
            id: uuidv4(),
            title: 'Telegram',
            icon: '/socialIcons/telegram.webp',
            link: 'https://t.me/karaevelmin',
        },
        {
            id: uuidv4(),
            title: 'Instagram',
            icon: '/socialIcons/instagram.webp',
            link: 'https://www.instagram.com/karaevelmin',
        },
        {
            id: uuidv4(),
            title: 'Behance',
            icon: '/socialIcons/behance.webp',
            link: 'https://www.behance.net/elminkaraev',
        },
        {
            id: uuidv4(),
            title: 'Youtube',
            icon: '/socialIcons/youtube.webp',
            link: 'https://www.youtube.com/channel/UC3w6lpvEkOH6LDl0m_YJrUw',
        },
    ],
    contacts: [
        {
            id: uuidv4(),
            title: 'Location',
            icon: '',
            link: 'Warsaw, Poland',
        },
        {
            id: uuidv4(),
            title: 'Email',
            icon: '',
            link: 'karaevelmin@gmail.com',
        },
        {
            id: uuidv4(),
            title: 'Phone | Whatsapp | Viber',
            icon: '',
            link: '+375445989809',
        },
        {
            id: uuidv4(),
            title: 'Telegram',
            icon: '../src/assets/icons/telegram.webp',
            link: 'https://t.me/karaevelmin',
        },
        {
            id: uuidv4(),
            title: 'Facebook',
            icon: '../src/assets/icons/facebook.webp',
            link: 'https://www.facebook.com/profile.php?id=100080225493177',
        },
    ],
}

interface ContactType {
    id: string,
    title: string,
    icon: string,
    link: string,
}

export type ContactsPageContextType = {
    id: string,
    title: string,
    photo: string,
    socials: Array<ContactType>,
    contacts: Array<ContactType>,
};

export const ContactsPageContextProvider = ({children}: ContextProviderPropsType) => {
    const [state, dispatch] = useReducer(contactsPageReducer, contactsPage);

    return (
        <ContactsPageStateContext.Provider value={state}>
            <ContactsPageDispatchContext.Provider value={dispatch}>
                {children}
            </ContactsPageDispatchContext.Provider>
        </ContactsPageStateContext.Provider>
    )
}

export const useContactsPageState = () => {
    const context = useContext(ContactsPageStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

export const useContactsPageDispatch = () => {
    const context = useContext(ContactsPageDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}