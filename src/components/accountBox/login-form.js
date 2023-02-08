import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';
import axios from 'axios';
import { AccountContext } from './accountContext';
import { Lock } from '@styled-icons/material';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import {
  BoldLink,
  Button,
  FormContainer,
  Input,
  MutedLink,
  Container,
  CheckBox,
  Errors,
} from '../common-components/common';
import validation from '../common-components/validators/validation-login';
import Marginer from '../common-components/marginer';
import { HOST, BACKEND_ROUTES } from '../requests/pahts';
import { DecodeToken } from '../services/services';

export default function LogInForm(props) {
  const { SwitchBetweenPages } = useContext(AccountContext);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [hasErrorMessage, setHasErrorMessage] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    setErrors(validation(values));

    const credentials = {
      username: values.username,
      password: values.password,
    };

    if (!errors.ok === false) {
      loginFunction(credentials);
    }
  };

  const loginFunction = async (credentials) => {
    await axios
      .post(HOST + BACKEND_ROUTES.LOGIN, {
        ...credentials,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        DecodeToken();
        navigate("/main");
      })
      .catch(() => {
        setHasErrorMessage(true);
      });
  };

  return (
    <>
      <FormContainer>
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
        {errors.username && <Errors>{errors.username}</Errors>}
        <Marginer direction='vertical' margin={6} />

        <Container>
          <Lock size='20' opacity='0.7' />
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
        <Marginer direction='vertical' margin={20} />

        <Container>
          <CheckBox type='checkbox' />
          <MutedLink>Remember me?</MutedLink>
        </Container>
        <Marginer direction='vertical' margin={40} />

        <Button type='submit' onClick={handleFormSubmit}>
          LogIn
        </Button>
        <Marginer direction='vertical' margin={10} />

        <Button type='submit' onClick={() => SwitchBetweenPages("register")}>
          Register page
        </Button>
        <Marginer direction='vertical' margin={50} />

        <MutedLink>Do not have an account? Press Register Page.</MutedLink>
        <Marginer direction='vertical' margin={25} />

        <MutedLink>
          Forgot your password?
          <BoldLink href='#'>Click right here to recover.</BoldLink>
        </MutedLink>
      </FormContainer>
      {hasErrorMessage && (
        <div>
          <Alert variant='danger' isOpen={hasErrorMessage}>
            Wrong credentials
          </Alert>
        </div>
      )}
      </>
  );
}
