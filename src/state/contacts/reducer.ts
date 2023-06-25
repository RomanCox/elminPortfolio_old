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
            const newContact = {
                id: uuidv4(),
                ...action.payload
            }

            return [
                ...state,
                newContact
            ]
        }
        case ActionPoints.REMOVE_CONTACT: {
            const {id} = action.payload;

            return state.filter(contact => contact.id !== id);
        }
        case ActionPoints.UPDATE_CONTACT: {
            const {id, title, icon = '', link} = action.payload;

            return state.filter(contact => contact.id === id
                ? {...contact, title, icon, link}
                : contact
            );
        }
        default:
            //return state
            throw new Error('Unknown action')
    }
}

export type ActionsType = AddContactActionType | RemoveContactActionType | UpdateContactActionType;
type AddContactActionType = {
    type: ActionPoints.ADD_CONTACT,
    payload: {title: string, icon: string, link: string}
};
type RemoveContactActionType = {
    type: ActionPoints.REMOVE_CONTACT,
    payload: {id: string}
};
type UpdateContactActionType = {
    type: ActionPoints.UPDATE_CONTACT,
    payload: {id: string, title: string, icon: string, link: string}
};

export const AddContactAC = (title: string, icon: string, link: string): AddContactActionType => {
    return {type: ActionPoints.ADD_CONTACT,
        payload: {title, icon, link}}
};
export const RemoveContactAC = (id: string): RemoveContactActionType => {
    return {type: ActionPoints.REMOVE_CONTACT,
        payload: {id}}
};
export const UpdateContactAC = (id: string, title: string, icon: string, link: string): UpdateContactActionType => {
    return {type: ActionPoints.UPDATE_CONTACT,
        payload: {id, title, icon, link}}
};