import {SyntheticEvent, useState} from 'react';

import {AccordionRow} from './AccordionRow.tsx';

import {AdminTableContainerStyled,} from './AdminPage.styled.ts';

import {ChapterType, ModalPropsType} from './AdminAboutPage.component.tsx';

interface AdminTablePropsType {
    chapters: Array<ChapterType>,
}

export const AdminTable = ({chapters, openModal}: AdminTablePropsType & ModalPropsType) => {
    const [accordionTitle, setAccordionTitle] = useState<string | false>(false);

    const onChangeHandler = (title: string) => (event: SyntheticEvent, isExpanded: boolean) => {
        console.log(event.currentTarget);
        setAccordionTitle(isExpanded ? title : false);
    };

    return (
        <AdminTableContainerStyled>
            {chapters.map(chapter =>
                <AccordionRow
                    key={chapter.id}
                    chapter={chapter}
                    accordionTitle={accordionTitle}
                    onChangeHandler={onChangeHandler}
                    openModal={openModal}
                />)}
        </AdminTableContainerStyled>
    );
};