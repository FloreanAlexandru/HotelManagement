import React from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { HOST, BACKEND_ROUTES, Headers, ROUTES } from '../requests/pahts';

const NavigationFunction = () => {
  let navigate = useNavigate();
  navigate(ROUTES.USERSMANAGEMENT);
}

export function DecodeToken() {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  localStorage.setItem("id", decoded.id);
  localStorage.setItem("role",decoded.role);
}

export default function refreshPage() {
  window.location.reload(false);
}

/* User services */

export function ConfirmDeleteUser(id) {
  confirmAlert({
    title: "Confirm your delete",
    message: "Are you sure you want to delete this account?",
    buttons: [
      {
        label: "Yes",
        onClick: () => DeleteUser(id),
      },
      {
        label: "No",
      },
    ],
  });
}

export async function DeleteUser(id) {
  await axios
    .delete(HOST + BACKEND_ROUTES.USERS_DEL_EDIT_VIEW + id, {
      headers: Headers,
    })
    .then(() => {
      refreshPage();
    });
}

export function ConfirmEditMyAccount(userId, values) {
  confirmAlert({
    title: "Confirm your changes",
    message: "Are you sure your changes are valid?",
    buttons: [
      {
        label: "Yes",
        onClick: () => UpdateProfileFunction(userId, values),
      },
      {
        label: "No",
      },
    ],
  });
}

export async function UpdateProfileFunction(userId, values) {
  await axios
    .put(HOST + BACKEND_ROUTES.USERS_DEL_EDIT_VIEW + userId, values, {
      headers: Headers,
    })
    .then(() => {
      refreshPage();
    })
}

export async function ViewUserProfile(userId) {
   await axios
    .get(HOST + BACKEND_ROUTES.USERS_DEL_EDIT_VIEW + userId,{
      headers: Headers,
    })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    })
}

export function ConfirmEditUser(userId, values) {
  confirmAlert({
    title: "Confirm your changes",
    message: "Are you sure you to change this user?",
    buttons: [
      {
        label: "Yes",
        onClick: () => EditPartialUser(userId, values),
      },
      {
        label: "No",
      }
    ]
  })
}

export async function EditPartialUser(userId, values) {
  await axios
    .patch(HOST + BACKEND_ROUTES.USERS_DEL_EDIT_VIEW + userId, values, {headers: Headers});
}

export function ConfirmAddUser(dataAccount) {
  confirmAlert({
    title: "Confirm your data",
    message: "Are you sure your user is valid?",
    buttons: [
      {
        label: "Yes",
        onClick: () => AddUserFuction(dataAccount),
      },
      {
        label: "No",
      },
    ],
  });
}

export async function AddUserFuction(dataAccount) {
  await axios
    .post(HOST + BACKEND_ROUTES.USERS, dataAccount, {headers: Headers});
}
/* Hotels services */

export async function ViewHotel(hotelId) {
  await axios
    .get(HOST + BACKEND_ROUTES.HOTELS_EDIT_VIEW + hotelId, {
      headers: Headers,
    })
    .then((response) => {
      localStorage.setItem("hotel", JSON.stringify(response.data.hotel));
    })
}

export function ConfirmEditHotel(hotelId, values) {
  confirmAlert({
    title: "Confirm your changes",
    message: "Are you sure you want to change this hotel?",
    buttons: [
      {
        label: "Yes",
        onClick: () => EditHotel(hotelId, values),
      },
      {
        label: "No",
      },
    ],
  });
}

export async function EditHotel(hotelId, values) {
  await axios
    .put(HOST + BACKEND_ROUTES.HOTELS_EDIT_VIEW + hotelId, values, {
      headers: Headers,
    })
    .then(() => {
      refreshPage();
    })
}

export async function GetHotels() {
  await axios
    .get(HOST + BACKEND_ROUTES.HOTELS, { headers: Headers })
    .then((response) => {
      localStorage.setItem("hotels", JSON.stringify(response.data));
    });
}

export function ConfirmAddRoom(values) {
  confirmAlert({
    title: "Confirm your changes",
    message: "Are you sure ?",
    buttons: [
      {
        label: "Yes",
        onClick: () => AddRoom(values),
      },
      {
        label: "No",
      },
    ],
  });
} 

export async function AddRoom(roomValues) {
  await axios
    .post(HOST + BACKEND_ROUTES.ROOMS, roomValues, {
      headers: Headers,
    })
    .then(() => {
        refreshPage();    
    });
}

export async function ViewRoom(roomId) {
  await axios
    .get(HOST + BACKEND_ROUTES.ROOMS + '/' + roomId, {headers: Headers})
    .then((response) => {
      localStorage.setItem("room", JSON.stringify(response.data));
    })
}
