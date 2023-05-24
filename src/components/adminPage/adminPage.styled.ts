import styled from 'styled-components';
import {TextField, IconButton, Button, Box, Tabs, Tab} from '@mui/material';

export const AdminPageContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
`;

export const AdminContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
`;

export const ContentContainerStyled = styled(Box)`
  
`;

export const TabsContainerStyled = styled(Box)`
    
`;

export const TabsStyled = styled(Tabs)`
  
`;

export const TabStyled = styled(Tab)`
  &:active, &:focus { outline: none; }
`;

export const LoginContainerStyled = styled.div<{isWrong: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
  animation: ${({ isWrong }) => isWrong ? 'swing 0.6s ease 0s 1' : 'none'};

  @keyframes swing {
    15% {
      transform: translateX(9px);
    }
    30% {
      transform: translateX(-9px);
    }
    40% {
      transform: translateX(6px);
    }
    50% {
      transform: translateX(-6px);
    }
    65% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
`;

export const TitleContainerStyled = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-size: 42px;
  line-height: 50px;
  font-weight: 700;
  text-align: center;
`;

export const SubTitleContainerStyled = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
  text-align: center;
`;

export const FormStyled = styled.form`
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const InputStyled = styled(TextField)`
  width: 100%;
`;

export const LabelStyled = styled.label`
  width: 100%;
  position: relative;
  
  div {
    width: 100%;
  }
`;

export const IconButtonStyled = styled(IconButton)`
  width: 25px;
  height: 25px;
  position: absolute !important;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

export const ButtonStyled = styled(Button)`
  width: 50%;
  &:active, &:focus { outline: none; }
`;