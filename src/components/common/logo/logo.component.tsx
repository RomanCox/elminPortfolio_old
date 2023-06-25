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
	$show: boolean,
	color: VariantType,
	size: string,
	$homePage: boolean,
}

export type LogoPropsType = {
	variant: VariantType,
	size?: string,
	homePage?: boolean,
}

export const Logo = ({variant, size = 'small', homePage = false}: LogoPropsType) => {
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 2000);
	}, []);

	return (
		<LogoContainerStyled color={variant} size={size}>
			<LogoStyled src={variant === 'black' ? logoBlack : logoWhite}/>
			<AfterBlockStyled $show={show} color={variant} size={size} $homePage={homePage}>
				{show && <span>CG ARTIST</span>}
			</AfterBlockStyled>
		</LogoContainerStyled>
	);
};