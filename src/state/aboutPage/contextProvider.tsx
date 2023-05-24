import {createContext, ReactNode, useContext, useReducer} from 'react';
import {aboutReducer, ActionsType} from './reducer.ts';
import {v4 as uuidv4} from 'uuid';

interface ContextProviderPropsType {
    children: ReactNode,
}

export type DispatchType = (action: ActionsType) => void;

export const AboutStateContext = createContext<AboutPageContextType | undefined>(undefined);
export const AboutDispatchContext = createContext<DispatchType | undefined>(undefined);

const aboutPage = {
    id: uuidv4(),
    title: 'About',
    description: ['I am a professional 3d artist with years of experience in computer graphics.',
        'My skills are growing rapidly.',
        'I achieve my goals in a short time.',
        'Computer graphics is my job and my favorite hobby.',
        'I get a lot of pleasure from it.',],
    chapters: [
        {
            id: uuidv4(),
            label: 'Education',
            items: [
                {
                    id: uuidv4(),
                    year: '2004-2008',
                    title: 'College of Architecture and Civil Engineering as part of the Interstate Educational Institution of Higher Education "Belarusian-Russian University"',
                    description: ['Faculty of Industrial and Civil Engineering',]
                },
                {
                    id: uuidv4(),
                    year: '2021-2022',
                    title: 'School Dviz',
                    description: [
                        'Online Course "Unreal Engine 4 For Archviz"\n' +
                        'Online Course "Unreal Engine 5 For Archviz"\n' +
                        'Online Course "Essential Blueprints for Archviz"\n' +
                        'Online Course "Marvelous designer for archviz"\n' +
                        'Developing projects in Unreal Engine. Creating animations and architectural walkthroughs'
                    ],
                },
            ]
        },
        {
            id: uuidv4(),
            label: 'Experience',
            items: []
        },
        {
            id: uuidv4(),
            label: 'Skills',
            items: []
        },
        {
            id: uuidv4(),
            label: 'Expertise',
            items: []
        },
        {
            id: uuidv4(),
            label: 'Awards',
            items: []
        },
    ],
}

interface AboutChapterItemType {
    id: string,
    year: string,
    title: string,
    description: Array<string>,
}

interface AboutChapterType {
    id: string,
    label: string,
    items: Array<AboutChapterItemType>
}

export interface AboutPageContextType {
    id: string,
    title: string,
    description: Array<string>,
    chapters: Array<AboutChapterType>,
}

export const AboutContextProvider = ({children}: ContextProviderPropsType) => {
    const [state, dispatch] = useReducer(aboutReducer, aboutPage);

    return (
        <AboutStateContext.Provider value={state}>
            <AboutDispatchContext.Provider value={dispatch}>
                {children}
            </AboutDispatchContext.Provider>
        </AboutStateContext.Provider>
    )
}

export const useAboutPageState = () => {
    const context = useContext(AboutStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

export const useAboutPageDispatch = () => {
    const context = useContext(AboutDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}