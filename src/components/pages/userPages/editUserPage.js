import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { NavBar } from '../../navbar/index';
import {
  Button,
  FormContainer,
  Input,
  Container,
  LogoDiv,
  PagesContainer,
  PagesInnerContainer,
  PagesTopContainer,
  BackDrop,
  BoxContainer
} from '../../common-components/common';
import Marginer from '../../common-components/marginer';
import { DropdownMenu } from '../../common-components/ui-elements/dropdown-list';
import { HOST, BACKEND_ROUTES, Headers, ROUTES } from '../../requests/pahts';
import { ConfirmEditUser } from '../../services/services';
import boyLogo from '../../../assets/boyLogo.png';
import girlLogo from '../../../assets/girlLogo.png';

const SBoxContainer = styled(BoxContainer)`
  width: 500px;
  min-height: 460px;
`

const STopContainer = styled(PagesTopContainer)`
  margin: 0;
`;

const SInnerContainer = styled(PagesInnerContainer)`
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
`

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin: 39px 38px 0 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 100px;
`;

export default function EditUser() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [values, setValues] = useState({
    username: userInfo.username,
    role: userInfo.role,
  });

  const backToTable = () => {
    navigate(ROUTES.USERSMANAGEMENT);
  };

  useEffect(() => {
    axios
      .get(HOST + BACKEND_ROUTES.USERS_DEL_EDIT_VIEW + userInfo.id, {
        headers: Headers,
      })
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const editUserProfile = () => {
    userInfo.role = values.role;
    userInfo.username = values.username;
    localStorage.setItem("user", JSON.stringify(userInfo));
    ConfirmEditUser(userInfo.id, values);
  };

  return (
    <PagesContainer>
      <NavBar />
      <SBoxContainer>
        <STopContainer>
          <BackDrop>
            <TitleContainer>
              <LogoDiv>
                <img src={girlLogo} />
              </LogoDiv>
              <HeaderText>Edit user</HeaderText>
              <LogoDiv>
                <img src={boyLogo} />
              </LogoDiv>
            </TitleContainer>
          </BackDrop>
        </STopContainer>
        <SInnerContainer>
        <FormContainer>
          <Marginer direction='vertical' margin={50} />

          <Container>
            <AccountCircle size='20' opacity='0.7' />
            <Marginer direction='horizontal' margin={4} />
            <Input
              name='username'
              type='text'
              placeholder='Username'
              value={values.username}
              onChange={handleChange}
            />
          </Container>
          <Marginer direction='vertical' margin={20} />

          <Container>
            <Marginer direction='horizontal' margin={4} />
            <DropdownMenu
              name='role'
              value={values.role}
              onChange={handleChange}
            />
          </Container>

          <Marginer direction='vertical' margin={35} />
          <Container>
            <Button type='submit' onClick={editUserProfile}>
              Save
            </Button>
            <Marginer direction='horizontal' margin={10} />
            <Button type='submit' onClick={backToTable}>
              Back to table
            </Button>
          </Container>
        </FormContainer>
        </SInnerContainer>
      </SBoxContainer>
    </PagesContainer>
  );
}
