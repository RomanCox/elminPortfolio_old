import {AllContentContainerStyled} from './aboutPage.styled.ts';

import {useAboutPageState} from '../../state/aboutPage';
import {AboutContent} from "./AboutContent.component.tsx";

interface AboutContentPropsType {
    activeChapter: string,
}

export const AboutContentContainer = ({activeChapter}: AboutContentPropsType) => {
    const chapters = useAboutPageState().chapters;

    return (
        <AllContentContainerStyled>
            {chapters.map(chapter =>
                <AboutContent key={chapter.id} chapter={chapter} activeChapter={activeChapter}/>
            )}
        </AllContentContainerStyled>
    );
};