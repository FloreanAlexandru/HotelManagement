import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { ROUTES } from './components/requests/pahts';
import AccountComponent from './components/accountBox/accountComponent';
import MainPage from './components/pages/mainPage';
import NotFound from './components/pages/notFound';
import Forbidden from './components/pages/forbiddenPage';
import UsersManagement from './components/pages/userPages/userManagement';
import EditUser from './components/pages/userPages/editUserPage';
import ViewUser from './components/pages/userPages/viewUserPage';
import AddUser from './components/pages/userPages/addUser';
import MyAccount from './components/pages/userPages/myAccount';
import HotelsManagement from './components/pages/hotelPages/hotelManagement';
import AddHotel from './components/pages/hotelPages/addHotel';
import ViewHotel from './components/pages/hotelPages/viewHotel';
import EditHotel from './components/pages/hotelPages/editHotel';
import AddRoom from './components/pages/roomPages/addRoom';
import RoomsManagement from './components/pages/roomPages/roomManagement';
import ViewRoom from './components/pages/roomPages/viewRoom';
import { ROLES } from  './components/requests/const';
import backImage from './assets/bck-photo-7.jpg';

const AppContainer = styled.div`
  background: url(${backImage}) no-repeat 100% / auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  colors: {
    text: "#dcdcda",
    backgroundPrimary: "#2f3542",
    backgroundSecondary: "#57606f",
    borderInput: "#0000009d",
    placeholder: "#2f3542cc",
    errors: "#ff0000",
    whitesmoke: "#f5f5f5",
  },
};

const role = localStorage.getItem('role');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Routes> 
            <Route path={ROUTES.AUTH} element={<AccountComponent />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
            {localStorage.getItem('token') &&
            <>
              <Route path={ROUTES.MYACCOUNT} element={<MyAccount />} />
              <Route path={ROUTES.FORBIDDEN} element={<Forbidden />} />
              <Route path={ROUTES.MAINPAGE} element={<MainPage />} />
              
              {role === ROLES.MANAGER ?
              <>
                <Route path={ROUTES.USERSMANAGEMENT} element={<UsersManagement />} />
                <Route path={ROUTES.EDITUSER} element={<EditUser />} />
                <Route path={ROUTES.VIEWUSER} element={<ViewUser />} />
                <Route path={ROUTES.ADDUSER} element={<AddUser />} />
                <Route path={ROUTES.ADDHOTEL} element={<AddHotel />} />
                <Route path={ROUTES.EDITHOTEL} element={<EditHotel />} />
                <Route path={ROUTES.ADDROOM} element={<AddRoom />} />
                <Route path={ROUTES.HOTELMANAGEMENT} element={<HotelsManagement />} />
                <Route path={ROUTES.VIEWHOTEL} element={<ViewHotel />} />
                <Route path={ROUTES.ROOMMANAGEMENT} element={<RoomsManagement />} />
                <Route path={ROUTES.VIEWROOM} element={<ViewRoom />} />
              </>
              :
              <>
                <Route path={ROUTES.HOTELMANAGEMENT} element={<HotelsManagement />} />
                <Route path={ROUTES.VIEWHOTEL} element={<ViewHotel />} />
                <Route path={ROUTES.ROOMMANAGEMENT} element={<RoomsManagement />} />
                <Route path={ROUTES.VIEWROOM} element={<ViewRoom />} />
              </>
              }
            </>
            }
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
