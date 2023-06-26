import { v4 as uuidv4 } from 'uuid';
import {ContactsContextType} from './contextProvider.tsx';

enum ActionPoints {
    ADD_CONTACT = "SET_CONTACT",
    REMOVE_CONTACT = "REMOVE_CONTACT",
    UPDATE_CONTACT = "UPDATE_CONTACT"
}

export const contactReducer = (state: ContactsContextType, action: ActionsType) => {
    switch (action.type) {
        case ActionPoints.ADD_CONTACT: {
            return {...state, contacts: [...state.contacts, {id: uuidv4(), ...action.payload}]}
        }
        case ActionPoints.REMOVE_CONTACT: {
            const {id} = action.payload;

            return {...state, contacts: state.contacts.filter(contact => contact.id !== id)}
        }
        case ActionPoints.UPDATE_CONTACT: {
            const {id, title, icon = '', link, social,iconSet} = action.payload;

            return {...state, contacts: state.contacts.map(contact => contact.id === id
                    ? {...contact, title, icon, link, social, iconSet}
                    : contact
                )}
        }
        default:
            //return state
            throw new Error('Unknown action')
    }
}

export type ActionsType = AddContactActionType | RemoveContactActionType | UpdateContactActionType;
type AddContactActionType = {
    type: ActionPoints.ADD_CONTACT,
    payload: {title: string, icon: string, link: string, social: boolean, iconSet: boolean}
};
type RemoveContactActionType = {
    type: ActionPoints.REMOVE_CONTACT,
    payload: {id: string}
};
type UpdateContactActionType = {
    type: ActionPoints.UPDATE_CONTACT,
    payload: {id: string, title: string, icon: string, link: string, social: boolean, iconSet: boolean}
};

export const AddContactAC = (title: string, icon: string, link: string, social: boolean, iconSet: boolean): AddContactActionType => {
    return {type: ActionPoints.ADD_CONTACT,
        payload: {title, icon, link, social, iconSet}}
};
export const RemoveContactAC = (id: string): RemoveContactActionType => {
    return {type: ActionPoints.REMOVE_CONTACT,
        payload: {id}}
};
export const UpdateContactAC = (id: string, title: string, icon: string, link: string, social: boolean, iconSet: boolean): UpdateContactActionType => {
    return {type: ActionPoints.UPDATE_CONTACT,
        payload: {id, title, icon, link, social, iconSet}}
};