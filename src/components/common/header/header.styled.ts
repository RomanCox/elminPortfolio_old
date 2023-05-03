import styled from 'styled-components';
import {BurgerStyledPropsType} from './burgerButton.tsx';

export const HeaderContainerStyled = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100px;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const BurgerButtonContainerStyled = styled.div`
  width: 250px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
`;

export const BurgerButtonStyled = styled.div`
  width: 30px;
  height: 30px;
  padding: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BarsStyled = styled.div<BurgerStyledPropsType>`
  width: 90%;
  height: 5px;
  border-radius: 2.5px;
  background-color: ${({isBurgerMenuOpened}) =>
          isBurgerMenuOpened ? 'transparent' : 'white'};
  position: relative;
  transition: ${({isBurgerMenuOpened}) =>
          isBurgerMenuOpened ? 'all 0ms 300ms' : 'none'};

  &:before {
    content: '';
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    position: absolute;
    left: 0;
    bottom: ${({isBurgerMenuOpened}) =>
            isBurgerMenuOpened ? '0' : '10px'};
    transform: ${({isBurgerMenuOpened}) =>
            isBurgerMenuOpened ? 'rotate(-45deg)' : 'none'};
    background-color: white;
    transition: ${({isBurgerMenuOpened}) =>
            isBurgerMenuOpened
                    ? 'bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                    : 'bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'};
  }

  &:after {
    content: '';
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    position: absolute;
    left: 0;
    top: ${({isBurgerMenuOpened}) => (isBurgerMenuOpened ? '0' : '10px')};
    transform: ${({isBurgerMenuOpened}) =>
            isBurgerMenuOpened ? 'rotate(45deg)' : 'none'};
    background-color: white;
    transition: ${({isBurgerMenuOpened}) =>
            isBurgerMenuOpened
                    ? 'top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                    : 'top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'};
  }
`;

export const LogoContainerStyled = styled.div`
  width: 400px;
  height: 100px;
`;

export const SocialLinksAndLangContainerStyled = styled.div`
  width: 250px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

export const SocialLinksContainerStyled = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LangContainerStyled = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LangStyled = styled.div`
  width: 30px;
  height: 30px;
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  cursor: pointer;
`;
