import {SocialLinkStyled} from './iconSet.styled.ts';
import {LinkedInIcon} from '../../../assets/icons/linkedInIcon.tsx';
import {TelegramIcon} from '../../../assets/icons/telegramIcon.tsx';
import {InstagramIcon} from '../../../assets/icons/instagramIcon.tsx';
import {BehanceIcon} from '../../../assets/icons/behanceIcon.tsx';

export const IconSet = () => {

    const icons = ['linkedIn', 'telegram', 'instagram', 'behance'];

    return (
        <>
            {icons.map(icon => <SocialLinkStyled key={icon}>
                {icon === 'linkedIn' ? <LinkedInIcon/>
                    : icon === 'telegram' ? <TelegramIcon/>
                        : icon === 'instagram' ? <InstagramIcon/>
                            : <BehanceIcon/>
                }
            </SocialLinkStyled>)}
        </>
    );
};