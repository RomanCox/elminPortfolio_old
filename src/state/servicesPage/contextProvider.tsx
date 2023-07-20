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
}

export type ServicesPageContextType = {
    id: string,
    title: string,
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