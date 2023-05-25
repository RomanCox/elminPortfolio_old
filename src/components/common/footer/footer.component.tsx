import {
    FooterContainerStyled, LocationContainerStyled,
    SocialLinksContainerStyled,
} from './footer.styled.ts';
import {IconSet} from '../iconSet/iconSet.component.tsx';

export interface FooterPropsType {
    homePage?: boolean
}

export const Footer = ({homePage = false}: FooterPropsType) => {

    return (
        <FooterContainerStyled homePage={homePage}>
            <LocationContainerStyled homePage={homePage}>
                Warsaw, Poland
            </LocationContainerStyled>
            <SocialLinksContainerStyled>
                {homePage ? 'Portfolio'
                    : <IconSet/>
                }
            </SocialLinksContainerStyled>
        </FooterContainerStyled>
    );
};