import {useState, ChangeEvent} from 'react';
import {TextField} from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import {useAboutPageDispatch} from '../../state/aboutPage';
import {ActionPoints} from '../../state/aboutPage/reducer.ts';

import {
    ButtonStyled, CardStyled,
} from './AdminPage.styled.ts';



export const AddChapter = () => {
    const [value, setValue] = useState<string>('');
    const dispatch = useAboutPageDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setValue(e.currentTarget.value);
    }

    const onClickHandler = () => {
        dispatch({type: ActionPoints.ADD_NAVIGATION_CHAPTER, payload: {title: value}})
    }

    return (
        <CardStyled>
            <TextField label='Enter value' variant='filled' value={value} onChange={onChangeHandler} />
            <ButtonStyled variant='contained' onClick={onClickHandler} startIcon={<AddCircleOutlineRoundedIcon/>}>
                Add item
            </ButtonStyled>
        </CardStyled>
    );
};