import styled from 'styled-components';

export const AboutPageContainerStyled = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;

export const NavigationContainerStyled = styled.div`
  width: 100%;
  height: 300px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
`;

export const TitleContainerStyled = styled.div`
  width: 250px;
  height: 87px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  font-family: Libre Franklin, sans-serif;
  font-size: 56px;
  line-height: 67px;
  font-weight: 700;
  text-align: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 325px;
  padding: 20px;
  position: absolute;
  top: 130px;
  z-index: 2;
  display: flex;
  align-items: center;
  background: #000;
  border-radius: 7px;
  box-sizing: border-box;
`;

export const ImageStyled = styled.img`
    width: 100%;
    height: auto;
`;

export const ChaptersStyled = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
`;

export const NavigationStyled = styled.div`
  height: 87px;
  padding-bottom: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
`;

export const NavigationItemStyled = styled.div<{isActive: boolean}>`
  width: 175px;
  //height: 100%;
  font-family: Libre Franklin, sans-serif;
  //font-size: 24px;
  font-size: ${({ isActive }) => isActive ? '32px' : '24px'};
  //line-height: 29px;
  line-height: ${({ isActive }) => isActive ? '38px' : '29px'};
  //font-weight: 500;
  font-weight: ${({ isActive }) => isActive ? '700' : '500'};
  text-align: center;
  position: relative;
  cursor: pointer;
`;

export const CVButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 7px;
  border: 2px solid #000;
  background: #828282;
  color: #000;
  font-family: Libre Franklin, sans-serif;
  font-size: 19px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  position: relative;

  &:hover, &:active, &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const DescriptionContainerStyled = styled.div`
  color: #000;
  font-family: Libre Franklin, sans-serif;
  font-size: 19px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  position: relative;

  &:hover, &:active, &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const BottomLineStyled = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: #CDCCD7;
`;