import styled, { keyframes } from 'styled-components';

export const BoxContainer = styled.div`
  width: 600px;
  min-height: 660px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.text};
  box-shadow: 12px 12px rgba(15, 15, 15, .4);
  position: relative;
  overflow: hidden;
`;

export const BackDrop = styled.div`
  width: 160%;
  height: 25%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  z-index: 10;
  left: -180px;
  top: -20px;
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.colors.backgroundPrimary} 30%,
    ${(props) => props.theme.colors.backgroundSecondary} 55%
  );
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1px;
  margin-top: 150px;
`;

export const CheckBox = styled.input`
  height: 17px;
  width: 17px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.borderInput};
  border-radius: 50%;
  transition: all 200ms ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid rgba(47, 53, 66, 0.7);
  }
`;

export const Input = styled.input`
  height: 37px;
  width: 50%;
  outline: none;
  padding: 0 10px;
  border: 1px solid ${(props) => props.theme.colors.borderInput};
  border-radius: 20px;
  transition: all 200ms ease-in-out;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.placeholder};
  }
`;

export const InnerInput = styled(Input)`
  width: 100%;
`;

export const TextArea = styled(Input)`
  height: 75px;
  width: 70%;
`;

export const FileInput = styled(Input)`
  width: 25%;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`

const entranceBtn = keyframes`
    0% { transform: translateX(-350px) }
    15% { transform: translateX(-300px) }
    30% { transform: translateX(-250px) }
    45% { transform: translateX(-200px) }
    60% { transform: translateX(-150px) }
    75% { transform: translateX(-100px) }
    90% { transform: translateX(-50px) }
    100% { transform: translateX(0px) }
`;

export const Button = styled.button`
  width: 35%;
  padding: 11px;
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.colors.backgroundPrimary} 30%,
    ${(props) => props.theme.colors.backgroundSecondary} 55%
  );
  color: #dcdcda;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  animation: ${entranceBtn} 2s linear;

  &:hover {
    filter: brightness(1.34);
  }
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: ${(props) => props.theme.colors.borderInput};
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: ${(props) => props.theme.colors.borderInput};
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;

  &:hover {
    color: black;
  }
`;

const entranceInput = keyframes`
    from { width: 0%; }    
    to { width: 100%; }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  animation: ${entranceInput} 2s linear;
`;

export const InnerContainer = styled(Container)`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const entranceLogo = keyframes`
    0% {
        transform: translateY(-100px) translateX(-100px);
    }
    100% {
        transform: translateY(0px) translateX(0px);
`;

export const LogoDiv = styled.div`
  height: 150px;
  width: 150px;
  z-index: 10;
  margin-bottom: 20px;
  animation: 2s ${entranceLogo} ease-in;
`;

export const Errors = styled.p`
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.colors.errors};
`;

export const LogoNavBar = styled.div`
  width: 100px;
  height: 100px;
  animation: 2s ease-in;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
  }
`;

export const NavBarText = styled.h2`
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  animation: 2s ${entranceLogo} ease-in;
`;

export const PagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PagesTopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const PagesInnerContainer = styled.div`
  width: 75%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const cardEntrance = keyframes`
  0% {opacity: 0}
  100% {opacity: 100%}
`

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: linear-gradient(58deg, 
        ${props => props.theme.colors.backgroundPrimary} 30% ,
        ${props => props.theme.colors.backgroundSecondary} 55%);
    animation: ${cardEntrance} 2s ease-in;
`

export const TopCardContainer = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const BottomCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardText = styled(NavBarText)`
    font-size: 21px;
    animation: none;
`;
