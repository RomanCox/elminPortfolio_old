import styled from 'styled-components';

export const FooterContainerStyled = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 75px;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
`;

export const LocationContainerStyled = styled.div`
  color: white;
  font-family: Libre Franklin, sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  text-align: start;
`;

export const SocialLinksContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-family: Libre Franklin, sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  text-align: end;
`;
