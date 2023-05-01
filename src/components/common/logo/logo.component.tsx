import {useEffect, useState} from 'react';

import {
	LogoContainerStyled,
	LogoStyled,
	AfterBlockStyled,
} from './logo.styled.ts';
import logo from '../../../assets/images/elmin_logo_black.webp';

export type VariantType = 'black' | 'white';

export interface LogoShowType {
	isShow: boolean,
}

export type LogoPropsType = {
	variant: VariantType,
}

export const Logo = ({variant}: LogoPropsType) => {
	const [isShow, setIsShow] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setIsShow(true);
		}, 2000);
	}, []);

	return (
		<LogoContainerStyled color={variant}>
			<LogoStyled src={logo}/>
			<AfterBlockStyled isShow={isShow}>
				{isShow && <span>CG ARTIST</span>}
			</AfterBlockStyled>
		</LogoContainerStyled>
	);
};