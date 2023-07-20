import {createContext, ReactNode, useContext, useReducer} from 'react';
import {homePageReducer, ActionsType} from './reducer.ts';
import {v4 as uuidv4} from 'uuid';

interface ContextProviderPropsType {
    children: ReactNode,
}

export type DispatchType = (action: ActionsType) => void;

export const HomePageStateContext = createContext<HomePageContextType | undefined>(undefined);
export const HomePageDispatchContext = createContext<DispatchType | undefined>(undefined);

const homePage = {
    id: uuidv4(),
    title: 'Elmin Karaev',
    videoLink: 'https://www.youtube.com/embed/KBeyL0i1cJw',
    skills: ['3D Modeling', 'visualization', 'animation', 'interactive', 'VR & AR'],
}

export type HomePageContextType = {
    id: string,
    title: string,
    videoLink: string,
    skills: Array<string>,
};

export const HomePageContextProvider = ({children}: ContextProviderPropsType) => {
    const [state, dispatch] = useReducer(homePageReducer, homePage);

    return (
        <HomePageStateContext.Provider value={state}>
            <HomePageDispatchContext.Provider value={dispatch}>
                {children}
            </HomePageDispatchContext.Provider>
        </HomePageStateContext.Provider>
    )
}

export const useHomePageState = () => {
    const context = useContext(HomePageStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

export const useHomePageDispatch = () => {
    const context = useContext(HomePageDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}