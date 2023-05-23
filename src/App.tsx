import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import {useWindowSize} from './hooks/useWindowSize.ts';
import {EnterPageDesktop} from './components/enterPage/enterPageDesktop.component.tsx';
import {EnterPageMobile} from './components/enterPage/enterPageMobile.component.tsx';
import {HomePage} from './components/homePage/homePage.component.tsx';
import {AboutPage} from './components/aboutPage/aboutPage.component.tsx';
import {AdminPage} from "./components/adminPage/adminPage.component.tsx";

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
                    <HomePage/>
                }
            />
            <Route
                path={PATH.ABOUT}
                element={
                    <AboutPage/>
                }
            />
            <Route
                path={PATH.ADMIN}
                element={
                    <AdminPage/>
                }
            />
            {/*<Route*/}
            {/*    path={PATH.PORTFOLIO}*/}
            {/*    element={*/}
            {/*        <Portfolio/>*/}
            {/*    }*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path={PATH.SERVICE}*/}
            {/*    element={*/}
            {/*        <Service/>*/}
            {/*    }*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path={PATH.CONTACT}*/}
            {/*    element={*/}
            {/*        <Contacts/>*/}
            {/*    }*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='*'*/}
            {/*    element={*/}
            {/*        <Error404/>*/}
            {/*    }*/}
            {/*/>*/}
        </Routes>
    );
};