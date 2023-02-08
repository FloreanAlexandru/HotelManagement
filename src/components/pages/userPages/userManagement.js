import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavBar } from '../../navbar';
import Table from '../../common-components/table/Table';
import {
  Button,
  PagesContainer,
  PagesInnerContainer,
  PagesTopContainer,
} from '../../common-components/common';
import Marginer from '../../common-components/marginer';
import { HOST, BACKEND_ROUTES, ROUTES, Headers } from '../../requests/pahts';

export default function UsersManagement() {
  const navigate = useNavigate();

  const backToMainPage = () => {
    navigate(ROUTES.MAINPAGE);
  };

  const goToAddUser = () => {
    navigate(ROUTES.ADDUSER);
  };

  const [usersData, setUsersData] = useState(null);
  const arrayUsers = [];

  useEffect(() => {
    axios
      .get(HOST + BACKEND_ROUTES.USERS, { headers: Headers })
      .then((response) => {
        Object.keys(response.data.users).forEach(function (key) {
          delete response.data.users[key].picture;
          delete response.data.users[key].createdAt;
          delete response.data.users[key].bio;
          delete response.data.users[key].hotel;
          arrayUsers.push(response.data.users[key]);
        });

        arrayUsers.forEach(function (element) {
          element.edit = "edit";
          element.view = "view";
          element.delete = "delete";
        });

        setUsersData(arrayUsers);
      });
  }, []);

  return (
    <PagesContainer>
      <PagesTopContainer>
        <NavBar />
      </PagesTopContainer>
      <PagesInnerContainer>
        { usersData && <Table data={usersData} typeTable={'user'} /> }
        <Marginer direction='vertical' margin={25} />
        <Button type='submit' onClick={goToAddUser}>
          Add a new user
        </Button>
        <Marginer direction='vertical' margin={15} />
        <Button type='submit' onClick={backToMainPage}>
          Back to main page
        </Button>
      </PagesInnerContainer>
    </PagesContainer>
  );
}
