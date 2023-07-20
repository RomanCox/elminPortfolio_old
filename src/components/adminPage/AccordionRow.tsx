import {SyntheticEvent} from 'react';
import {IconButton, Typography} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import {ButtonStyled} from './AdminPage.styled.ts';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AddIconAndTextStyled,
    CardStyled,
} from './Accordion.styled.ts';
import {ChapterType, ModalPropsType} from './AdminAboutPage.component.tsx';

interface AccordionRowPropsType {
    chapter: ChapterType,
    accordionTitle: string | false,
    onChangeHandler: (title: string) => (event: SyntheticEvent, isExpanded: boolean) => void,
}

export const AccordionRow = ({ chapter, accordionTitle, onChangeHandler, openModal }: AccordionRowPropsType & ModalPropsType ) => {

    return (
        <Accordion expanded={accordionTitle === chapter.title} onChange={onChangeHandler(chapter.title)}>
            <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon/>}
                aria-controls='panel1a-content'
                id='panel1a-header'
            >
                <Typography>{chapter.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {chapter.values.map(value =>
                    <CardStyled>
                        <AddIconAndTextStyled>
                            <IconButton aria-label='delete'>
                                <RemoveCircleOutlineRoundedIcon color='error'/>
                            </IconButton>
                            <Typography sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>{value}</Typography>
                        </AddIconAndTextStyled>
                        <IconButton aria-label='delete'>
                            <EditRoundedIcon/>
                        </IconButton>
                    </CardStyled>
                )}
                <ButtonStyled variant='contained' onClick={openModal} fullWidth={false} startIcon={<AddCircleOutlineRoundedIcon/>}>
                    Add item
                </ButtonStyled>
            </AccordionDetails>
        </Accordion>
    );
};