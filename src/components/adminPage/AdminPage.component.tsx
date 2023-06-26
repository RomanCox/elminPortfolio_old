import {SyntheticEvent, useState} from 'react';

import {
    AdminContainerStyled,
    ContentContainerStyled,
    SubTitleContainerStyled,
    TabsContainerStyled,
    TabsStyled,
    TabStyled,
    TitleContainerStyled
} from './AdminPage.styled.ts';
import {Title} from '../common/title/Title.component.tsx';

export const AdminPage = () => {
    const [value, setValue] = useState(0);

    const tabsClicker = (e: SyntheticEvent) => {
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
        </AdminContainerStyled>
    );
};