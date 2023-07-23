import {useContactsPageState} from '../../state/contactsPage';

import {
    AllContactsContainerStyled, SocialsContainerStyled, PhotoAndSocialsContainerStyled, SocialStyled, SocialIconStyled,
    LabelStyled, PhotoContainerStyled, PhotoStyled, ContactsWrapperStyled, ContactsTitleContainerStyled,
    ContactsContainerStyled, ContactContainerStyled, ContactLabelStyled, ContactStyled,
} from './ContactsPage.styled.ts';
import {Title} from '../common/title/Title.component.tsx';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export const Contacts = () => {
    const context = useContactsPageState();

    return (
        <AllContactsContainerStyled>
            <PhotoAndSocialsContainerStyled>
                <PhotoContainerStyled>
                    <PhotoStyled src={context.photo}/>
                </PhotoContainerStyled>
                <SocialsContainerStyled>
                    {context.socials.map(social =>
                        <SocialStyled key={social.id} href={social.link} title={`link to ${social.title}`}>
                            <SocialIconStyled src={social.icon}/>
                            <LabelStyled>
                                {social.title}
                            </LabelStyled>
                        </SocialStyled>
                    )}
                </SocialsContainerStyled>
            </PhotoAndSocialsContainerStyled>
            <ContactsWrapperStyled>
                <ContactsTitleContainerStyled>
                    <Title variant='h3' color='#000' text='Contacts'/>
                </ContactsTitleContainerStyled>
                <ContactsContainerStyled>
                    {context.contacts.map(contact =>
                        <ContactContainerStyled key={contact.id}>
                            <ContactLabelStyled>
                                {contact.title === 'Location' ? <LocationOnOutlinedIcon/>
                                    : contact.title === 'Email' ? <EmailIcon/>
                                        : contact.title === 'Phone | Whatsapp | Viber' ? <PhoneIcon/>
                                            : contact.title === 'Telegram' ? <TelegramIcon/>
                                                : contact.title === 'Facebook' ? <FacebookIcon/>
                                                    : <ConnectWithoutContactIcon/>
                                }
                                {contact.title}
                            </ContactLabelStyled>
                            <ContactStyled href={contact.link} target='_blanc' rel='nofollow noreferrer'>
                                {contact.label}
                            </ContactStyled>
                        </ContactContainerStyled>
                    )}
                </ContactsContainerStyled>
            </ContactsWrapperStyled>
        </AllContactsContainerStyled>
    )
};