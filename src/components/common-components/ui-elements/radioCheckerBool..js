import React from 'react';
import styled, { keyframes } from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Pets } from '@styled-icons/material/Pets';
import { Smoking } from '@styled-icons/fa-solid/Smoking';

const useStyles = makeStyles((theme) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        fontSize: "15px",
        color: "rgb(47,53,66,1)",
      },
    },
    formLabelStyled: {
      width: "23%",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-evenly",
    },
  })
);

const entranceInput = keyframes`
    from { width: 0%; }    
    to { width: 100%; }
`;

const RadioForm = styled(FormControl)`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  animation: ${entranceInput} 2s linear;
`;

export default function RadioCheckerBool(props) {
  const classes = useStyles();
  const { name, value, onChange, data } = props;

  return (    
   data === "pets" ? (
      <RadioForm component='fieldset'>
         <FormLabel className={classes.formLabelStyled} component='legend'>
            * Pets 
            <Pets size='25' opacity='0.7' />
          </FormLabel>
          
          <RadioGroup
            row
            aria-label='Allow pets'
            name={name}
            value={value}
            onChange={onChange}
          >
            <FormControlLabel
              value='1'
              control={<Radio className={classes.smallRadioButton} />}
              label='Yes'
            />
            <FormControlLabel
              value='0'
              control={<Radio className={classes.smallRadioButton} />}
              label='No'
            />
          </RadioGroup>
        </RadioForm>
      ) : (
        <RadioForm component='fieldset'>
          <FormLabel className={classes.formLabelStyled} component='legend'>
            * Smoking
            <Smoking size='25' opacity='0.7' />
          </FormLabel>
          <RadioGroup
            row
            aria-label='Allow smoking'
            name={name}
            value={value}
            onChange={onChange}
          >
            <FormControlLabel
              value={'1'}
              control={<Radio className={classes.smallRadioButton} />}
              label='Yes'
            />
            <FormControlLabel
              value={'0'}
              control={<Radio className={classes.smallRadioButton} />}
              label='No'
            />
          </RadioGroup>
        </RadioForm>
      )
  );
}
