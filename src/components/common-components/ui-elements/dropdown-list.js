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
`

const InputStyled = styled(InputLabel)`
    width: 100%;
`
const SelectStyled = styled(Select)`
    width: 100%;
`
export function DropdownMenu(props) {
  const { name, value, onChange } = props;

  return (
      <DropdownForm>
        <InputStyled>Role</InputStyled>
        <SelectStyled
          name={name}
          value={value}
          label="role"
          onChange={onChange}
        >
          <MenuItem value={1}>Client</MenuItem>
          <MenuItem value={2}>Employee</MenuItem>
          <MenuItem value={3}>Manager</MenuItem>
        </SelectStyled>
      </DropdownForm>
  );
}
