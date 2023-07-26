import styled from 'styled-components';
import {BurgerStyledPropsType} from './BurgerButton.tsx';
import {NavLink} from 'react-router-dom';

interface HeaderPropsType {
    $homePage?: boolean,
}

export const HeaderContainerStyled = styled.div<HeaderPropsType>`
  width: 100vw;
  max-width: 1920px;
  padding: 20px 30px 15px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: ${({ $homePage }) => $homePage? 'center' : 'flex-end'};
  box-sizing: border-box;
  background: ${({ $homePage }) => $homePage ? 'transparent)' : '#fff'};

  @media screen and (max-width: 899px) {
    align-items: center;
  }
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
  background-color: ${({ $isBurgerMenuOpened,  $homePage}) =>
          $isBurgerMenuOpened ? 'transparent' : $homePage ? '#fff' : '#000'};
  position: relative;
  transition: ${({ $isBurgerMenuOpened }) =>
          $isBurgerMenuOpened ? 'all 0ms 300ms' : 'none'};

  &:before {
    content: '';
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    position: absolute;
    left: 0;
    bottom: ${({ $isBurgerMenuOpened }) =>
            $isBurgerMenuOpened ? '0' : '10px'};
    transform: ${({ $isBurgerMenuOpened }) =>
            $isBurgerMenuOpened ? 'rotate(-45deg)' : 'none'};
    background-color: ${({ $homePage }) => $homePage ? '#fff' : '#000'};
    transition: ${({ $isBurgerMenuOpened }) =>
            $isBurgerMenuOpened
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
    top: ${({ $isBurgerMenuOpened }) => ($isBurgerMenuOpened ? '0' : '10px')};
    transform: ${({ $isBurgerMenuOpened }) =>
            $isBurgerMenuOpened ? 'rotate(45deg)' : 'none'};
    background-color: ${({ $homePage }) => $homePage ? '#fff' : '#000'};
    transition: ${({ $isBurgerMenuOpened }) =>
            $isBurgerMenuOpened
                    ? 'top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                    : 'top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'};
  }
`;

export const LogoContainerStyled = styled.div<HeaderPropsType>`
  width: ${({ $homePage = false }) => $homePage ? '300px' : '200px'};
  height: ${({ $homePage = false }) => $homePage ? '75px' : '50px'};
  font-size: ${({ $homePage = false }) => $homePage ? '12px' : '8px'};
`;

export const SocialLinksAndLangContainerStyled = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const SocialLinksContainerStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const LangContainerStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 7px;
`;

export const LangStyled = styled.div`
  height: 100%;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  cursor: pointer;
`;

export const SeparatorStyled = styled.div`
  width: 2px;
  height: 100%;
  background: #fff;
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
    left: 0;
    z-index: 1;
    background: #000;
    transition: all 0.25s ease-in-out 0s;
  }

  &:hover {
    color: #000;
    
    &:after {
      width: 103%;
    }
  }

  &:visited {
    color: #000;
  }
  
  //&:last-child {
  //  padding-right: 30px;
  //}

  @media screen and (max-width: 1279px) {
    padding: 0 20px;
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
