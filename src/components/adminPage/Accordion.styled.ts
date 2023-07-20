import { styled } from '@mui/material/styles';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import {Box, Button, Dialog} from '@mui/material';

export const Accordion = styled(MuiAccordion)`
  border: 1px solid rgba(255, 255, 255, 0.12);

  &:not(:last-child) {
    border-bottom: 0;
  }

  &:before {
    display: none;
  }
`;

export const AccordionSummary = styled(MuiAccordionSummary)`
  background-color: rgba(0, 0, 0, .03);
  flex-direction: row-reverse;
  
  & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(90deg);
  }

  & .MuiAccordionSummary-content {
    margin-left: 15px;
  }
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  padding: 30px 10px;
  border-top: 1px solid rgba(0, 0, 0, .125);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CardStyled = styled(Card)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const AddIconAndTextStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;
