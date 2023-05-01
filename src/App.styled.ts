import styled from 'styled-components';

export const AppWrapperStyled = styled.div`
  width: 100%;
  max-width: 1920px;
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
