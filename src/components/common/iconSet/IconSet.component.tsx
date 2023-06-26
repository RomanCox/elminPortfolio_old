import {SocialLinkStyled, ImageStyled} from './IconSet.styled.ts';
import {useContactsState} from '../../../state/contacts';

export const IconSet = () => {
    const contacts = useContactsState().contacts.filter(contact => contact.iconSet);

    return (
        <>
            {contacts.map(contact =>
                <SocialLinkStyled key={contact.id} title={`link to ${contact.title}`}>
                    <ImageStyled src={contact.icon} alt={`${contact.title} icon`}/>
                </SocialLinkStyled>
            )}
        </>
    );
};