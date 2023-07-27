import {createContext, ReactNode, useContext, useReducer} from 'react';
import {ServicesPageReducer, ActionsType} from './reducer.ts';
import {v4 as uuidv4} from 'uuid';

interface ServicesProviderPropsType {
    children: ReactNode,
}

export type DispatchType = (action: ActionsType) => void;

export const ServicesPageStateContext = createContext<ServicesPageContextType | undefined>(undefined);
export const ServicesPageDispatchContext = createContext<DispatchType | undefined>(undefined);

const servicesPage = {
    id: uuidv4(),
    title: 'Services',
    services: [
        {
            id: uuidv4(),
            title: '3D Modelling',
            label: 'Objects',
            description: [
                '3D modelling of objects, furniture.',
                'Modelling of light and complex shapes.',
                'Creating highly detailed and realistic renders for catalogs, web sites, advertising and etc.',
            ],
            picture: '',
        },
        {
            id: uuidv4(),
            title: '3D Modelling',
            label: 'Architectures',
            description: [
                '3D modelling of architectural forms according to your drawings, schemes, references.',
                'Creating of a high quality 3D model.',
            ],
            picture: '',
        },
        {
            id: uuidv4(),
            title: '3D Visualization',
            label: 'Objects',
            description: [
                'Realistic visualization for your purposes in high quality.',
                'Object visualization with high and low detail.',
            ],
            picture: '',
        },
        {
            id: uuidv4(),
            title: 'Architectural Visualisation',
            label: '',
            description: [
                'Visualization of interiors and exteriors  in high quality.',
                'Architectural visualization according to your references,  examples, desires and etc.',
            ],
            picture: '',
        },
        {
            id: uuidv4(),
            title: '3D Animation',
            label: 'Objects',
            description: [
                'I will create a video of your subject.',
                'Realistic video can be used for advertising, presentation posting on a web site.',
                'The video can be with music if Full HD, 2K or 4K resolution.',
            ],
            picture: '',
        },
        {
            id: uuidv4(),
            title: '3D Animation',
            label: 'Interiors',
            description: [
                'I will create a video of your interior  for presentation, advertising and etc.',
                'In any  format and resolution.',
                'The result will be a realistic video in Full HD, 2K or 4K resolution.',
            ],
            picture: '',
        },
        {
            id: uuidv4(),
            title: 'Interactive walktrough',
            label: '',
            description: [
                'I will create a project in Unreal Engine and pack it into  a video game.',
                'You will be able to walk around your interior, exterior or something else.',
                'You will be able to open doors, torn on and off lights and interact with objects.',
                'The result will be a project in EXE file format.',
            ],
            picture: '',
        },
        {
            id: uuidv4(),
            title: 'VR | AR',
            label: '',
            description: [
                'I will create a VR project in Unreal Engine for your interior, exterior or something else.',
                'You will be able to put on virtual reality glasses and render there.',
                'You will be able to evaluate your project under a different view, which will give you a great feeling and a lot of information to implement ths project in life.',
            ],
            picture: '',
        },
    ]
}

export type ServiceType = {
    id: string,
    title: string,
    label: string,
    description: Array<string>,
    picture: string,
};

export type ServicesPageContextType = {
    id: string,
    title: string,
    services: Array<ServiceType>,
};

export const ServicesPageContextProvider = ({children}: ServicesProviderPropsType) => {
    const [state, dispatch] = useReducer(ServicesPageReducer, servicesPage);

    return (
        <ServicesPageStateContext.Provider value={state}>
            <ServicesPageDispatchContext.Provider value={dispatch}>
                {children}
            </ServicesPageDispatchContext.Provider>
        </ServicesPageStateContext.Provider>
    )
}

export const useServicesPageState = () => {
    const context = useContext(ServicesPageStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

export const useServicesPageDispatch = () => {
    const context = useContext(ServicesPageDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}