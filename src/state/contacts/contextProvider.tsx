import {createContext, ReactNode, useContext, useReducer} from 'react';
import {contactReducer, ActionsType} from './reducer.ts';
import {v4 as uuidv4} from 'uuid';

interface ContextProviderPropsType {
    children: ReactNode,
}

export type DispatchType = (action: ActionsType) => void;

export const ContactsStateContext = createContext<ContactsContextType | undefined>(undefined);
export const ContactsDispatchContext = createContext<DispatchType | undefined>(undefined);

const contacts = {
    id: uuidv4(),
    title: 'Contacts',
    photo: '../src/assets/images/photo/avatar.webp',
    socials: [
        {
            id: uuidv4(),
            title: 'LinkedIn',
            icon: '../src/assets/icons/linkedin.webp',
            link: 'https://www.linkedin.com/in/elminkaraev',
        },
        {
            id: uuidv4(),
            title: 'Telegram',
            icon: '../src/assets/icons/telegram.webp',
            link: 'https://t.me/karaevelmin',
        },
        {
            id: uuidv4(),
            title: 'Instagram',
            icon: '../src/assets/icons/instagram.webp',
            link: 'https://www.instagram.com/karaevelmin',
        },
        {
            id: uuidv4(),
            title: 'Behance',
            icon: '../src/assets/icons/behance.webp',
            link: 'https://www.behance.net/elminkaraev',
        },
        {
            id: uuidv4(),
            title: 'Youtube',
            icon: '../src/assets/icons/youtube.webp',
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

export type ContactsContextType = {
    id: string,
    title: string,
    photo: string,
    socials: Array<ContactType>,
    contacts: Array<ContactType>,
};

export const ContactContextProvider = ({children}: ContextProviderPropsType) => {
    const [state, dispatch] = useReducer(contactReducer, contacts);

    return (
        <ContactsStateContext.Provider value={state}>
            <ContactsDispatchContext.Provider value={dispatch}>
                {children}
            </ContactsDispatchContext.Provider>
        </ContactsStateContext.Provider>
    )
}

export const useContactsState = () => {
    const context = useContext(ContactsStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

export const useContactsDispatch = () => {
    const context = useContext(ContactsDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}