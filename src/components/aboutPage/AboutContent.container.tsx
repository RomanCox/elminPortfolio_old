import {useEffect, useRef} from 'react';

import {useAboutPageState} from '../../state/aboutPage';
import {AboutContent} from './AboutContent.component.tsx';

import {AllContentContainerStyled, AllContentWrapperStyled, GradientStripeStyled} from './AboutPage.styled.ts';

interface AboutContentPropsType {
    activeChapter: string,
}

export const AboutContentContainer = ({activeChapter}: AboutContentPropsType) => {
    const chapters = useAboutPageState().chapters;

    const chaptersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chaptersRef.current) {
            chaptersRef.current.scrollBy({top: -50, left: 0, behavior: 'smooth'});
        }
    }, [chaptersRef])

    return (
        <AllContentWrapperStyled>
            <GradientStripeStyled/>
            <AllContentContainerStyled ref={chaptersRef}>
                {chapters.map(chapter =>
                    <AboutContent key={chapter.id} chapter={chapter} activeChapter={activeChapter}/>
                )}
            </AllContentContainerStyled>
            <GradientStripeStyled $reverse/>
        </AllContentWrapperStyled>
    );
};