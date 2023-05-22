import styled from 'styled-components';

export const HomePageContainerStyled = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoBGContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

export const VideoBGStyled = styled.iframe`
  transform: scale(1.13);
`;

export const BlackoutStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ContentContainerStyled = styled.div`
  width: 750px;
  height: 200px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const TitleContainer = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-size: 42px;
  line-height: 50px;
  font-weight: 700;
  text-align: center;
`;

export const ServicesListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  color: #fff;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  text-align: justify;
  word-spacing: 5px;

  div {
    &:after {
      content: '';
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: #fff;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 200px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 5px;
`;
