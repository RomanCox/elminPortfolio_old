import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const EnterPageContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
  
  @media screen and (max-width: 879px) {
    padding: 20px 0;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media screen and (max-width: 439px) {
    gap: 20px;
  }
`;

export const PhotoContainerStyled = styled.div`
  width: 400px;
  height: 500px;
  padding: 40px;
  background: #000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 879px) {
    width: 100%;
    height: auto;
    max-height: 500px;
  }

  @media screen and (max-width: 439px) {
    padding: 20px;
    box-sizing: border-box;
  }
`;

export const PhotoStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ContentContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 879px) {
    height: 280px;
    padding-left: calc(10px + (30 - 10) * (100vw - 320px) / (879 - 320));
    padding-right: calc(10px + (30 - 10) * (100vw - 320px) / (879 - 320));
    gap: 20px;
  }
`;

export const MobileLogoContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 439px) {
    padding: 0 10px;
  }
`;

export const LogoContainerStyled = styled.div`
  width: 400px;
  height: 100px;
  font-size: 16px;
`;

export const NameContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #000;
`;

export const NameStyled = styled.div`
  width: 100%;
  font-family: Libre Franklin, sans-serif;
  font-size: 42px;
  line-height: 50px;
  font-weight: 700;
  text-align: start;

  @media screen and (max-width: 879px) {
    text-align: center;
  }

  @media screen and (max-width: 879px) {
    font-size: 36px;
    line-height: 43px;
  }
`;

export const DescriptionContainerStyled = styled.div`
  width: 100%;
  font-family: Libre Franklin, sans-serif;
  font-size: 22px;
  line-height: 34px;
  text-align: start;

  @media screen and (max-width: 879px) {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
`;

export const ButtonContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 639px) {
    gap: 5px;
  }
`;

export const ButtonStyled = styled(NavLink)`
  width: 100%;
  height: 35px;
  padding: 5px;
  background: #000;
  color: #fff;
  border-radius: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 879px) {
    width: 265px;
  }

  @media screen and (max-width: 439px) {
    width: 220px;
  }
`;

export const ButtonDescriptionContainerStyled = styled.span`
  width: 100%;
  color: rgba(0, 0, 0, 0.55);
  text-align: center;
  font-size: 16px;
  line-height: 26px;
`;
