import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BedroomParent } from '@styled-icons/material/BedroomParent';
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
    color: ${props => props.theme.colors.text};
    text-align: center;
    margin-right: 30px;
`;

const TitleContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    color: ${(props) => props.theme.colors.text};
`

export default function ViewRoomPage() {
   const navigate = useNavigate();
   const roomData = JSON.parse(localStorage.getItem('room'));
   
   const backToTable = () => {
    navigate(ROUTES.ROOMMANAGEMENT);
   }

  return (
    <PagesContainer>
        <NavBar />
        <BoxContainer>
            <PagesTopContainer> 
                <BackDrop>
                    <TitleContainer>
                        <BedroomParent size='45'/>
                        <Marginer direction='horizontal' margin={25} />
                        <HeaderText>View Room</HeaderText>
                    </TitleContainer>
                </BackDrop>
            </PagesTopContainer>
          
            <Marginer direction='vertical' margin={25} />
            <PagesInnerContainer>
                <CardContainer>
                    <BottomCardContainer>
                        <CardText>Hotel Name: {roomData.room.hotel_id} </CardText>
                        <CardText>Number of people: {roomData.room.persons} </CardText>
                        <CardText>Price: {roomData.room.price} </CardText>
                        <CardText>Pets: {roomData.room.allow_pets === 1 ? 'Allowed' : 'Not Allowed'} </CardText>
                        <CardText>Smoking: {roomData.room.allow_smoking === 1 ? 'Allowed' : 'Not Allowed'}</CardText>
                    </BottomCardContainer>
                </CardContainer>
            </PagesInnerContainer>
           
            <Container>
                <Marginer direction='horizontal' margin={10} />
                <Button type='submit' onClick={backToTable}>Back to table</Button>
            </Container>
        </BoxContainer>
    </PagesContainer>
  );
}
