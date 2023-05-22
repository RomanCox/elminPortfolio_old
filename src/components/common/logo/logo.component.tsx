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
	max: boolean,
	homePage: boolean,
}

export type LogoPropsType = {
	variant: VariantType,
	max?: boolean,
	homePage?: boolean,
}

export const Logo = ({variant, max = false, homePage = false}: LogoPropsType) => {
	const [isShow, setIsShow] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setIsShow(true);
		}, 2000);
	}, []);

	return (
		<LogoContainerStyled color={variant}>
			<LogoStyled src={variant === 'black' ? logoBlack : logoWhite}/>
			<AfterBlockStyled isShow={isShow} color={variant} max={max} homePage={homePage}>
				{isShow && <span>CG ARTIST</span>}
			</AfterBlockStyled>
		</LogoContainerStyled>
	);
};