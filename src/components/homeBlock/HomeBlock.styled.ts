import styled from 'styled-components';

export const PhotoContainerStyled = styled.div`
  width: 400px;
  height: 500px;
  padding: 40px;
  background: black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

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
  padding: 0 15px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  font-size: 80px;
  line-height: 90px;
  letter-spacing: 15px;
  box-sizing: border-box;
  text-align: center;

  @media screen and (max-width: 439px) {
    border-width: 2px;
  }
`;

export const LogoStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const AfterBlockStyled = styled.div<{isShow: boolean}>`
  width: 0;
  height: 20px;
  background: white;
  color: black;
  position: absolute;
  left: 50%;
  bottom: -11px;
  transform: translateX(-50%);
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: normal;
  box-sizing: border-box;
  text-align: center;
  animation: expanding 0.5s ease 1.5s forwards;

  span {
    opacity: ${({ isShow }) => isShow ? '1' : 0};
    transition: opacity 0.5s ease 0s;
  }

  &:after, &:before {
    content: '';
    width: 1px;
    height: 0;
    background: black;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: grow 1.5s ease 1s forwards;
  }

  &:after {
    left: 0;
  }

  &:before {
    right: 0;
  }

  @keyframes expanding {
    0% {
      width: 0;
    }
    100% {
      width: 100px;
    }
  }

  @keyframes grow {
    0% {
      height: 0;
    }
    33% {
       height: 80%;
    }
    66% {
      height: 80%;
    }
    100% {
      height: 0;
    }
  }

  @media screen and (max-width: 439px) {
    height: calc(15px + (20 - 15) * (100vw - 320px) / (439 - 320));
    bottom: calc(-7.5px + (-11 + 7.5) * (100vw - 320px) / (439 - 320));
    font-size: calc(12px + (16 - 12) * (100vw - 320px) / (439 - 320));
    line-height: calc(15px + (20 - 15) * (100vw - 320px) / (439 - 320));

    @keyframes expanding {
      0% {
        width: 0;
      }
      100% {
        width: calc(75px + (100 - 75) * (100vw - 320px) / (439 - 320));
      }
    }
  }
`;

export const NameContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: black;
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
    //width: 80%;
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

export const ButtonStyled = styled.button`
  width: 100%;
  height: 35px;
  padding: 5px;
  background: black;
  color: white;
  border-radius: 5px;

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
