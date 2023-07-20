import {ServicesPageContextType} from './contextProvider.tsx';

enum ActionPoints {
    CHANGE_TITLE = 'CHANGE_TITLE',
}

export const ServicesPageReducer = (state: ServicesPageContextType, action: ActionsType) => {
    switch (action.type) {
        case ActionPoints.CHANGE_TITLE: {
            return {...state, title: action.payload.title}
        }
        default:
            //return state
            throw new Error('Unknown action')
    }
}

export type ActionsType = ChangeTitleActionType;
type ChangeTitleActionType = {
    type: ActionPoints.CHANGE_TITLE,
    payload: {title: string}
};

export const ChangeTitleAC = (title: string): ChangeTitleActionType => {
    return {type: ActionPoints.CHANGE_TITLE,
        payload: {title}}
};
