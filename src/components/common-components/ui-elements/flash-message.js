import React, { useState } from 'react';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

export default function SimpleSnackbar(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        {props.name === "error" ? (
          <Alert severity='error' variant='filled'>
            Your name is already in use!
            <IconButton size='small' aria-label='close' onClick={handleClose}>
              <CloseIcon fontSize='small' />
            </IconButton>
          </Alert>
        ) : (
          <Alert severity='success' variant='filled'>
            Successfully registered!
            <IconButton size='small' aria-label='close' onClick={handleClose}>
              <DoneIcon fontSize='small' />
            </IconButton>
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
