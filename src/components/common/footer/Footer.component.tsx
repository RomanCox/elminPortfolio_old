import {
    FooterContainerStyled, LocationContainerStyled,
    SocialLinksContainerStyled,
} from './Footer.styled.ts';
import {IconSet} from '../iconSet/IconSet.component.tsx';
import {useContactsPageState} from '../../../state/contactsPage';

export interface FooterPropsType {
    $homePage?: boolean
}

export const Footer = ({$homePage = false}: FooterPropsType) => {
    const location = useContactsPageState().contacts.find(contact => contact.title === 'Location');

    return (
        <FooterContainerStyled $homePage={$homePage}>
            <LocationContainerStyled $homePage={$homePage}>
                {/*Warsaw, Poland*/}
                {location?.link}
            </LocationContainerStyled>
            <SocialLinksContainerStyled>
                {$homePage ? 'Portfolio'
                    : <IconSet/>
                }
            </SocialLinksContainerStyled>
        </FooterContainerStyled>
    );
};