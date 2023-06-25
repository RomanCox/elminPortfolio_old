import {SocialLinkStyled, ImageStyled} from './iconSet.styled.ts';
// import {LinkedInIcon} from '../../../assets/icons/linkedInIcon.tsx';
// import {TelegramIcon} from '../../../assets/icons/telegramIcon.tsx';
// import {InstagramIcon} from '../../../assets/icons/instagramIcon.tsx';
// import {BehanceIcon} from '../../../assets/icons/behanceIcon.tsx';
import LinkedInIcon from '../../../assets/icons/linkedin.png';
import TelegramIcon from '../../../assets/icons/telegram.png';
import InstagramIcon from '../../../assets/icons/instagram.png';
import BehanceIcon from '../../../assets/icons/behance.png';
import {useContactsState} from '../../../state/contacts';

export const IconSet = () => {
    const context = useContactsState();
    console.log(context)

    const icons = ['linkedIn', 'telegram', 'instagram', 'behance'];

    return (
        <>
            {/*{icons.map(icon => <SocialLinkStyled key={icon}>*/}
            {/*    {icon === 'linkedIn' ? <LinkedInIcon/>*/}
            {/*        : icon === 'telegram' ? <TelegramIcon/>*/}
            {/*            : icon === 'instagram' ? <InstagramIcon/>*/}
            {/*                : <BehanceIcon/>*/}
            {/*    }*/}
            {/*</SocialLinkStyled>)}*/}
            {icons.map(icon => <SocialLinkStyled key={icon}>
                {icon === 'linkedIn' ? <ImageStyled src={LinkedInIcon}/>
                    : icon === 'telegram' ? <ImageStyled src={TelegramIcon}/>
                        : icon === 'instagram' ? <ImageStyled src={InstagramIcon}/>
                            : <ImageStyled src={BehanceIcon}/>
                }
            </SocialLinkStyled>)}
        </>
    );
};