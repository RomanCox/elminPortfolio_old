import {useState} from 'react';

import {Header} from '../common/header/Header.component.tsx';
import {BurgerMenu} from '../common/burgerMenu/BurgerMenu.component.tsx';
import {AboutContentContainer} from './AboutContent.container.tsx';
import {Footer} from '../common/footer/Footer.component.tsx';
import {Modal} from '../common/modal/Modal.component.tsx';
import {AboutNavigation} from './AboutNavigation.component.tsx';
import {DownloadCV} from './DownloadCV.component.tsx';

import {AboutPageContainerStyled,} from './AboutPage.styled.ts';


export const AboutPage = () => {
    const [modalIsShow, setModalIsShow] = useState<boolean>(false);
    const [activeChapter, setActiveChapter] = useState<string>('Education');
    const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

    const menuSwitch = () => {
        setMenuIsShow(!menuIsShow);
    }

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
            <BurgerMenu menuIsShow={menuIsShow}/>
            <Header menuIsShow={menuIsShow} menuSwitch={menuSwitch}/>
            <AboutNavigation activeChapter={activeChapter} chooseChapter={chooseChapter} openModal={openModal}/>
            <AboutContentContainer activeChapter={activeChapter}/>
            <Footer/>
        </AboutPageContainerStyled>
    );
};