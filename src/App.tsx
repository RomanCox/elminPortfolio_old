import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import {useWindowSize} from './hooks/useWindowSize.ts';
import {EnterPageDesktop} from './components/enterPage/enterPageDesktop.component.tsx';
import {EnterPageMobile} from './components/enterPage/enterPageMobile.component.tsx';
import {HomePage} from './components/homePage/homePage.component.tsx';
import {AboutPage} from './components/aboutPage/aboutPage.component.tsx';
import {AdminLayoutPage} from './components/adminPage/adminLayoutPage.component.tsx';
import {AboutContextProvider} from './state/aboutPage';
import {ContactContextProvider} from "./state/contacts";

export const PATH = {
    EMPTY: '/',
    HOME: '/home',
    ABOUT: '/about',
    PORTFOLIO: '/portfolio',
    SERVICE: '/service',
    CONTACT: '/contact',
    ADMIN: '/admin',
};

export const App = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width && windowSize.width >= 880) {
            setIsMobile(false);
        }
        if (windowSize.width && windowSize.width < 880) {
            setIsMobile(true);
        }
    }, [windowSize, isMobile]);

    return (
        <Routes>
            <Route path={PATH.EMPTY} element={isMobile
                ? <EnterPageMobile/>
                : <EnterPageDesktop/>
            }/>
            <Route
                path={PATH.HOME}
                element={
                    <ContactContextProvider>
                        <HomePage/>
                    </ContactContextProvider>
                }
            />
            <Route
                path={PATH.ABOUT}
                element={
                    <AboutContextProvider>
                        <ContactContextProvider>
                            <AboutPage/>
                        </ContactContextProvider>
                    </AboutContextProvider>
                }
            />
            <Route
                path={PATH.ADMIN}
                element={
                    <AdminLayoutPage/>
                }
            />
        </Routes>
    );
};