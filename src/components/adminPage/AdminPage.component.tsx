import {SyntheticEvent, useState} from 'react';
import {Dialog} from '@mui/material';

import {Title} from '../common/title/Title.component.tsx';
import {AdminAboutPage} from './AdminAboutPage.component.tsx';
import {AddChapter} from './AddChapter.component.tsx';

import {
    AdminContainerStyled,
    ContentContainerStyled,
    SubTitleContainerStyled,
    TabsContainerStyled,
    TabsStyled,
    TabStyled,
    TitleContainerStyled,
} from './AdminPage.styled.ts';

export const AdminPage = () => {
    const [value, setValue] = useState<number>(0);
    const [chapter, setChapter] = useState<string>('about');
    const [isShow, setIsShow] = useState<boolean>(false);

    const openModal = () => {
        setIsShow(true);
    }

    const closeModal = () => {
        setIsShow(false);
    }

    const tabsClicker = (e: SyntheticEvent) => {
        //const value = e.currentTarget ? e.currentTarget.innerText : '';
        const rawText = e.currentTarget.innerHTML;
        const value = rawText.slice(0, e.currentTarget.innerHTML.indexOf('<'));
        console.log(value);
        setChapter(value.toLowerCase());
        const newValue: number = e.currentTarget.id.length ? Number(e.currentTarget.id.at(-1)) : 0;
        setValue(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabPanel-${index}`,
        };
    }

    return (
        <AdminContainerStyled>
            <TitleContainerStyled>
                <Title variant='h1' color='#000' text='Here you can change your site!'/>
            </TitleContainerStyled>
            <SubTitleContainerStyled>
                <Title variant='h3' color='#000' text='Choose chapter, which you want change:'/>
            </SubTitleContainerStyled>
            <ContentContainerStyled>
                <TabsContainerStyled>
                    <TabsStyled value={value} onChange={tabsClicker} aria-label='basic tabs example'>
                        <TabStyled label='About' {...a11yProps(0)}></TabStyled>
                        <TabStyled label='Portfolio' {...a11yProps(1)}></TabStyled>
                        <TabStyled label='Services' {...a11yProps(2)}></TabStyled>
                        <TabStyled label='Contact' {...a11yProps(3)}></TabStyled>
                    </TabsStyled>
                </TabsContainerStyled>
            </ContentContainerStyled>
            {chapter === 'about' ? <AdminAboutPage openModal={openModal}/>
                : null
            }
            <Dialog onClose={closeModal} open={isShow}>
                <AddChapter/>
            </Dialog>
        </AdminContainerStyled>
    );
};