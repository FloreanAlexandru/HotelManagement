import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'reactstrap';
import axios from 'axios'
import { Email, Lock } from '@styled-icons/material';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { Namebase } from '@styled-icons/simple-icons/Namebase';
import { CalendarPerson } from '@styled-icons/fluentui-system-filled/CalendarPerson';
import { Address } from '@styled-icons/entypo/Address';
import { PersonInfo } from '@styled-icons/fluentui-system-filled/PersonInfo';
import {
  Button,
  FormContainer,
  Input,
  Container,
  Errors,
  TextArea,
  InnerContainer,
  InnerInput,
} from '../common-components/common';
import { AccountContext } from './accountContext';
import validation from '../common-components/validators/validation-register';
import Marginer from '../common-components/marginer';
import RadioChecker from '../common-components/ui-elements/radio-checker';
import { HOST, BACKEND_ROUTES } from '../requests/pahts';

export default function RegisterForm(props) {
  const { SwitchBetweenPages } = useContext(AccountContext);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 650);
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
  });

  const [errors, setErrors] = useState({});
  const [hasErrorMessage, setHasErrorMessage] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
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
    };

    if (!errors.ok === false) {
      registerFunction(dataAccount);
    }
  };

  const registerFunction = async (dataAccount) => {
    await axios
      .post(HOST + BACKEND_ROUTES.REGISTER, {
        ...dataAccount,
      })
      .then(() => {
        SwitchBetweenPages("login");
      })
      .catch(() => {
        setHasErrorMessage(true);
      });
  };

  return (
    <>
      <FormContainer>
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
          *<Email size='20' opacity='0.7' />
          <Marginer direction='horizontal' margin={4} />
          <Input
            name='email'
            type='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
        </Container>
        {errors.email && <Errors>{errors.email}</Errors>}

        <Marginer direction='vertical' margin={6} />
        <Container>
          *<Lock size='20' opacity='0.7' />
          <Marginer direction='horizontal' margin={4} />
          <Input
            name='password'
            type='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
          />
        </Container>
        {errors.password && <Errors>{errors.password}</Errors>}
        <Marginer direction='vertical' margin={6} />

        <Container>
          *<Lock size='20' opacity='0.7' />
          <Marginer direction='horizontal' margin={4} />
          <Input
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            value={values.confPassword}
            onChange={handleChange}
          />
        </Container>
        {errors.confirmPassword && <Errors>{errors.confirmPassword}</Errors>}
        <Marginer direction='vertical' margin={6} />

        <Container>
          *<CalendarPerson size='20' opacity='0.7' />
          <Marginer direction='horizontal' margin={4} />
          <Input
            name='date'
            type='date'
            value={values.date}
            onChange={handleChange}
          />
        </Container>
        {errors.date && <Errors>{errors.date}</Errors>}
        <Marginer direction='vertical' margin={20} />

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
          <PersonInfo size="20" opacity="0.7" />
          <Marginer direction="horizontal" margin={4} />
          <TextArea 
            name="bio"
            type="text" 
            value={values.bio} 
            onChange={handleChange}/>
        </Container>
        <Marginer direction='vertical' margin={15} />

        <Marginer direction="vertical" margin={15} />

        <Container>
          <Button type='submit' onClick={handleFormSubmit}>
            Register
          </Button>
          <Marginer direction='horizontal' margin={10} />
          <Button type='submit' onClick={() => SwitchBetweenPages("login")}>
            LogIn page
          </Button>
        </Container>

      </FormContainer>
      {hasErrorMessage && (
        <div>
          <Alert variant='danger' isOpen={hasErrorMessage}>
            Your username is already used, please choose another!
          </Alert>
        </div>
      )}
    </>
  );
}
