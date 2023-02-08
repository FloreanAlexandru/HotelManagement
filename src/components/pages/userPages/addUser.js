import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';
import styled from 'styled-components';
import { Email, Lock } from '@styled-icons/material';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { Namebase } from '@styled-icons/simple-icons/Namebase';
import { CalendarPerson } from '@styled-icons/fluentui-system-filled/CalendarPerson';
import { Address } from '@styled-icons/entypo/Address';
import { PersonInfo } from '@styled-icons/fluentui-system-filled/PersonInfo';
import { Hotel } from '@styled-icons/fa-solid/Hotel';
import { Function } from '@styled-icons/remix-line/Function';
import { NavBar } from '../../navbar';
import {
  BoxContainer,
  Button,
  FormContainer,
  Container,
  Errors,
  TextArea,
  InnerContainer,
  InnerInput,
  LogoDiv,
  PagesTopContainer,
  PagesContainer,
  BackDrop,
  PagesInnerContainer,
} from '../../common-components/common';
import { DropdownMenu } from '../../common-components/ui-elements/dropdown-list';
import { DropdownMenuHotels } from '../../common-components/ui-elements/dropdown-hotels';
import validation from '../../common-components/validators/addUser-validation';
import Marginer from '../../common-components/marginer';
import RadioChecker from '../../common-components/ui-elements/radio-checker';
import { ROUTES } from '../../requests/pahts';
import { ConfirmAddUser, GetHotels } from '../../services/services';
import boyLogo from '../../../assets/boyLogo.png';
import girlLogo from '../../../assets/girlLogo.png';

const StyledBoxContainer = styled(BoxContainer)`
  min-height: 760px;
`;

const STopContainer = styled(PagesTopContainer)`
  margin: 0;
`; 

const SBackDrop = styled(BackDrop)`
  top: -30px;
`;

const SInnerContainer = styled(PagesInnerContainer)`
  height: 100%;
  width: 100%;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-right: 37px;
  padding-top: 10px;
`;

const TitleContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0 0 30px;
`;

export default function AddUser(props) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const navigate = useNavigate();
  const hotelsArray = JSON.parse(localStorage.getItem("hotels"));

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 650);
  }, []);

  useEffect(() => {
    GetHotels();
  }, []);

  const [values, setValues] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    address: "",
    password: "",
    confirmPassword: "",
    date: "",
    gender: "",
    bio: "",
    role: "",
    hotel: "",
  });

  const [errors, setErrors] = useState({});
  const [hasErrorMessage, setHasErrorMessage] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const goToUserPage = () => {
    navigate(ROUTES.USERSMANAGEMENT);
  };

  const handleFormSubmit = () => {
    setErrors(validation(values));

    const dataAccount = {
      username: values.username,
      password: values.password,
      birthDate: values.date,
      email: values.email,
      gender: values.gender,
      address: values.address,
      bio: values.bio,
      firstName: values.firstname,
      lastName: values.lastname,
      role: values.role,
      hotel: values.hotel,
    };

    if (!errors.ok === false) {
      ConfirmAddUser(dataAccount);
      goToUserPage();
    }
  };

  return (
    <PagesContainer>
      <NavBar />
      <StyledBoxContainer>
        <STopContainer>
          <SBackDrop>
            <TitleContainer>
              <LogoDiv>
                <img src={girlLogo} />
              </LogoDiv>
              <HeaderText>Add User</HeaderText>
              <LogoDiv>
                <img src={boyLogo} />
              </LogoDiv>
            </TitleContainer>
          </SBackDrop>
        </STopContainer>
        <SInnerContainer>
          <FormContainer>
            <Marginer direction='vertical' margin={25} />

            <Container>
              <InnerContainer>
                <Container>
                  *<Namebase size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='firstname'
                    type='text'
                    placeholder='First name'
                    value={values.firstname}
                    onChange={handleChange}
                  />
                </Container>
                {errors.firstname && <Errors>{errors.firstname}</Errors>}
              </InnerContainer>

              <InnerContainer>
                <Container>
                  *<Namebase size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='lastname'
                    type='text'
                    placeholder='Last name'
                    value={values.lastname}
                    onChange={handleChange}
                  />
                </Container>
                {errors.lastname && <Errors>{errors.lastname}</Errors>}
              </InnerContainer>
            </Container>
            <Marginer direction='vertical' margin={6} />

            <Container>
              <InnerContainer>
                <Container>
                  *<AccountCircle size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={values.username}
                    onChange={handleChange}
                  />
                </Container>
                {errors.username && <Errors>{errors.username}</Errors>}
              </InnerContainer>

              <InnerContainer>
                <Container>
                  *<Address size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='address'
                    type='text'
                    placeholder='Address'
                    value={values.address}
                    onChange={handleChange}
                  />
                </Container>
                {errors.address && <Errors>{errors.address}</Errors>}
              </InnerContainer>
            </Container>
            <Marginer direction='vertical' margin={6} />

            <Container>
              <InnerContainer>
                <Container>
                  *<Lock size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                  />
                </Container>
                {errors.password && <Errors>{errors.password}</Errors>}
                <Marginer direction='vertical' margin={6} />
              </InnerContainer>

              <InnerContainer>
                <Container>
                  *<Lock size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    value={values.confPassword}
                    onChange={handleChange}
                  />
                </Container>
                {errors.confirmPassword && (
                  <Errors>{errors.confirmPassword}</Errors>
                )}
                <Marginer direction='vertical' margin={6} />
              </InnerContainer>
            </Container>

            <Container>
              <InnerContainer>
                <Container>
                  *<Email size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                  />
                </Container>
                {errors.email && <Errors>{errors.email}</Errors>}
                <Marginer direction='vertical' margin={6} />
              </InnerContainer>

              <InnerContainer>
                <Container>
                  *<CalendarPerson size='20' opacity='0.7' />
                  <Marginer direction='horizontal' margin={4} />
                  <InnerInput
                    name='date'
                    type='date'
                    value={values.date}
                    onChange={handleChange}
                  />
                </Container>
                {errors.date && <Errors>{errors.date}</Errors>}
                <Marginer direction='vertical' margin={6} />
              </InnerContainer>
            </Container>

            <Container>
              *<Function size='25' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <DropdownMenu
                name='role'
                value={values.role}
                onChange={handleChange}
              />
            </Container>
            {errors.role && <Errors>{errors.role}</Errors>}

            <Marginer direction='vertical' margin={7} />
            <Container>
              *<Hotel size='25' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <DropdownMenuHotels
                name='hotel'
                value={values.hotel}
                onChange={handleChange}
                data={hotelsArray}
                label='hotel'
              />
            </Container>
            {errors.hotel && <Errors>{errors.hotel}</Errors>}

            <Marginer direction='vertical' margin={7} />
            {isDisplayed && (
              <RadioChecker
                name='gender'
                value={values.gender}
                onChange={handleChange}
              />
            )}
            {errors.gender && <Errors>{errors.gender}</Errors>}

            <Marginer direction='vertical' margin={15} />
            <Container>
              <PersonInfo size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <TextArea
                name='bio'
                type='text'
                value={values.bio}
                onChange={handleChange}
              />
            </Container>
            <Marginer direction='vertical' margin={15} />

            <Container>
              <Button type='submit' onClick={handleFormSubmit}>
                Add user
              </Button>
              <Marginer direction='horizontal' margin={10} />
              <Button type='submit' onClick={goToUserPage}>
                Back to user page
              </Button>
            </Container>
          </FormContainer>
          {hasErrorMessage && (
              <Alert variant='danger' isOpen={hasErrorMessage}>
                This username is already used, please choose another!
              </Alert>
          )}
        </SInnerContainer>
      </StyledBoxContainer>
    </PagesContainer>
  );
}
