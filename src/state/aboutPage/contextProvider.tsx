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
                    description: ['Faculty of Industrial and Civil Engineering',],
                },
                {
                    id: uuidv4(),
                    year: '2021',
                    title: '3D School GRIPINSKY',
                    description: ['3d Modeling and Visualisation Course (3ds Max + Corona , V-Ray)',],
                },
                {
                    id: uuidv4(),
                    year: '2021',
                    title: 'School Artem Gogolov',
                    description: ['3d Modeling and Visualisation. Creation of highly detailed models of soft  shapes (folds, sofas, beds, etc.). Studying 3ds Max  + Marvelous Designer',],
                },
                {
                    id: uuidv4(),
                    year: '2021-2022',
                    title: 'School of Architecture, Design and Graphics ARHI.TEACH',
                    description: ['Developing projects in Unreal Engine. Creating  animations and architectural walkthroughs.',],
                },
                {
                    id: uuidv4(),
                    year: '2021-2022',
                    title: 'School Dviz',
                    description: [
                        'Online Course "Unreal Engine 4 For Archviz"',
                        'Online Course "Unreal Engine 5 For Archviz"',
                        'Online Course "Essential Blueprints for Archviz"',
                        'Online Course "Marvelous designer for Archviz"',
                        'Developing projects in Unreal Engine. Creating animations and architectural walkthroughs'
                    ],
                },
                {
                    id: uuidv4(),
                    year: '2021-2022',
                    title: 'School RENDER.CAMP',
                    description: ['Professional visualisation of interiors and exteriors in 3ds Max (Corona, VRay,  FStorm)',],
                },
            ]
        },
        {
            id: uuidv4(),
            label: 'Experience',
            items: [
                {
                    id: uuidv4(),
                    year: '2020-now',
                    title: 'Freelance, CG-Artist',
                    description: [
                        '3D Modeling and visualisation:',
                        '- furniture catalog',
                        '- architectural projects on autocad drawings, diagrams, photos',
                        '- interiors in 3ds Max + Corona/Vray, Marvelous Designer',
                        'Architectural rendering  in Unreal Engine 4/5:',
                        '- optimization, light baking, RTX/Lumen technologies',
                        '- animation of interiors and exteriors',
                        '- interactive projects',
                        '- VR/AR',
                        'Performed one-time and long-term projects for studious in CIS, Europe, America & Africa',
                    ],
                },
            ]
        },
        {
            id: uuidv4(),
            label: 'Skills',
            items: [
                {
                    id: uuidv4(),
                    year: '',
                    title: '3D modeling 3ds Max',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'UV unfold',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Corona/Vray visualization',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Photoshop post-processing',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: '3d modeling Marvelous Designer',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Visualization in Unreal Engine',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Unreal Engine animation',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Creating interactive projects in UE 4/5',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Setting up blueprints',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Creating VR projects',
                    description: [],
                },
                {
                    id: uuidv4(),
                    year: '',
                    title: 'Montage and color grading in DaVinci Resolve',
                    description: [],
                },
            ]
        },
        {
            id: uuidv4(),
            label: 'Expertise',
            items: []
        },
        {
            id: uuidv4(),
            label: 'Awards',
            items: [
                {
                    id: uuidv4(),
                    year: 'Aug 5 2022',
                    title: 'Dviz Awards',
                    description: [],
                },
            ]
        },
    ],
}

interface AboutChapterItemType {
    id: string,
    year: string,
    title: string,
    description: Array<string>,
}

export interface AboutChapterType {
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

export const useAboutPageState = () => {
    const context = useContext(AboutStateContext);    
    if (context === undefined) {
        throw new Error('useAboutPageState must be used within a AboutPageProvider')
    }
    return context
}

export const useAboutPageDispatch = () => {
    const context = useContext(AboutDispatchContext)
    if (context === undefined) {
        throw new Error('useAboutPageDispatch must be used within a AboutPageProvider')
    }
    return context
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
