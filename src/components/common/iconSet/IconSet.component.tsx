import {SocialLinkStyled, ImageStyled} from './IconSet.styled.ts';
import {useContactsPageState} from '../../../state/contactsPage';

export const IconSet = () => {
    const socials = useContactsPageState().socials;

    return (
        <>
            {socials.map(social =>
                <SocialLinkStyled key={social.id} title={`link to ${social.title}`}>
                    <ImageStyled src={social.icon} alt={`${social.title} icon`}/>
                </SocialLinkStyled>
            )}
        </>
    );
};