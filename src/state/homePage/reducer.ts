import {HomePageContextType} from './contextProvider.tsx';

enum ActionPoints {
    CHANGE_TITLE = 'CHANGE_TITLE',
    CHANGE_VIDEO = 'CHANGE_VIDEO',
    CHANGE_SKILLS = 'ADD_SOCIAL',
}

export const homePageReducer = (state: HomePageContextType, action: ActionsType) => {
    switch (action.type) {
        case ActionPoints.CHANGE_TITLE: {
            return {...state, title: action.payload.title}
        }
        case ActionPoints.CHANGE_VIDEO: {
            return {...state, videoLink: action.payload.videoLink}
        }
        case ActionPoints.CHANGE_SKILLS: {
            return {...state, skills: action.payload.skills}
        }
        default:
            //return state
            throw new Error('Unknown action')
    }
}

export type ActionsType = ChangeTitleActionType |
    ChangeVideoActionType |
    ChangeSkillsActionType;

type ChangeTitleActionType = {
    type: ActionPoints.CHANGE_TITLE,
    payload: {title: string}
};
type ChangeVideoActionType = {
    type: ActionPoints.CHANGE_VIDEO,
    payload: {videoLink: string}
};
type ChangeSkillsActionType = {
    type: ActionPoints.CHANGE_SKILLS,
    payload: {skills: Array<string>}
};

export const ChangeTitleAC = (title: string): ChangeTitleActionType => {
    return {type: ActionPoints.CHANGE_TITLE,
        payload: {title}}
};
export const ChangeVideoAC = (videoLink: string): ChangeVideoActionType => {
    return {type: ActionPoints.CHANGE_VIDEO,
        payload: {videoLink}}
};
export const ChangeSkillsAC = (skills: Array<string>): ChangeSkillsActionType => {
    return {type: ActionPoints.CHANGE_SKILLS,
        payload: {skills}}
};
