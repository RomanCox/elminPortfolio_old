import {useAboutPageState} from '../../state/aboutPage';
import {Title} from '../common/title/Title.component.tsx';
import {DownloadIcon} from '../../assets/icons/downloadIcon.tsx';
import photo from '../../assets/images/photo/avatar.webp';

import {
    BottomLineStyled,
    ButtonBlockContainerStyled,
    ButtonContainerStyled,
    ChaptersStyled,
    CVButtonBorderStyled,
    CVButtonStyled,
    DescriptionContainerStyled,
    ImageContainer,
    ImageStyled,
    NavigationContainerStyled,
    NavigationItemsContainerStyled,
    NavigationItemStyled,
    TitleContainerStyled,
} from './AboutPage.styled.ts';


interface AboutNavigationPropsType {
    activeChapter: string,
    chooseChapter: (value: string) => void,
    openModal: () => void,
}

export const AboutNavigation = ({activeChapter, chooseChapter, openModal}: AboutNavigationPropsType) => {
    const context = useAboutPageState();

    const navigationChapters = context.chapters.map(chapter => chapter.label);

    return (
        <NavigationContainerStyled>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text={context.title}/>
                <ImageContainer>
                    <ImageStyled src={photo}/>
                </ImageContainer>
            </TitleContainerStyled>
            <ChaptersStyled>
                <NavigationItemsContainerStyled>
                    {navigationChapters.map(chapter =>
                        <NavigationItemStyled
                            key={chapter}
                            $isActive={chapter === activeChapter}
                            onClick={() => chooseChapter(chapter)}
                        >
                            <div>{chapter}</div>
                        </NavigationItemStyled>)
                    }
                </NavigationItemsContainerStyled>
                <DescriptionContainerStyled>
                    {context.description.map(text => <div key={text}>
                        {text}
                    </div>)}
                </DescriptionContainerStyled>
            </ChaptersStyled>
            <ButtonBlockContainerStyled>
                <ButtonContainerStyled>
                    <CVButtonStyled onClick={openModal}>
                        <CVButtonBorderStyled width='100px' height='40px' viewBox='0 0 100 40'>
                            <polyline points='1,39 99,39 99,1 1,1 1,39'/>
                        </CVButtonBorderStyled>
                        <DownloadIcon/>
                        CV
                    </CVButtonStyled>
                </ButtonContainerStyled>
            </ButtonBlockContainerStyled>
            <BottomLineStyled/>
        </NavigationContainerStyled>
    );
};