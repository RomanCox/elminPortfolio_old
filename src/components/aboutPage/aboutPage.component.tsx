import {useState} from 'react';

import {Header} from '../common/header/header.component.tsx';
import {AboutContentContainer} from './AboutContent.container.tsx';
import {Footer} from '../common/footer/footer.component.tsx';

import {AboutPageContainerStyled,} from './aboutPage.styled.ts';
import {Modal} from '../common/modal/modal.component.tsx';
import {AboutNavigation} from "./AboutNavigation.component.tsx";
import {DownloadCV} from './DownloadCV.component.tsx';

export const AboutPage = () => {
    const [modalIsShow, setModalIsShow] = useState<boolean>(false);
    const [activeChapter, setActiveChapter] = useState<string>('Education');

    const chooseChapter = (value: string) => {
        setActiveChapter(value);
    };

    const openModal = () => {
        setModalIsShow(true);
    }

    const closeModal = () => {
        setModalIsShow(false);
    }

    return (
        <AboutPageContainerStyled>
            {modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}> <DownloadCV/> </Modal>}
            <Header/>
            <AboutNavigation activeChapter={activeChapter} chooseChapter={chooseChapter} openModal={openModal}/>
            <AboutContentContainer activeChapter={activeChapter}/>
            <Footer/>
        </AboutPageContainerStyled>
    );
};