import {useState} from 'react';

import {Header} from '../common/header/header.component.tsx';
import {Footer} from '../common/footer/footer.component.tsx';
import {Title} from '../common/title/title.component.tsx';
import {useAboutPageState} from '../../state/aboutPage';
import photo from '../../assets/images/avatar.webp';

import {
    AboutPageContainerStyled,
    NavigationContainerStyled,
    TitleContainerStyled,
    ImageContainer,
    ImageStyled,
    ChaptersStyled,
    NavigationStyled,
    NavigationItemStyled,
    CVButtonStyled,
    DescriptionContainerStyled,
    DescriptionStyled,
    BottomLineStyled,
    ContentContainerStyled,
    ContentTitleContainerStyled,
    EducationContainerStyled,
    YearsStyled,
    TextContainerStyled,
    TextStyled,
    TextBoldStyled,
    CVButtonBorderStyled,
    ButtonBlockContainerStyled,
    ButtonContainerStyled, CVDownloadMenuContainerStyled, CVDownloadStyled, DownloadMenuTitleContainer,
} from './aboutPage.styled.ts';
import {Modal} from '../common/modal/modal.component.tsx';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';

export const AboutPage = () => {
    const [activeChapter, setActiveChapter] = useState<string>('Education');
    const [modalIsShow, setModalIsShow] = useState<boolean>(false);

    const context = useAboutPageState();

    const navigationChapters = context.chapters.map(chapter => chapter.label);

    const education = context.chapters.filter(chapter => chapter.label === 'Education')[0];

    const chooseChapter = (value: string) => {
        setActiveChapter(value);
    }

    const openModal = () => {
        setModalIsShow(true);
    }


    const closeModal = () => {
        setModalIsShow(false);
    }

    return (
        <AboutPageContainerStyled>
            {modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}>
                <CVDownloadMenuContainerStyled>
                    <DownloadMenuTitleContainer>
                        <Title variant='h2' color='#fff' text='Choose CV' />
                    </DownloadMenuTitleContainer>
                    <CVDownloadStyled href='/assets/files/CV_ELmin_eng.pdf' download>
                        <PictureAsPdfRoundedIcon/>
                        Download English CV
                    </CVDownloadStyled>
                    <CVDownloadStyled href='/assets/files/CV_ELmin_rus.pdf' download>
                        <PictureAsPdfRoundedIcon/>
                        Download Russian CV
                    </CVDownloadStyled>
                </CVDownloadMenuContainerStyled>
            </Modal>}
            <Header/>
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
                                                  isActive={chapter === activeChapter}
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
                            <CVButtonBorderStyled width='175px' height='40px' viewBox='0 0 175 40'>
                                <polyline points='1,39 174,39 174,1 1,1 1,39'/>
                            </CVButtonBorderStyled>
                            Download CV
                        </CVButtonStyled>
                    </ButtonContainerStyled>
                </ButtonBlockContainerStyled>
                <BottomLineStyled/>
            </NavigationContainerStyled>
            <ContentContainerStyled>
                <ContentTitleContainerStyled>
                    <Title variant='h1' color='#000' text={education.label}/>
                </ContentTitleContainerStyled>
                {education.items.map(item => <EducationContainerStyled key={item.id}>
                    <YearsStyled>{item.year}</YearsStyled>
                    <TextContainerStyled>
                        <TextBoldStyled>
                            {item.title}
                        </TextBoldStyled>
                        <TextStyled>
                            {item.description[0]}
                        </TextStyled>
                    </TextContainerStyled>
                </EducationContainerStyled>)}
            </ContentContainerStyled>
            <Footer/>
        </AboutPageContainerStyled>
    );
};