import { v4 as uuidv4 } from 'uuid';
import {ContactsPageContextType} from './contextProvider.tsx';

enum ActionPoints {
    CHANGE_PHOTO = 'CHANGE_PHOTO',
    ADD_SOCIAL = 'ADD_SOCIAL',
    REMOVE_SOCIAL = 'REMOVE_SOCIAL',
    UPDATE_SOCIAL = 'UPDATE_SOCIAL',
    ADD_CONTACT = 'ADD_CONTACT',
    REMOVE_CONTACT = 'REMOVE_CONTACT',
    UPDATE_CONTACT = 'UPDATE_CONTACT'
}

export const contactsPageReducer = (state: ContactsPageContextType, action: ActionsType) => {
    switch (action.type) {
        case ActionPoints.CHANGE_PHOTO: {
            return {...state, photo: action.payload.photo}
        }
        case ActionPoints.ADD_SOCIAL: {
            return {...state, socials: [...state.socials, {id: uuidv4(), ...action.payload, label: ''}]}
        }
        case ActionPoints.REMOVE_SOCIAL: {
            const {id} = action.payload;

            return {...state, socials: state.socials.filter(social => social.id !== id)}
        }
        case ActionPoints.UPDATE_SOCIAL: {
            const {id, title, icon = '', link} = action.payload;

            return {...state, socials: state.socials.map(contact => contact.id === id
                    ? {...contact, title, icon, link}
                    : contact
                )}
        }
        case ActionPoints.ADD_CONTACT: {
            return {...state, contacts: [...state.contacts, {id: uuidv4(), ...action.payload}]}
        }
        case ActionPoints.REMOVE_CONTACT: {
            const {id} = action.payload;

            return {...state, contacts: state.contacts.filter(contact => contact.id !== id)}
        }
        case ActionPoints.UPDATE_CONTACT: {
            const {id, title, icon = '', link, label} = action.payload;

            return {...state, contacts: state.contacts.map(contact => contact.id === id
                    ? {...contact, title, icon, link, label}
                    : contact
                )}
        }
        default:
            //return state
            throw new Error('Unknown action')
    }
}

export type ActionsType = ChangePhotoActionType |
    AddSocialActionType |
    RemoveSocialActionType |
    UpdateSocialActionType |
    AddContactActionType |
    RemoveContactActionType |
    UpdateContactActionType;
type ChangePhotoActionType = {
    type: ActionPoints.CHANGE_PHOTO,
    payload: {photo: string}
};
type AddSocialActionType = {
    type: ActionPoints.ADD_SOCIAL,
    payload: {title: string, icon: string, link: string}
};
type RemoveSocialActionType = {
    type: ActionPoints.REMOVE_SOCIAL,
    payload: {id: string}
};
type UpdateSocialActionType = {
    type: ActionPoints.UPDATE_SOCIAL,
    payload: {id: string, title: string, icon: string, link: string}
};
type AddContactActionType = {
    type: ActionPoints.ADD_CONTACT,
    payload: {title: string, icon: string, link: string, label: string}
};
type RemoveContactActionType = {
    type: ActionPoints.REMOVE_CONTACT,
    payload: {id: string}
};
type UpdateContactActionType = {
    type: ActionPoints.UPDATE_CONTACT,
    payload: {id: string, title: string, icon: string, link: string, label: string}
};

export const ChangePhotoAC = (photo: string): ChangePhotoActionType => {
    return {type: ActionPoints.CHANGE_PHOTO,
        payload: {photo}}
};
export const AddSocialAC = (title: string, icon: string, link: string): AddSocialActionType => {
    return {type: ActionPoints.ADD_SOCIAL,
        payload: {title, icon, link}}
};
export const RemoveSocialAC = (id: string): RemoveSocialActionType => {
    return {type: ActionPoints.REMOVE_SOCIAL,
        payload: {id}}
};
export const UpdateSocialAC = (id: string, title: string, icon: string, link: string): UpdateSocialActionType => {
    return {type: ActionPoints.UPDATE_SOCIAL,
        payload: {id, title, icon, link}}
};
export const AddContactAC = (title: string, icon: string, link: string, label: string): AddContactActionType => {
    return {type: ActionPoints.ADD_CONTACT,
        payload: {title, icon, link, label}}
};
export const RemoveContactAC = (id: string): RemoveContactActionType => {
    return {type: ActionPoints.REMOVE_CONTACT,
        payload: {id}}
};
export const UpdateContactAC = (id: string, title: string, icon: string, link: string, label: string): UpdateContactActionType => {
    return {type: ActionPoints.UPDATE_CONTACT,
        payload: {id, title, icon, link, label}}
};