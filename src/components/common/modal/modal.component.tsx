import {ReactNode, useEffect, useState} from 'react';
import {
    ModalWrapperStyled,
} from './modal.styled.ts';

export type ModalPropsType = {
    children: ReactNode,
    closeModal: () => void,
    modalActive: boolean,
}

export const Modal = ({children, closeModal, modalActive}: ModalPropsType) => {
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    const closeHandler = () => {
        setIsAnimation(false);
        setTimeout(closeModal, 300)
    }

    useEffect(() => {
        if (modalActive) {
            setIsAnimation(true);
        }
    }, [modalActive])

    return (
        <ModalWrapperStyled isAnimation={isAnimation} onClick={closeHandler}>
            {children}
        </ModalWrapperStyled>
    );
};