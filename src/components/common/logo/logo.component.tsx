import {useEffect, useState} from 'react';

import {
	LogoContainerStyled,
	LogoStyled,
	AfterBlockStyled,
} from './logo.styled.ts';
import logoBlack from '../../../assets/images/elmin_logo_black.webp';
import logoWhite from '../../../assets/images/elmin_logo_white.webp';

export type VariantType = 'black' | 'white';

export interface LogoShowType {
	isShow: boolean,
	color: VariantType,
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
			<LogoStyled src={variant === 'black' ? logoBlack : logoWhite}/>
			<AfterBlockStyled isShow={isShow} color={variant}>
				{isShow && <span>CG ARTIST</span>}
			</AfterBlockStyled>
		</LogoContainerStyled>
	);
};