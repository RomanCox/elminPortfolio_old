import styled from 'styled-components';

export const AboutPageContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 85px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;

export const CVDownloadMenuContainerStyled = styled.div`
  padding: 0 0 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  background-color: #121212;
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));

  box-shadow: rgba(0, 0, 0, 0.2) 0 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
`;

export const DownloadMenuTitleContainer = styled.div`
  padding: 16px 24px;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 1.6;
  letter-spacing: 0.12px;
  font-weight: 500;
  text-align: center;
  user-select: none;
`;

export const CVDownloadStyled = styled.a`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  font-weight: 500;
  text-align: center;
  user-select: none;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  
  &:hover {
    background-color: #525252;
    color: #fff;
  }
`;

export const NavigationContainerStyled = styled.div`
  width: 100%;
  height: 300px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
`;

export const TitleContainerStyled = styled.div`
  width: 225px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 20px;
  font-family: Libre Franklin, sans-serif;
  font-size: 56px;
  line-height: 67px;
  font-weight: 700;
  text-align: center;
  user-select: none;
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
  width: 100%;
  height: 100%;
  padding-left: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const NavigationStyled = styled.div`
  width: 100%;
  height: 60px;
  padding-left: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const NavigationItemStyled = styled.div<{isActive: boolean}>`
  width: 175px;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  font-family: Libre Franklin, sans-serif;
  font-size: ${({ isActive }) => isActive ? '32px' : '24px'};
  line-height: 120%;
  font-weight: ${({ isActive }) => isActive ? '700' : '500'};
  text-align: center;
  user-select: none;
  cursor: pointer;

  div {
    height: 40px;
    display: flex;
    align-items: flex-end;
  }
`;

export const ButtonBlockContainerStyled = styled.div`
  height: 100%;
  padding: 5px 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ButtonContainerStyled = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CVButtonStyled = styled.button`
  width: 175px;
  height: 40px;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: 0;
  color: #000;
  position: relative;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 120%;
  font-weight: 500;
  text-align: center;
  user-select: none;

  &:hover, &:active, &:focus {
    outline: none;
  }
  
  &:hover, svg:hover {
    stroke-dashoffset: 0;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const CVButtonBorderStyled = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  fill: transparent;
  stroke: #000;
  stroke-dasharray: 430;
  stroke-dashoffset: 430;
  transition: 0.5s ease-in-out;

  &:hover {
      stroke-dashoffset: 0;
  }
`;

export const DescriptionContainerStyled = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-align: center;
  user-select: none;
`;

export const DescriptionStyled = styled.div`

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

export const ContentContainerStyled = styled.div`
  width: 100%;
  padding-left: 450px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
`;

export const ContentTitleContainerStyled = styled.div`
  width: 250px;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  font-family: Libre Franklin, sans-serif;
  font-size: 48px;
  line-height: 58px;
  font-weight: 700;
  text-align: left;
  user-select: none;
`;

export const EducationContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 100px;
`;

export const YearsStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-align: left;
  user-select: none;
`;

export const TextContainerStyled = styled.div`
  max-width: 410px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const TextStyled = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-align: left;
  user-select: none;
  white-space: pre;
`;

export const TextBoldStyled = styled(TextStyled)`
  font-weight: 700;
`;