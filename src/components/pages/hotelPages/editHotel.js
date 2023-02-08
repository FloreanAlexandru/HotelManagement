import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Namebase } from '@styled-icons/simple-icons/Namebase';
import { Location } from '@styled-icons/entypo/Location';
import { TextDescription } from '@styled-icons/fluentui-system-filled/TextDescription';
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
import Marginer from '../../common-components/marginer';
import { HOST, BACKEND_ROUTES, Headers, ROUTES } from '../../requests/pahts';
import { ConfirmEditHotel } from '../../services/services';
import leftPencilLogo from '../../../assets/leftPencil.png';
import rightPencilLogo from '../../../assets/rightPencil.png';

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
  margin: 30px 0 0 40px;
`;

export default function EditHotel() {
  const navigate = useNavigate();
  const hotelInfo = JSON.parse(localStorage.getItem("hotel"));

  const [values, setValues] = useState({
    name: hotelInfo.name,
    location: hotelInfo.location,
    description: hotelInfo.description,
  });

  const backToTable = () => {
    navigate(ROUTES.HOTELMANAGEMENT);
  };

  useEffect(() => {
    axios.get(HOST + BACKEND_ROUTES.HOTELS_EDIT_VIEW + hotelInfo.id, {
      headers: Headers,
    });
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const editHotel = () => {
    hotelInfo.name = values.name;
    hotelInfo.location = values.location;
    hotelInfo.description = values.description;
    localStorage.setItem("hotel", JSON.stringify(hotelInfo));
    ConfirmEditHotel(hotelInfo.id, values);
  };

  return (
    <PagesContainer>
      <NavBar />
      <SBoxContainer>
        <STopContainer>
          <BackDrop>
            <TitleContainer>
              <LogoDiv>
                <Marginer direction='vertical' margin={5} />;
                <img src={leftPencilLogo} />{" "}
              </LogoDiv>
              <HeaderText>Edit hotel</HeaderText>
              <LogoDiv>
                {" "}
                <img src={rightPencilLogo} />{" "}
              </LogoDiv>
            </TitleContainer>
          </BackDrop>
        </STopContainer>
        <SInnerContainer>
          <FormContainer>
            <Marginer direction='vertical' margin={55} />
            <Container>
              <Namebase size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='name'
                type='text'
                placeholder='Hotel`s name'
                value={values.name}
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
                value={values.location}
                onChange={handleChange}
              />
            </Container>

            <Marginer direction='vertical' margin={20} />
            <Container>
              <TextDescription size='20' opacity='0.7' />
              <Marginer direction='horizontal' margin={4} />
              <Input
                name='description'
                type='text'
                placeholder='Description'
                value={values.description}
                onChange={handleChange}
              />
            </Container>

            <Marginer direction='vertical' margin={35} />
            <Container>
              <Button type='submit' onClick={editHotel}>
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
