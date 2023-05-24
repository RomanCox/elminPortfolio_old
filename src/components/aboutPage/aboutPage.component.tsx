import {useState} from 'react';

import {Header} from '../common/header/header.component.tsx';
import {Footer} from '../common/footer/footer.component.tsx';
import {Title} from '../common/title/title.component.tsx';
import {useAboutPageState} from '../../state/aboutPage';
import photo from '../../assets/images/avatar.webp';

import {
    AboutPageContainerStyled,
    NavigationContainerStyled,
    TitleContainerStyled,
    ImageContainer,
    ImageStyled,
    ChaptersStyled,
    NavigationStyled,
    NavigationItemStyled,
    CVButtonStyled,
    DescriptionContainerStyled,
    DescriptionStyled,
    BottomLineStyled,
    ContentContainerStyled,
    ContentTitleContainerStyled,
    EducationContainerStyled,
    YearsStyled,
    TextContainerStyled, TextStyled, TextBoldStyled,
} from './aboutPage.styled.ts';

export const AboutPage = () => {

    const [activeChapter, setActiveChapter] = useState<string>('Education');

    const context = useAboutPageState();

    const navigationChapters = context.chapters.map(chapter => chapter.label);

    const education = context.chapters.filter(chapter => chapter.label === 'Education')[0];

    const chooseChapter = (value: string) => {
        setActiveChapter(value);
    }

    return (
        <AboutPageContainerStyled>
            <Header/>
            <NavigationContainerStyled>
                <TitleContainerStyled>
                    <Title variant='h1' color='#000' text={context.title}/>
                    <ImageContainer>
                        <ImageStyled src={photo}/>
                    </ImageContainer>
                </TitleContainerStyled>
                <ChaptersStyled>
                    <NavigationStyled>
                        {navigationChapters.map(chapter =>
                            <NavigationItemStyled key={chapter}
                                                  isActive={chapter === activeChapter}
                                                  onClick={() => chooseChapter(chapter)}>
                                {chapter}
                            </NavigationItemStyled>)
                        }
                        <CVButtonStyled>Download CV</CVButtonStyled>
                    </NavigationStyled>
                    <DescriptionContainerStyled>
                        {context.description.map(text => <DescriptionStyled key={text}>
                            {text}
                        </DescriptionStyled>)}
                    </DescriptionContainerStyled>
                </ChaptersStyled>
                <BottomLineStyled/>
            </NavigationContainerStyled>
            <ContentContainerStyled>
                <ContentTitleContainerStyled>
                    <Title variant='h1' color='#000' text={education.label}/>
                </ContentTitleContainerStyled>
                {education.items.map(item => <EducationContainerStyled key={item.id}>
                    <YearsStyled>{item.year}</YearsStyled>
                    <TextContainerStyled>
                        <TextBoldStyled>
                            {item.title}
                        </TextBoldStyled>
                        <TextStyled>
                            {item.description[0]}
                        </TextStyled>
                    </TextContainerStyled>
                </EducationContainerStyled>)}
            </ContentContainerStyled>
            <Footer/>
        </AboutPageContainerStyled>
    );
};