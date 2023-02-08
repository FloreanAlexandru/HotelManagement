import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Hotel } from '@styled-icons/fa-solid/Hotel';
import { MoneyBillAlt } from '@styled-icons/fa-regular/MoneyBillAlt';
import { People } from '@styled-icons/bootstrap/People';
import { NavBar } from '../../navbar/index';
import {
  Button,
  FormContainer,
  Input,
  Container,
  LogoDiv,
  PagesContainer,
  PagesTopContainer,
  PagesInnerContainer,
  BackDrop,
  BoxContainer,
} from '../../common-components/common';
import RadioCheckerBool from '../../common-components/ui-elements/radioCheckerBool.';

import Marginer from '../../common-components/marginer';
import { ROUTES } from '../../requests/pahts';
import { ConfirmAddRoom, GetHotels } from '../../services/services';
import { DropdownMenuHotels } from '../../common-components/ui-elements/dropdown-hotels';

const SBoxContainer = styled(BoxContainer)`
  width: 600px;
  min-height: 560px;
`;

const STopContainer = styled(PagesTopContainer)`
  margin: 0;
`;

const SInnerContainer = styled(PagesInnerContainer)`
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
`;

const HeaderText = styled.h2`
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin: 50px 30px 0 0;
`;

const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0 0 40px;
`;

const LogoHotels = styled(LogoDiv)`
  margin-top: 5px;
  img {
    width: 125px;
    height: 125px;
  }
`;

export default function AddRoomPage(props) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const navigate = useNavigate();
  const hotelsArray = JSON.parse(localStorage.getItem("hotels"));

  useEffect(() => {
    GetHotels();
  }, []);
  
  const [roomValues, setRoomValues] = useState({
    hotel_id: "",
    persons: "",
    price: "",
    allow_pets: "",
    allow_smoking: "",
  });

  const handleChange = (event) => {
    setRoomValues({
      ...roomValues,
      [event.target.name]: event.target.value,
    });
  };
  
  const backToTable = () => {
    navigate(ROUTES.ROOMMANAGEMENT);
  };

  const handleFormSubmit = () => {
    ConfirmAddRoom(roomValues);
  };

  return (
    <PagesContainer>
      <NavBar />
      <SBoxContainer>
        <STopContainer>
          <BackDrop>
            <TitleContainer>
              <LogoHotels>
              </LogoHotels>
              <HeaderText>Add a room</HeaderText>
              <LogoHotels>
              </LogoHotels>
            </TitleContainer>
          </BackDrop>
        </STopContainer>
        <SInnerContainer>
          <FormContainer>
            <Marginer direction='vertical' margin={55} />
            <Container>
              *<Hotel size='25' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <DropdownMenuHotels
                name='hotel_id'
                value={roomValues.hotel}
                onChange={handleChange}
                data={hotelsArray}
                label='hotel_id'
              />
            </Container>
            <Marginer direction='vertical' margin={20} />

            <Container>
              *<People size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='persons'
                type='number'
                value={roomValues.persons}
                placeholder='Number of persons'
                onChange={handleChange}
              />
            </Container>
            <Marginer direction='vertical' margin={20} />

            <Container>
              *<MoneyBillAlt size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='price'
                type='number'
                value={roomValues.price}
                placeholder='Price'
                onChange={handleChange}
              />
            </Container>
            <Marginer direction='vertical' margin={20} />

            {isDisplayed && (
            <>
              <RadioCheckerBool
                name='allow_pets'
                value={roomValues.allow_pets}
                onChange={handleChange}
                data='pets'
              />
              <Marginer direction='vertical' margin={20} />

              <RadioCheckerBool
                name='allow_smoking'
                value={roomValues.allow_smoking}
                onChange={handleChange}
                data='smoking'
              />
            </>)}

            <Marginer direction='vertical' margin={35} />
            <Container>
              <Button type='submit' onClick={handleFormSubmit}>
                Add room
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
