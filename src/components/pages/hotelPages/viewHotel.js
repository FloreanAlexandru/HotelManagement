import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Hotelsdotcom } from '@styled-icons/simple-icons/Hotelsdotcom';
import { NavBar } from '../../navbar/index';
import {
  Button,
  Container,
  CardContainer,
  BottomCardContainer,
  CardText,
  PagesContainer,
  PagesTopContainer,
  PagesInnerContainer,
  BoxContainer,
  BackDrop,
} from '../../common-components/common';
import Marginer from '../../common-components/marginer';
import { ROUTES } from '../../requests/pahts';

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-right: 30px;
`;

const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export default function ViewHotel() {
  const navigate = useNavigate();
  const hotelData = JSON.parse(localStorage.getItem("hotel"));

  const backToTable = () => {
    navigate(ROUTES.HOTELMANAGEMENT);
  };

  const goToEditHotel = () => {
    navigate(ROUTES.EDITHOTEL);
  };

  return (
    <PagesContainer>
      <NavBar />
      <BoxContainer>
        <PagesTopContainer>
          <BackDrop>
            <TitleContainer>
              <Hotelsdotcom size='45' />
              <Marginer direction='horizontal' margin={25} />
              <HeaderText>View hotel</HeaderText>
            </TitleContainer>
          </BackDrop>
        </PagesTopContainer>

        <Marginer direction='vertical' margin={25} />
        <PagesInnerContainer>
          <CardContainer>
            <BottomCardContainer>
              <CardText>Name: {hotelData.name}</CardText>
              <CardText>Location: {hotelData.location}</CardText>
              <CardText>Description: {hotelData.description}</CardText>
              <CardText>Created at: {hotelData.createdAt}</CardText>
            </BottomCardContainer>
          </CardContainer>
        </PagesInnerContainer>

        <Container>
          <Button type='submit' onClick={goToEditHotel}>
            Edit hotel
          </Button>
          <Marginer direction='horizontal' margin={10} />
          <Button type='submit' onClick={backToTable}>
            Back to table
          </Button>
        </Container>
      </BoxContainer>
    </PagesContainer>
  );
}
