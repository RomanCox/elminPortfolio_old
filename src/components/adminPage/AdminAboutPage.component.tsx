import {v4 as uuidv4} from 'uuid';

import { useAboutPageState } from '../../state/aboutPage';
import {AdminTable} from './AdminTable.tsx';

import {
    AboutContextContainerStyled,
} from './AdminPage.styled.ts';


export interface ChapterType {
    id: string,
    title: string,
    values: Array<string>,
}

export interface ModalPropsType {
    openModal: () => void,
}

export const AdminAboutPage = ({ openModal }: ModalPropsType) => {
    const aboutContext = useAboutPageState();

    const chapters: Array<ChapterType> = [
        {
            id: uuidv4(),
            title: 'AboutPage navigation',
            values: aboutContext.chapters.map(chapter => chapter.label),
        },
        {
            id: uuidv4(),
            title: 'Description',
            values: aboutContext.description.map(string => string),
        },
        ...aboutContext.chapters.map(chapter => ({
            id: uuidv4(),
            title: chapter.label,
            values: chapter.items.map(item => item.title),
        }))
    ];

    return (
        <AboutContextContainerStyled>
            <AdminTable chapters={chapters} openModal={openModal} />
        </AboutContextContainerStyled>
    );
};