import * as React from 'react';
import PropTypes from 'prop-types'; 
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createUser } from '../../../APIs/createUser';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Dailog({ openStatus, handleClose }) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [error, setError] = React.useState({
    name: false,
    username: false,
    email: false,
    password: false,
  });

  const handleAddUser = async () => {
    if (!name || !username || !email || !password) {
      setError({
        name: !name,
        username: !username,
        email: !email,
        password: !password,
      });
      return;
    }

    const userData = {
      name,
      email,
      password,
      make_admin: isAdmin,
    };
  
    const result = await createUser(userData);
  
    if (result.status === 'success') {
      console.log('User added successfully:', result.data);
    } else {
      console.error('Failed to add user:', result.error);
    }


    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setIsAdmin(false);
    setError({
      name: false,
      username: false,
      email: false,
      password: false,
    });
    handleClose();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError({ ...error, name: false });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError({ ...error, username: false });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: false });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: false });
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openStatus}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add User
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => {
            handleClose();
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setIsAdmin(false);
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ width: '500px', display: 'grid' }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
            sx={{ width: '300px', margin: '1rem 0rem', marginLeft: '1rem' }}
            onChange={handleNameChange}
            error={error.name}
            helperText={error.name && 'Name is required'}
            value={name}
          />
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            required
            error={error.username}
            helperText={error.username && 'Username is required'}
            sx={{ width: '300px', margin: '1rem 0rem', marginLeft: '1rem' }}
            onChange={handleUsernameChange}
            value={username}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            type="Email"
            variant="outlined"
            required
            error={error.email}
            helperText={error.email && 'Email is required'}
            sx={{ width: '300px', margin: '1rem 0rem', marginLeft: '1rem' }}
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            required
            error={error.password}
            helperText={error.password && 'Password is required'}
            sx={{ width: '300px', margin: '1rem 0rem', marginLeft: '1rem' }}
            onChange={handlePasswordChange}
            value={password}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                name="isAdmin"
                color="primary"
              />
            }
            label="Make admin"
            sx={{ marginLeft: '1rem' }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleClose();
              setName('');
              setUsername('');
              setEmail('');
              setPassword('');
              setIsAdmin(false);
            }}
          >
            Cancel
          </Button>
          <Button autoFocus onClick={handleAddUser}>
            Add
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}


Dailog.propTypes = {
  openStatus: PropTypes.any,
  handleClose: PropTypes.func,
};
