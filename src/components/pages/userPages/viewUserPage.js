import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { EyeTrackingOn } from '@styled-icons/fluentui-system-filled/EyeTrackingOn';
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
  margin: 37px 0 0 10px;
  color: ${(props) => props.theme.colors.text};
`;

export default function ViewUser() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  const backToTable = () => {
    navigate(ROUTES.USERSMANAGEMENT);
  };

  const goToEditUser = () => {
    navigate(ROUTES.EDITUSER);
  };

  return (
    <PagesContainer>
      <NavBar />
      <BoxContainer>
        <PagesTopContainer>
          <BackDrop>
            <TitleContainer>
              <EyeTrackingOn size='45' />
              <Marginer direction='horizontal' margin={25} />
              <HeaderText>View user</HeaderText>
            </TitleContainer>
          </BackDrop>
        </PagesTopContainer>

        <Marginer direction='vertical' margin={25} />
        <PagesInnerContainer>
          <CardContainer>
            <BottomCardContainer>
              <CardText>
                Name: {userData.firstName} {userData.lastName}
              </CardText>
              <CardText>Email: {userData.email}</CardText>
              <CardText>Address: {userData.address}</CardText>
              {userData.bio !== null && (
                <CardText>Bio: {userData.bio}</CardText>
              )}
            </BottomCardContainer>
          </CardContainer>
        </PagesInnerContainer>
        <Container>
          <Button type='submit' onClick={goToEditUser}>
            Edit user
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
