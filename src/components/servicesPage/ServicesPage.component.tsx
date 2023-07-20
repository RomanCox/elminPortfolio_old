import {useServicesPageState} from '../../state/servicesPage';

import {Header} from '../common/header/Header.component.tsx';
import {Footer} from '../common/footer/Footer.component.tsx';

import {ServicesPageContainerStyled, TitleContainerStyled} from './ServicesPage.styled.ts';
import {Title} from '../common/title/Title.component.tsx';


export const ServicesPage = () => {
    const context = useServicesPageState();
    console.log(context)

    return (
        <ServicesPageContainerStyled>
            <Header/>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text={context.title}/>
            </TitleContainerStyled>
            <Footer/>
        </ServicesPageContainerStyled>
    );
};