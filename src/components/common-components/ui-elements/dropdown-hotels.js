import React from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropdownForm = styled(FormControl)`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: {$props => props.theme.colors.whitesmoke};
`;

const InputStyled = styled(InputLabel)`
  width: 100%;
`;

const SelectStyled = styled(Select)`
  width: 100%;
`;

export function DropdownMenuHotels(props) {
  const { name, value, onChange, data, label } = props;

  return (
    <DropdownForm>
      <InputStyled>Hotel</InputStyled>
      <SelectStyled 
        name={name} 
        value={value} 
        label={label}
        autoWidth
        onChange={onChange}
      >
        {data !== null &&
          data.hotels.map(item => {
            return <MenuItem value={item.id}>{item.name}</MenuItem>;
          })
        }
      </SelectStyled>
    </DropdownForm>
  );
}
