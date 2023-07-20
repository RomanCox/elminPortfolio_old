import {useEffect, useRef} from 'react';

import {Title} from '../common/title/Title.component.tsx';

import {
    ContentContainerStyled,
    ContentTitleContainerStyled,
    DescriptionsContainerStyled,
    EducationContainerStyled,
    TextBoldStyled,
    TextContainerStyled,
    TextStyled,
    YearsStyled,
} from './AboutPage.styled.ts';

import {AboutChapterType} from "../../state/aboutPage/contextProvider.tsx";

interface AboutContentPropsType {
    chapter: AboutChapterType,
    activeChapter: string,
}

export const AboutContent = ({chapter, activeChapter}: AboutContentPropsType) => {
    const chapterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chapterRef.current && chapterRef.current?.innerText.indexOf(activeChapter) !== -1) {
            chapterRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }, [chapterRef, activeChapter])

    return (
        <ContentContainerStyled ref={chapterRef}>
            <ContentTitleContainerStyled>
                <Title variant='h1' color='#000' text={chapter.label}/>
            </ContentTitleContainerStyled>
            {chapter.items.map(item =>
                <EducationContainerStyled key={item.id}>
                    <YearsStyled>{item.year}</YearsStyled>
                    <TextContainerStyled>
                        <TextBoldStyled>
                            {item.title}
                        </TextBoldStyled>
                        <DescriptionsContainerStyled>
                            {item.description.map(desc => <TextStyled key={desc}>{desc}</TextStyled>)}
                        </DescriptionsContainerStyled>
                    </TextContainerStyled>
                </EducationContainerStyled>
            )}
        </ContentContainerStyled>
    )
}