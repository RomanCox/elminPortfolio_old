import {createContext, ReactNode, useContext, useReducer} from 'react';
import {contactReducer, ActionsType} from './reducer.ts';
import {v4 as uuidv4} from 'uuid';

interface ContextProviderPropsType {
    children: ReactNode,
}

export type DispatchType = (action: ActionsType) => void;

export const ContactsStateContext = createContext<ContactsContextType | undefined>(undefined);
export const ContactsDispatchContext = createContext<DispatchType | undefined>(undefined);

const contacts = [
    {
        id: uuidv4(),
        title: 'linkedin',
        icon: '',
        link: 'https://www.linkedin.com/in/elminkaraev',
    },
    {
        id: uuidv4(),
        title: 'telegram',
        icon: '',
        link: 'https://t.me/karaevelmin',
    },
    {
        id: uuidv4(),
        title: 'instagram',
        icon: '',
        link: 'https://www.instagram.com/karaevelmin',
    },
    {
        id: uuidv4(),
        title: 'behance',
        icon: '',
        link: 'https://www.behance.net/elminkaraev',
    },
    {
        id: uuidv4(),
        title: 'facebook',
        icon: '',
        link: 'https://www.facebook.com/profile.php?id=100080225493177',
    },
    {
        id: uuidv4(),
        title: 'youtube',
        icon: '',
        link: 'https://www.youtube.com/channel/UC3w6lpvEkOH6LDl0m_YJrUw',
    },
    {
        id: uuidv4(),
        title: 'viber',
        icon: '',
        link: '+375445989809',
    },
    {
        id: uuidv4(),
        title: 'whatsapp',
        icon: '',
        link: '+375445989809',
    },
    {
        id: uuidv4(),
        title: 'email',
        icon: '',
        link: 'karaevelmin@gmail.com',
    },
]

interface ContactType {
    id: string,
    title: string,
    icon: string,
    link: string,
}

export type ContactsContextType = Array<ContactType>;

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