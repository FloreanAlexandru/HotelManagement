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

export default function HotelsManagement() {
  const navigate = useNavigate();

  const backToMainPage = () => {
    navigate(ROUTES.MAINPAGE);
  };

  const [hotelsData, setHotelsData] = useState(null);
  const arrayHotels = [];

  useEffect(() => {
    axios
      .get(HOST + BACKEND_ROUTES.HOTELS, { headers: Headers })
      .then((response) => {
        Object.keys(response.data.hotels).forEach(function (key) {
          arrayHotels.push(response.data.hotels[key]);
        });

        arrayHotels.forEach(function (element) {
          element.edit = "edit";
          element.view = "view";
        });

        setHotelsData(arrayHotels);
      })
    }, []);

  return (
    <PagesContainer>
      <PagesTopContainer>
        <NavBar />
      </PagesTopContainer>
      <PagesInnerContainer>
        {hotelsData ? <Table data={hotelsData} typeTable={"hotel"} /> : null}
        <Marginer direction='vertical' margin={25} />
        <Button type='submit'>Add a new hotel</Button>
        <Marginer direction='vertical' margin={15} />
        <Button type='submit' onClick={backToMainPage}>
          Back to main page
        </Button>
      </PagesInnerContainer>
    </PagesContainer>
  );
}
