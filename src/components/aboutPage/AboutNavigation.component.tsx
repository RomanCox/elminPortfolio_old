// import {useState} from 'react';

import {useAboutPageState} from '../../state/aboutPage';
import {Title} from '../common/title/title.component.tsx';
import {DownloadIcon} from '../../assets/icons/downloadIcon.tsx';
import photo from '../../assets/images/avatar.webp';

import {
    NavigationStyled, NavigationItemStyled, DescriptionContainerStyled, DescriptionStyled, ChaptersStyled,
    TitleContainerStyled, ImageContainer, ImageStyled, ButtonBlockContainerStyled, ButtonContainerStyled,
    CVButtonStyled, CVButtonBorderStyled, BottomLineStyled, NavigationContainerStyled,
} from './aboutPage.styled.ts';


interface AboutNavigationPropsType {
    activeChapter: string,
    chooseChapter: (value: string) => void,
    openModal: () => void,
}

export const AboutNavigation = ({ activeChapter, chooseChapter, openModal }: AboutNavigationPropsType) => {
    //const [activeChapter, setActiveChapter] = useState<string>('Education');

    const context = useAboutPageState();

    const navigationChapters = context.chapters.map(chapter => chapter.label);

    // const chooseChapter = (value: string) => {
    //     setActiveChapter(value);
    //     value.scrollIntoView({behavior: 'smooth', block: 'start'})
    // };

    return (
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
                                              href={`#${chapter}`}
                                              $isActive={chapter === activeChapter}
                                              onClick={() => chooseChapter(chapter)}>
                            <div>{chapter}</div>
                        </NavigationItemStyled>)
                    }
                </NavigationStyled>
                <DescriptionContainerStyled>
                    {context.description.map(text => <DescriptionStyled key={text}>
                        {text}
                    </DescriptionStyled>)}
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