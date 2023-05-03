import {
    FooterContainerStyled, LocationContainerStyled,
    SocialLinksContainerStyled,
} from './footer.styled.ts';


export const Footer = () => {

    return (
        <FooterContainerStyled>
            <LocationContainerStyled>
                Warsaw, Poland
            </LocationContainerStyled>
            <SocialLinksContainerStyled>
                Portfolio
            </SocialLinksContainerStyled>
        </FooterContainerStyled>
    );
};