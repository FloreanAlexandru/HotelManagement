import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Trash } from '@styled-icons/entypo/Trash';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Preview } from '@styled-icons/material-rounded/Preview';
import { Times } from '@styled-icons/fa-solid/Times';
import { CheckLg } from '@styled-icons/bootstrap/CheckLg';
import { DownArrow } from '@styled-icons/boxicons-regular/DownArrow';
import { UpArrow } from '@styled-icons/boxicons-regular/UpArrow';
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from './styles';
import usePagination from './pagination';
import Marginer from '../marginer';
import { ConfirmDeleteUser, ViewUserProfile, ViewHotel, ViewRoom} from '../../services/services';
import { ROUTES } from '../../requests/pahts';

const iconMap = {
  delete: <Trash size='20' />,
  edit: <Edit size='20' />,
  view: <Preview size='20' />,
};

const gender = { 1: "male", 2: "female", 3: "other" };
const role = { 0: "Owner", 1: "Client", 2: "Employee", 3: "Manager" };
const dataPerPage = 5;

const useStyles = makeStyles((theme) => ({
  selected: {
    background: "rgba(47,53,66,0.8)",
    color: "#f5f5f5",
  },
}));

const ArrowContainer = styled.div`
  width: auto;
  height: auto;
`;

export default function Table({ data, typeTable }) {
  const classes = useStyles();

  const [order, setOrder] = useState("ASC");
  const [arrowOrder, setArrowOrder] = useState("ASC");
  const [dataSort, setDataSort] = useState(data);

  const sorting = (col) => {
    let sorted;

    if (order === "ASC") {
      sorted = [...data].sort((a, b) =>
        isNaN(a[col])
          ? a[col].toLowerCase() > b[col].toLowerCase()
            ? 1
            : -1
          : a[col] - b[col]
          ? -1
          : 1
      );

      setDataSort(sorted);
      setArrowOrder("DSC");
      setOrder("DSC");
          
    } else {
      sorted = [...data].sort((a, b) =>
        isNaN(a[col])
          ? a[col].toLowerCase() < b[col].toLowerCase()
            ? 1
            : -1
          : b[col] - a[col]
          ? 1
          : -1
      );

      setDataSort(sorted);
      setArrowOrder("ASC");
      setOrder("ASC");

    }
  };

  const [page, setPage] = useState(1);
  const [prevButton, setPrevButton] = useState(true);
  const [nextButton, setNextButton] = useState(false);
  const count = Math.ceil(dataSort.length / dataPerPage);
  const _DATA = usePagination(dataSort, dataPerPage);

  const handleChange = (event, value) => {
    {
      value > 1 ? setPrevButton(false) : setPrevButton(true);
    }
    {
      value < count ? setNextButton(false) : setNextButton(true);
    }

    setPage(value);
    _DATA.jump(value);
  };

  const navigate = useNavigate();
  const keys = Object.keys(data[0]);

  async function GoToEditUser(userId) {
    await ViewUserProfile(userId);
    navigate(ROUTES.EDITUSER);
  }

  async function GoToUserProfile(userId) {
    await ViewUserProfile(userId);
    navigate(ROUTES.VIEWUSER);
  }

  async function GoToViewHotel(hotelId) {
    await ViewHotel(hotelId);
    navigate(ROUTES.VIEWHOTEL);
  }

  async function GoToEditHotel(hotelId) {
    await ViewHotel(hotelId);
    navigate(ROUTES.EDITHOTEL);
  }

  async function GoToViewRoom(hotelName) {
    let hotelsData = JSON.parse(localStorage.getItem("hotels"));
    let findIdHotelByName = hotelsData.hotels.find( ({name}) => name === hotelName); 

    await ViewRoom(findIdHotelByName.id);
    navigate(ROUTES.VIEWROOM);  
  }

  return (
    <>
      <STable>
        <STHead>
          <STHeadTR>
            {keys.map((item, index) => {
              return (
                <STH key={index} onClick={() => sorting(item)}>
                  <ArrowContainer>
                    {arrowOrder === "ASC"  ?
                      <DownArrow size='12' />
                    :
                      <UpArrow size='12' />
                    }
                    {item}
                  </ArrowContainer>
                </STH>
              );
            })}
          </STHeadTR>
        </STHead>
        <STBody>
          {_DATA.currentData().map((obj) => {
            return (
              <STBodyTR key={obj.id}>
                {keys.map((item, index) => {
                  const id = obj.id;

                  if (item === "gender") {
                    return <STD key={index}>{gender[obj[item]]}</STD>;
                  } else if (item === "role") {
                    return <STD key={index}>{role[obj[item]]}</STD>;
                  }

                  if (item === "Pets" || item === "Smoking") {
                    if (obj[item] === 1) {
                      return (
                        <STD key={index}>
                          <CheckLg size='20' />
                        </STD>
                      );
                    } else {
                      return (
                        <STD key={index}>
                          <Times size='20' />
                        </STD>
                      );
                    }
                  }

                  if (Object.keys(iconMap).includes(item)) {
                    if (item === "delete") {
                      return (
                        <STD key={index} onClick={() => ConfirmDeleteUser(id)}>
                          {iconMap[item]}
                        </STD>
                      );
                    } else if (item === "view") {
                      if (typeTable === "user") {
                        return (
                          <STD key={index} onClick={() => GoToUserProfile(id)}>
                            {iconMap[item]}
                          </STD>
                        );
                      } else if (typeTable === "hotel") {
                        return (
                          <STD key={index} onClick={() => GoToViewHotel(id)}>
                            {iconMap[item]}
                          </STD>
                        );
                      } else if (typeTable === "room") {
                        return (
                          <STD key={index} onClick={() => GoToViewRoom(obj.Hotel)}>

                            {iconMap[item]}
                          </STD>
                        );
                      }
                    } else if (item === "edit") {
                      if (typeTable === "user") {
                        return (
                          <STD key={index} onClick={() => GoToEditUser(id)}>
                            {iconMap[item]}
                          </STD>
                        );
                      } else if (typeTable === "hotel") {
                        return (
                          <STD key={index} onClick={() => GoToEditHotel(id)}>
                            {iconMap[item]}
                          </STD>
                        );
                      }
                    }
                  }
                  return <STD key={index}>{obj[item]}</STD>;
                })}
              </STBodyTR>
            );
          })}
        </STBody>
      </STable>
      <Marginer direction='vertical' margin={30} />
      <Pagination
        count={count}
        page={page}
        shape='round'
        variant='outlined'
        size='large'
        boundaryCount={3}
        onChange={handleChange}
        hidePrevButton={prevButton}
        hideNextButton={nextButton}
        renderItem={(item) => (
          <PaginationItem {...item} className={classes.selected} />
        )}
      />
    </>
  );
}
