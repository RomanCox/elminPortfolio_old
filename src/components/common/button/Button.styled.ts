import styled from 'styled-components';
import {CoordinatesType} from './Button.component.tsx';

export const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  border: none;
  background: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  user-select: inherit;
  cursor: pointer;
  outline: none;

  &:hover, &:active, &:focus {
    outline: none;
    border: none;
    color: inherit;
  }
`;

export const AStyled = styled.a`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  border: none;
  background: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  user-select: inherit;
  cursor: pointer;
  outline: none;

  &:hover, &:active, &:focus {
    outline: none;
    border: none;
    color: inherit;
  }
`;

export const RippleStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;

  div {
    @keyframes ripple {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: scale(250);
      }
    }
  }
`;

export const CircleStyled = styled.div<CoordinatesType>`
  position: absolute;
  background: rgba(grey, 0.8);
  border: 1px solid transparent;
  border-radius: 50%;
  pointer-events: none;
  animation: ripple 0.75s 1;
  //top: 50%;
  //left: 50%;
  top: ${({x}) => `${x}px`};
  left: ${({y}) => `${y}px`};

  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale(250);
    }
  }
`;
