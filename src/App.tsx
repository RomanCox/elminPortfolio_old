import {useEffect, useState} from 'react';

import {useWindowSize} from './hooks/useWindowSize.ts';
import {
	AppWrapperStyled,
} from './App.styled.ts';
import {HomeBlockDesktop} from './components/homeBlock/HomeBlockDesktop.component.tsx';
import {HomeBlockMobile} from './components/homeBlock/HomeBlockMobile.component.tsx';

export interface HomeBlockPropsType {
	isShow: boolean,
}

export const App = () => {
	const [isShow, setIsShow] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const windowSize = useWindowSize();

	useEffect(() => {
		setTimeout(() => {
			setIsShow(true);
		}, 2000);
	}, []);

	useEffect(() => {
		if (windowSize.width && windowSize.width >= 880) {
			setIsMobile(false);
		}
		if (windowSize.width && windowSize.width < 880) {
			setIsMobile(true);
		}
	}, [windowSize, isMobile]);

	return (
		<AppWrapperStyled>
			{isMobile
				? <HomeBlockMobile isShow={isShow}/>
				: <HomeBlockDesktop isShow={isShow}/>
			}
		</AppWrapperStyled>
	);
};