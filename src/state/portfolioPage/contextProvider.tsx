import {createContext, ReactNode, useContext, useReducer} from 'react';
import {portfolioPageReducer, ActionsType} from './reducer.ts';
import {v4 as uuidv4} from 'uuid';

interface PortfolioProviderPropsType {
    children: ReactNode,
}

export type DispatchType = (action: ActionsType) => void;

export const PortfolioPageStateContext = createContext<PortfolioPageContextType | undefined>(undefined);
export const PortfolioPageDispatchContext = createContext<DispatchType | undefined>(undefined);

const portfolioPage = {
    id: uuidv4(),
    title: 'Portfolio',
}

export type PortfolioPageContextType = {
    id: string,
    title: string,
};

export const PortfolioPageContextProvider = ({children}: PortfolioProviderPropsType) => {
    const [state, dispatch] = useReducer(portfolioPageReducer, portfolioPage);

    return (
        <PortfolioPageStateContext.Provider value={state}>
            <PortfolioPageDispatchContext.Provider value={dispatch}>
                {children}
            </PortfolioPageDispatchContext.Provider>
        </PortfolioPageStateContext.Provider>
    )
}

export const usePortfolioPageState = () => {
    const context = useContext(PortfolioPageStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

export const usePortfolioPageDispatch = () => {
    const context = useContext(PortfolioPageDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}