import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Hotel } from '@styled-icons/fa-solid/Hotel';
import { Location } from '@styled-icons/entypo/Location';
import { Description } from '@styled-icons/material/Description';
import RightHotelLogo from '../../../assets/hotel-right-logo.png';
import LeftHotelLogo from '../../../assets/hotel-left-logo.png';
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
  PagesInnerContainer,
  BoxContainer,
  BackDrop,
} from '../../common-components/common';
import Marginer from '../../common-components/marginer';
import { HOST, BACKEND_ROUTES, Headers, ROUTES } from '../../requests/pahts';

const SBoxContainer = styled(BoxContainer)`
  width: 600px;
  min-height: 560px;
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
  margin-right: 30px;
`;

const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 35px 0 0 40px;
`;

const LogoHotels = styled(LogoDiv)`
  margin-top: 5px;
  img {
    width: 125px;
    height: 125px;
  }
`;

export default function AddHotel() {
  const [hotelValues, setHotelValues] = useState({
    name: "",
    location: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setHotelValues({
      ...hotelValues,
      [event.target.name]: event.target.value,
    });
  };

  const backToTable = () => {
    navigate(ROUTES.HOTELMANAGEMENT);
  };

  const handleSubmit = (hotelValues) => {
    axios
      .post(HOST + BACKEND_ROUTES.HOTELS, hotelValues, {
        headers: Headers,
      })
      .then(() => {
          backToTable();
      });
  };

  return (
    <PagesContainer>
      <NavBar />
      <SBoxContainer>
        <STopContainer>
          <BackDrop>
            <TitleContainer>
              <LogoHotels>
                <img src={RightHotelLogo} />
              </LogoHotels>
              <HeaderText>Add hotel</HeaderText>
              <LogoHotels>
                <img src={LeftHotelLogo} />
              </LogoHotels>
            </TitleContainer>
          </BackDrop>
        </STopContainer>
        <SInnerContainer>
          <FormContainer>
            <Marginer direction='vertical' margin={35} />
            <Container>
              <Hotel size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='name'
                type='text'
                placeholder='Name'
                value={hotelValues.name}
                onChange={handleChange}
              />
            </Container>
            <Marginer direction='vertical' margin={20} />

            <Container>
              <Location size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='location'
                type='text'
                placeholder='Location'
                value={hotelValues.location}
                onChange={handleChange}
              />
            </Container>
            <Marginer direction='vertical' margin={20} />

            <Container>
              <Description size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <TextArea
                name='description'
                type='text'
                placeholder='Description'
                value={hotelValues.description}
                onChange={handleChange}
              />
            </Container>

            <Marginer direction='vertical' margin={35} />
            <Container>
              <Button type='submit' onClick={() => handleSubmit(hotelValues)}>
                Add a hotel
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
