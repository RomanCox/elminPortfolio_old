import {useServicesPageState} from '../../state/servicesPage';

import {Header} from '../common/header/Header.component.tsx';
import {Footer} from '../common/footer/Footer.component.tsx';

import {
    ContextContainerStyled,
    DescriptionContainerStyled,
    PictureContainerStyled,
    ServiceContainerStyled,
    ServiceDescriptionStyled,
    ServiceLabelStyled,
    ServicesPageContainerStyled,
    ServiceTitleStyled,
    TitleContainerStyled,
} from './ServicesPage.styled.ts';
import {Title} from '../common/title/Title.component.tsx';

export const ServicesPage = () => {
    const context = useServicesPageState();

    return (
        <ServicesPageContainerStyled>
            <Header/>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text={context.title}/>
            </TitleContainerStyled>
            <ContextContainerStyled>
                {context.services.map(service =>
                    <ServiceContainerStyled>
                        <PictureContainerStyled/>
                        <DescriptionContainerStyled>
                            <ServiceTitleStyled>{service.title}</ServiceTitleStyled>
                            <ServiceLabelStyled>{service.label}</ServiceLabelStyled>
                            {service.description.map((description, index) =>
                                <ServiceDescriptionStyled key={description} $first={index === 0}>
                                    {description}
                                </ServiceDescriptionStyled>
                            )}
                        </DescriptionContainerStyled>
                    </ServiceContainerStyled>
                )}
            </ContextContainerStyled>
            <Footer/>
        </ServicesPageContainerStyled>
    );
};