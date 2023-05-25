import styled from 'styled-components';

export const AboutPageContainerStyled = styled.div`
  width: 100%;
  //max-width: 100vw;
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
  gap: 40px;
`;

export const NavigationStyled = styled.div`
  width: 100%;
  padding-left: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
`;

export const NavigationItemStyled = styled.div<{isActive: boolean}>`
  width: 175px;
  position: relative;
  font-family: Libre Franklin, sans-serif;
  font-size: ${({ isActive }) => isActive ? '32px' : '24px'};
  line-height: 38px;
  font-weight: ${({ isActive }) => isActive ? '700' : '500'};
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

export const CVButtonStyled = styled.button`
  height: 38px;
  border-radius: 7px;
  border: 2px solid #000;
  box-sizing: border-box;
  background: #828282;
  color: #000;
  position: relative;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  text-align: center;
  user-select: none;

  &:hover, &:active, &:focus {
    outline: none;
    border-color: #000;
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