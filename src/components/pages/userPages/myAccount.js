import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Email } from '@styled-icons/material';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { Namebase } from '@styled-icons/simple-icons/Namebase';
import { CalendarPerson } from '@styled-icons/fluentui-system-filled/CalendarPerson';
import { Address } from '@styled-icons/entypo/Address';
import { PersonInfo } from '@styled-icons/fluentui-system-filled/PersonInfo';
import { NavBar } from '../../navbar/index';
import {
  Button,
  FormContainer,
  Input,
  Container,
  TextArea,
  LogoDiv,
  PagesContainer,
  PagesTopContainer,
  BoxContainer, 
  BackDrop,
} from '../../common-components/common';
import RadioChecker from '../../common-components/ui-elements/radio-checker';
import Marginer from '../../common-components/marginer';
import { HOST, BACKEND_ROUTES, Headers } from '../../requests/pahts';
import { ConfirmEditMyAccount } from '../../services/services';
import boyLogo from '../../../assets/boyLogo.png';
import girlLogo from '../../../assets/girlLogo.png';

const MyAccountTopContainer = styled(PagesTopContainer)`
  margin: 0;
` 

const SBackDrop = styled(BackDrop)`
  height: 27%;
  top: -50px;
`;

const HeaderText = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  padding-top: 10px;
  margin-right: 37px;
`;

const TitleContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 56px 0 0 38px;
`;

export default function MyAccount() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [blockState, setBlockState] = useState(true);

  const userId = localStorage.getItem("id");
  const navigate = useNavigate();

  const backToMain = () => {
    navigate("/main");
  };

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 650);
  }, []);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    date: "",
    gender: "",
    bio: "",
  });

  useEffect(() => {
    axios
      .get(HOST + BACKEND_ROUTES.USERS_DEL_EDIT_VIEW + userId, {
        headers: Headers,
      })
      .then((response) => {
        setValues(response.data.user);
      })
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    ConfirmEditMyAccount(userId ,values);
  };

  const openCloseForm = () => {
    setBlockState(!blockState);
  };

  return (
    <PagesContainer>
      <NavBar />
        <BoxContainer>
          <MyAccountTopContainer>
            <SBackDrop>
              <TitleContainer>
                <LogoDiv>
                  <img src={girlLogo} />
                </LogoDiv>
                <HeaderText>My Account</HeaderText>
                <LogoDiv>
                  <img src={boyLogo} />
                </LogoDiv>
              </TitleContainer>
            </SBackDrop>
          </MyAccountTopContainer>
          <FormContainer>
            <Marginer direction='vertical' margin={25} />

            <Container>
              <Namebase size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='firstname'
                type='text'
                placeholder='First name'
                value={values.firstName}
                onChange={handleChange}
                disabled={blockState}
              />
            </Container>
            <Marginer direction='vertical' margin={6} />

            <Container>
              <Namebase size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='lastname'
                type='text'
                placeholder='Last name'
                value={values.lastName}
                onChange={handleChange}
                disabled={blockState}
              />
            </Container>
            <Marginer direction='vertical' margin={6} />

            <Container>
              <AccountCircle size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='username'
                type='text'
                placeholder='Username'
                value={values.username}
                onChange={handleChange}
                disabled={blockState}
              />
            </Container>
            <Marginer direction='vertical' margin={6} />

            <Container>
              <Address size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='address'
                type='text'
                placeholder='Address'
                value={values.address}
                onChange={handleChange}
                disabled={blockState}
              />
            </Container>
            <Marginer direction='vertical' margin={6} />
            
            <Container>
              <Email size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='email'
                type='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                disabled={blockState}
              />
            </Container>
            <Marginer direction='vertical' margin={6} />

            <Container>
              <CalendarPerson size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='birthDate'
                type='date'
                value={values.birthDate}
                onChange={handleChange}
                disabled={blockState}
              />
            </Container>
            <Marginer direction='vertical' margin={20} />

            {isDisplayed && (
              <RadioChecker
                name='gender'
                value={values.gender}
                onChange={handleChange}
                disabled={blockState}
              />
            )}
            <Marginer direction='vertical' margin={15} />

            <Container>
              <PersonInfo size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <TextArea
                name='bio'
                type='text'
                value={values.bio}
                onChange={handleChange}
                disabled={blockState}
              />
            </Container>
            <Marginer direction='vertical' margin={15} />

            <Container>
              {blockState === true ? (
                <>
                  <Button onClick={() => openCloseForm()}>
                    Edit account
                  </Button>
                  <Marginer direction='horizontal' margin={10} />
                  <Button onClick={backToMain}>
                    Back to main page
                  </Button>
                </>
              ) : (
                <>
                  <Button type='submit' onClick={() => handleFormSubmit()}>
                    Save
                  </Button>
                  <Marginer direction='horizontal' margin={10} />
                  <Button onClick={() => openCloseForm()}>
                    Cancel
                  </Button>
                </>
              )}
            </Container>
            <Marginer direction='vertical' margin={30} />
          </FormContainer>
        </BoxContainer>
    </PagesContainer>  );
}
