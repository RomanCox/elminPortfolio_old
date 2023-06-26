import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface MenuContainerStyledPropsType {
    $menuIsShow: boolean,
}

export const MenuContainerStyled = styled.div<MenuContainerStyledPropsType>`
  width: 400px;
  height: 100vh;
  padding: 130px 30px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  opacity: ${({ $menuIsShow }) => $menuIsShow ? '1' : '0'};
  transform: ${({ $menuIsShow }) => $menuIsShow ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 0.5s ease-in-out 0s;
`;

export const NavbarStyled = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 20px;
	list-style: none;
`;

export const NavbarItemStyled = styled(NavLink)`
  display: list-item;
  text-align: left;
  font-family: Libre Franklin, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #fff;
    font-size: 26px;
    font-weight: 600;
  }

  &:visited {
    color: #fff;
  }
`;
