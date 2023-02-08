import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { DeviceSize } from './responsiveSizes';
import { MenuToggle } from './menuToggle';
import { ROUTES } from '../requests/pahts';

const NavLinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinksWrapperMobile = styled(LinksWrapper)`
  width: 100%;
  height: 30%;
  top: 74px;
  left: 0;
  flex-direction: column;
  position: fixed;
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.colors.backgroundPrimary} 30%,
    ${(props) => props.theme.colors.backgroundSecondary} 55%
  );
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 15px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 17px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.text};
    filter: brightness(1.34);
  }
`;

const LinkItemMobile = styled.li`
  height: 50%;
  width: 100%;
  padding: 0 15px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 17px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.text};
    filter: brightness(1.34);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const SubLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  text-align: center;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.text};
    filter: brightness(1.34);
  }
`;

const DropDownContent = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.backgroundSecondary};
`;

const DropDownItem = styled.li`
  &:hover ${DropDownContent} {
    display: grid;
    margin-bottom: 70px;
  }
`;

const DropDownContentMobile = styled(DropDownContent)`
  height: 50%;
  margin-top: 10px;
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.colors.backgroundPrimary} 33%,
    ${(props) => props.theme.colors.backgroundSecondary} 55%
  );
`;

const DropDownItemMobile = styled.li`
  &:hover ${DropDownContentMobile} {
    display: flex;
    justify-content: space-evenly;
  }
`;

export function NavLinks(props) {
  const isMobileDevice = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate(ROUTES.MAINPAGE);
  }

  const editMyAccount = () => {
    navigate(ROUTES.MYACCOUNT);
  }

  const showUsersManagement = () => {
    navigate(ROUTES.USERSMANAGEMENT);
  };
  
  const showHotelsManagement = () => {
    navigate(ROUTES.HOTELMANAGEMENT);
  };

  const showRoomsManagement = () => {
    navigate(ROUTES.ROOMMANAGEMENT);
  }

  const clickLogOut = () => {
    navigate(ROUTES.AUTH);
    localStorage.clear();
  };

  return (
    <NavLinkContainer>
      {!isMobileDevice ? (
        <LinksWrapper>
          <LinkItem>
            <Link onClick={goToMainPage}>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={editMyAccount}>My Account</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={showUsersManagement}>User Management</Link>
          </LinkItem>
          <DropDownItem>
            <LinkItem>
              <Link>Hotel Management</Link>
            </LinkItem>
            <DropDownContent>
              <SubLink onClick={showHotelsManagement}>Hotels</SubLink>
              <SubLink onClick={showRoomsManagement}>Rooms Management</SubLink>
            </DropDownContent>
          </DropDownItem>
          <LinkItem>
            <Link onClick={clickLogOut}>Log out</Link>
          </LinkItem>
        </LinksWrapper>
      ) : (
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      )}
      {isOpen && isMobileDevice && (
        <LinksWrapperMobile>
          <LinkItemMobile>
            <Link onClick={goToMainPage}>Home</Link>
          </LinkItemMobile>
          <LinkItemMobile>
            <Link onClick={editMyAccount}>My Account</Link>
          </LinkItemMobile>
          <LinkItemMobile>
            <Link onClick={showUsersManagement}>User Management</Link>
          </LinkItemMobile>
          <DropDownItemMobile>
            <LinkItemMobile>
              <Link>Hotel Management</Link>
            </LinkItemMobile>
            <DropDownContentMobile>
              <SubLink onClick={showHotelsManagement}>Hotels</SubLink>
              <SubLink onClick={showRoomsManagement}>Rooms Management</SubLink>
            </DropDownContentMobile>
          </DropDownItemMobile>
          <LinkItem>
            <Link onClick={clickLogOut}>Log out</Link>
          </LinkItem>
        </LinksWrapperMobile>
      )}
    </NavLinkContainer>
  );
}
