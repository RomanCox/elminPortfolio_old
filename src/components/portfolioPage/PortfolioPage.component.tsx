import {usePortfolioPageState} from '../../state/portfolioPage';

import {Header} from '../common/header/Header.component.tsx';
import {Footer} from '../common/footer/Footer.component.tsx';

import {PortfolioPageContainerStyled, TitleContainerStyled} from './PortfolioPage.styled.ts';
import {Title} from '../common/title/Title.component.tsx';

export const PortfolioPage = () => {
    const context = usePortfolioPageState();
    console.log(context)

    return (
        <PortfolioPageContainerStyled>
            <Header/>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text={context.title}/>
            </TitleContainerStyled>
            <Footer/>
        </PortfolioPageContainerStyled>
    );
};