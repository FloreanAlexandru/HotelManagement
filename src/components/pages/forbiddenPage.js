import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Button } from '../common-components/common';
import Marginer from '../common-components/marginer';
import { ROUTES } from '../requests/pahts';
import errorImage from '../../assets/403Forbidden.png';

const ContainerAnimation = keyframes`
      0% {
        width: 0px;
        height: 0px;
      }
      20% {
        width: 110px;
        height: 110px;
      }
      40% {
        width: 220px;
        height: 220px;
      }
      60% {
        width: 330px;
        height: 330px;
      }
      80% {
        width: 440px;
        height: 440px;
      }
      100% {
        width: 550px;
        height: 550px;
      }
`;

const BoxContainer = styled.div`
  width: 550px;
  height: 550px;
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 19px;
  border: 10px solid ${(props) => props.theme.colors.backgroundPrimary};
  background-color: ${(props) => props.theme.colors.text};
  box-shadow: 12px 12px rgba(15, 15, 15, 0.4);
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.colors.backgroundPrimary};
  animation: 2.5s ${ContainerAnimation} ease-in;
`;

const TextAnimation = keyframes`
    0% {opacity: 0;}
    50% {opacity: 0;}
    75% {opacity: 0;}
    100% {opacity: 1;}
`;

const ErrorContainer = styled.div`
  height: 45%;
  margin: 0 0 30px 40px;
  animation: 3s ${TextAnimation} ease-in;
`;

const BigText = styled.h1`
  font-size: 40px;
  animation: 3s ${TextAnimation} ease-in;
`;

const SmallText = styled.p`
  font-size: 15px;
  text-align: center;
  padding: 0 30px;
  animation: 3s ${TextAnimation} ease-in;
`;

export default function Forbidden() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.MAINPAGE);
  };

  return (
    <BoxContainer>
      <ErrorContainer>
        <img src={errorImage} alt='403forbidden' />
      </ErrorContainer>
      <BigText>Ooops!</BigText>
      <SmallText>
        Go back pressing the button below.
      </SmallText>
      <Marginer direction='vertical' margin={15} />
      <Button onClick={handleClick}>Main page</Button>
    </BoxContainer>
  );
}
