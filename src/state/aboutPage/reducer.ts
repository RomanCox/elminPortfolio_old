import { v4 as uuidv4 } from 'uuid';
import {AboutPageContextType} from './contextProvider.tsx';

export enum ActionPoints {
    ADD_NAVIGATION_CHAPTER = 'ADD_NAVIGATION_CHAPTER',
    REMOVE_NAVIGATION_CHAPTER = 'REMOVE_NAVIGATION_CHAPTER',
    UPDATE_NAVIGATION_CHAPTER = 'UPDATE_NAVIGATION_CHAPTER',
    ADD_EDUCATION = 'ADD_EDUCATION',
    REMOVE_EDUCATION = 'REMOVE_EDUCATION',
    UPDATE_EDUCATION = 'UPDATE_EDUCATION',
}

export const aboutReducer = (state: AboutPageContextType, action: ActionsType) => {
    switch (action.type) {
        case ActionPoints.ADD_NAVIGATION_CHAPTER: {
            const newChapter = {id: uuidv4(), label: action.payload.title, items: []};
            const chapters = [...state.chapters, newChapter];

            return {
                ...state,
                chapters: chapters,
            }
        }
        case ActionPoints.REMOVE_NAVIGATION_CHAPTER: {
            const newChapters = state.chapters.filter(
                chapter => chapter.id === action.payload.id
            );

            return {
                ...state,
                chapters: newChapters,
            }
        }
        case ActionPoints.UPDATE_NAVIGATION_CHAPTER: {
            const {id, title} = action.payload;

            const newChapters = state.chapters.map(chapter => chapter.id === id
                ? {...chapter, label: title}
                : chapter
            );

            return {
                ...state,
                chapters: newChapters
            }
        }
        case ActionPoints.ADD_EDUCATION: {
            const newChapters = state.chapters.filter(chapter => chapter.label === 'Education'
                ? {...chapter, items: [...chapter.items, {id: uuidv4(), ...action.payload}]}
                : chapter
            );

            return {
                ...state,
                chapters: newChapters
            }
        }
        case ActionPoints.REMOVE_EDUCATION: {
            const {id} = action.payload;
            const newChapters = state.chapters.filter(chapter => chapter.label === 'Education'
                ? {...chapter, items: chapter.items.filter(item => item.id !== id)}
                : chapter
            );

            return {
                ...state,
                chapters: newChapters
            }
        }
        case ActionPoints.UPDATE_EDUCATION: {
            const {id, title, description} = action.payload;

            const newChapters = state.chapters.filter(chapter => chapter.label === 'Education'
                ? {...chapter, items: chapter.items.filter(item => item.id === id
                        ? {...item, title, description}
                        : item
                    )}
                : chapter
            );

            return {
                ...state,
                chapters: newChapters
            }
        }
        default:
            //return state
            throw new Error('Unknown action')

    }
}

export type ActionsType = AddNavigationChapterActionType |
    RemoveNavigationChapterActionType |
    UpdateNavigationChapterActionType |
    AddEducationActionType |
    RemoveEducationActionType |
    UpdateEducationActionType;
type AddNavigationChapterActionType = {
    type: ActionPoints.ADD_NAVIGATION_CHAPTER,
    payload: {title: string}
};
type RemoveNavigationChapterActionType = {
    type: ActionPoints.REMOVE_NAVIGATION_CHAPTER,
    payload: {id: string}
};
type UpdateNavigationChapterActionType = {
    type: ActionPoints.UPDATE_NAVIGATION_CHAPTER,
    payload: {id: string, title: string}
};
type AddEducationActionType = {
    type: ActionPoints.ADD_EDUCATION,
    payload: {title: string, description: string}
};
type RemoveEducationActionType = {
    type: ActionPoints.REMOVE_EDUCATION,
    payload: {id: string}
};
type UpdateEducationActionType = {
    type: ActionPoints.UPDATE_EDUCATION,
    payload: {id: string, title: string, description: string}
};

export const AddEducationAC = (title: string, description: string): AddEducationActionType => {
    return {type: ActionPoints.ADD_EDUCATION,
        payload: {title, description}}
};
export const RemoveEducationAC = (id: string): RemoveEducationActionType => {
    return {type: ActionPoints.REMOVE_EDUCATION,
        payload: {id}}
};
export const UpdateEducationAC = (id: string, title: string, description: string): UpdateEducationActionType => {
    return {type: ActionPoints.UPDATE_EDUCATION,
        payload: {id, title, description}}
};