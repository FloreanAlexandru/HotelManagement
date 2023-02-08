import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LogoNavBar, NavBarText } from '../common-components/common';
import { NavLinks } from './navLinks';
import logo from '../../assets/logo-hms.png';

const NavBarAnimation = keyframes`
  0% {opacity:0 ;}
  100% {opacity:1 ;}
`;

const NavBarContainer = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.15);
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.colors.backgroundPrimary} 30%,
    ${(props) => props.theme.colors.backgroundSecondary} 55%
  );
  animation: ${NavBarAnimation} 2s ease-in;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  height: 100%;
`;

export function NavBar(props) {
  return (
    <NavBarContainer>
      <LeftSection>
        <LogoNavBar>
          <img src={logo} alt='logo' />
        </LogoNavBar>
        <NavBarText>Hotel Management System</NavBarText>
      </LeftSection>
      <RightSection>
        <NavLinks />
      </RightSection>
    </NavBarContainer>
  );
}
