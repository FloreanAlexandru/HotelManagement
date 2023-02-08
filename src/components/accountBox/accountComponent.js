import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import RegisterForm from './register-form';
import LogInForm from './login-form';
import { AccountContext } from './accountContext';
import { LogoDiv } from '../common-components/common';
import logo from '../../assets/logo-hms.png';

const BoxContainer = styled.div`
  width: 600px;
  height: 860px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.text};
  box-shadow: 12px 12px rgba(15, 15, 15, 0.4);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -300px;
  left: -90px;
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.colors.backgroundPrimary} 30%,
    ${(props) => props.theme.colors.backgroundSecondary} 55%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.backgroundPrimary};
  text-align: center;
  padding-top: 30px;
`;

const SmallText = styled.h6`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  z-index: 10;
  transform: translateY(100px);
  margin-right: 40px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BackDropVariants = {
  expanded: {
    width: "120%",
    height: "1250px",
    borderRadius: "20%",
  },
  collapsed: {
    width: "160%",
    height: "505px",
    borderRadius: "50%",
  },
};

const ExpandingTransition = {
  type: "spring",
  duration: 2.5,
  stiffness: 30,
};

const TitleContainer = styled.div`
  width: 100%;
  height: 0;
`;

export default function AccountComponent(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [isActive, setActive] = useState("login");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, ExpandingTransition.duration * 1000 - 1500);
  };

  const SwitchBetweenPages = (pageName) => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive(pageName);
    }, 400);
  };

  const contextValue = { SwitchBetweenPages };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={BackDropVariants}
            transition={ExpandingTransition}
          />
          <HeaderContainer>
            {isActive === "login" && (
              <LogoDiv>
                <img src={logo} alt='logo' />
              </LogoDiv>
            )}
            {isActive === "register" && (
              <LogoDiv>
                <img src={logo} alt='logo' />
              </LogoDiv>
            )}
            {isActive === "login" ? (
              <SmallText>Please log in to continue.</SmallText>
            ) : (
              <SmallText>Please register to continue. </SmallText>
            )}
          </HeaderContainer>
        </TopContainer>
        <TitleContainer>
          {isActive === "login" ? (
            <HeaderText>Welcome to Log In</HeaderText>
          ) : (
            <HeaderText>Welcome to Register</HeaderText>
          )}
        </TitleContainer>
        <InnerContainer>
          {isActive === "login" ? <LogInForm /> : <RegisterForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
