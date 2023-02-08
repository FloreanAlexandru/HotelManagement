import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { GenderAmbiguous } from '@styled-icons/bootstrap/GenderAmbiguous';

const useStyles = makeStyles((theme) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        fontSize: "15px",
        color: "rgb(47,53,66,1)",
      },
    },
  })
);

const RadioForm = styled(FormControl)`
  width: 100%;
  align-items: center;
  text-align: center;
`;

export default function RadioChecker(props) {
  const classes = useStyles();
  const { name, value, onChange } = props;

  return (
    <RadioForm component='fieldset'>
      <FormLabel component='legend'>
        <GenderAmbiguous size='20' opacity='0.7' />
        Gender *
      </FormLabel>
      <RadioGroup
        row
        aria-label='gender'
        name={name}
        value={value}
        onChange={onChange}
      >
        <FormControlLabel
          value={value === 2 ? value : "2"}
          control={<Radio className={classes.smallRadioButton} />}
          label='Female'
        />
        <FormControlLabel
          value={value === 1 ? value : "1"}
          control={<Radio className={classes.smallRadioButton} />}
          label='Male'
        />
        <FormControlLabel
          value={value === 3 ? value : "3"}
          control={<Radio className={classes.smallRadioButton} />}
          label='Other'
        />
      </RadioGroup>
    </RadioForm>
  );
}
