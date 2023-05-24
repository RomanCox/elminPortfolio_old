import styled from 'styled-components';
import {BurgerStyledPropsType} from './burgerButton.tsx';
import {NavLink} from "react-router-dom";

interface HeaderPropsType {
    homePage?: boolean,
}

export const HeaderContainerStyled = styled.div<HeaderPropsType>`
  width: 100%;
  max-width: 100vw;
  height: 100px;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: ${({homePage = false}) => homePage ? 'center' : 'flex-end'};
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
          isBurgerMenuOpened ? 'transparent' : '#fff'};
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
    background-color: #fff;
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
    background-color: #fff;
    transition: ${({isBurgerMenuOpened}) =>
            isBurgerMenuOpened
                    ? 'top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                    : 'top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'};
  }
`;

export const LogoContainerStyled = styled.div<HeaderPropsType>`
  width: ${({homePage = false}) => homePage ? '300px' : '200px'};
  height: ${({homePage = false}) => homePage ? '75px' : '50px'};
  font-size: ${({homePage = false}) => homePage ? '12px' : '8px'};
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
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  cursor: pointer;
`;

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NavbarItemStyled = styled(NavLink)`
  padding: 0 40px;
  box-sizing: border-box;
  position: relative;
  color: #000;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  &:after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -15px;
    left: -5%;
    z-index: 1;
    background: #000;
    transition: all 0.25s ease-in-out 0s;
  }

  &:hover {
    color: #000;
    
    &:after {
      width: 110%;
    }
  }

  &:visited {
    color: #000;
  }
`;

export const BottomLineStyled = styled.div`
  width: calc(100% + 20px);
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #CDCCD7;
`;
