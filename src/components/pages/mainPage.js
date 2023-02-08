import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';
import { NavBar } from '../navbar/index';
import { PagesContainer, PagesTopContainer, PagesInnerContainer} from '../common-components/common';
import SlideShow from '../slideShow/slideShow';

const MainTopContainer = styled(PagesTopContainer)`
    margin-bottom: 0;
`;

const MainInnerContainer = styled(PagesInnerContainer)`
    height: 75%;
    margin-top: 60px;
`

const HeaderTitle = styled.h1`
    border: 2px solid ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.text};
    box-shadow: 10px 30px 90px;
    color: ${(props) => props.theme.colors.backgroundPrimary};
    text-align: center;
    margin-top: 30px;
`;

export default function MainPage () {
    const [username, setUsername] = useState('');

    useEffect(()=> {
        let token = localStorage.getItem('token');
        let decoded = jwt_decode(token);
        let name = decoded.lastName + " " + decoded.firstName;
        localStorage.setItem('id',decoded.id);
        setUsername(name);
    },[])

    return (
        <PagesContainer>
            <MainTopContainer>
                <NavBar />
            </MainTopContainer>
            <MainInnerContainer>
                <HeaderTitle> Hello, {username}! Welcome to our website!</HeaderTitle>
                <SlideShow />
            </MainInnerContainer>
        </PagesContainer>
    );
}
