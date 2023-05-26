import styled from 'styled-components';

interface ModalStyledPropsType {
    isAnimation: boolean,
}

export const ModalWrapperStyled = styled.div<ModalStyledPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${({isAnimation}) => isAnimation ? '1' : '0'};
  z-index: 1000;
  animation: ${({ isAnimation }) => isAnimation ? 'on 0.3s ease 0s 1' : 'off 0.3s ease 0s 1'};
  
  @keyframes on {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes of {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
