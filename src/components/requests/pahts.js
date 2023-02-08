export const ROUTES = {
  NOTFOUND: "/*",
  FORBIDDEN: "/forbidden",
  AUTH: "/auth",
  MAINPAGE: "/main",
  MYACCOUNT: "/my-account",
  USERSMANAGEMENT: "/users-management",
  EDITUSER: "/users-management/edit-user",
  VIEWUSER: "/users-management/view-user",
  ADDUSER: "/users-management/add-user",
  HOTELMANAGEMENT: "/hotels-management",
  ADDHOTEL: "/hotels-management/add-hotel",
  EDITHOTEL: "/hotels-management/edit-hotel",
  VIEWHOTEL: "/hotels-management/view-hotel",
  ROOMMANAGEMENT: "/rooms-management",
  VIEWROOM: "/rooms-management/view-room",
  ADDROOM: "/rooms-management/add-room",
};

export const HOST = "http://localhost/api/v1";

export const BACKEND_ROUTES = {
  REGISTER: "/register",
  LOGIN: "/auth",
  ROLES: "/roles",
  USERS: "/users",
  USERS_DEL_EDIT_VIEW: "/users/",
  HOTELS: "/hotels",
  HOTELS_EDIT_VIEW: "/hotels/",
  ROOMS: '/rooms'
};

export const Headers = {
  "Content-Type": "application/json",
  "X-Auth-Token": localStorage.getItem("token"),
};
