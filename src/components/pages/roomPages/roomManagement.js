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
import { GetHotels } from '../../services/services';

export default function RoomsManagement() {
  const navigate = useNavigate();

  const backToMainPage = () => {
    navigate(ROUTES.MAINPAGE);
  };

  const goToAddRoom = () => {
    navigate(ROUTES.ADDROOM);
  }

  const [roomsData, setRoomsData] = useState();
  const arrayRooms = [];
  const hotelsData = JSON.parse(localStorage.getItem("hotels"));  

  useEffect(() =>{
    GetHotels();
  },[]);

  useEffect(() => {
    axios
      .get(HOST + BACKEND_ROUTES.ROOMS, {headers: Headers})
      .then((response) => {
        Object.keys(response.data.rooms).forEach(function(key) {
            arrayRooms.push(response.data.rooms[key]);
        });
        
        arrayRooms.forEach(function(element, index) {  
          hotelsData.hotels.forEach(function(object, index) {
             if (object.id === element.hotel_id) {
              element.hotel_id = object.name;
             }
          });

          let { 
            id: Id,
            hotel_id: Hotel, 
            allow_pets: Pets, 
            allow_smoking: Smoking, 
            ...rest
          } = element;

          element = {Id, Hotel, Pets, Smoking, ...rest};
          element.view = 'view';
          arrayRooms[index] = element;
        });

        setRoomsData(arrayRooms);
      });
    }, []);

  return (
    <PagesContainer>
      <PagesTopContainer>
        <NavBar />
      </PagesTopContainer>
      <PagesInnerContainer>
        { roomsData ? <Table data={roomsData} typeTable={"room"}/> : null }
        <Marginer direction='vertical' margin={25} />
        <Button type='submit' onClick={goToAddRoom}>Add a new room</Button>
        <Marginer direction='vertical' margin={15} />
        <Button type='submit' onClick={backToMainPage}>
          Back to main page
        </Button>
      </PagesInnerContainer>
    </PagesContainer>
  );
}
