import { useEffect, useState } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import Logo from 'src/components/logo';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_request } from 'src/actions/userActions';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function RegisterView() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.users?.user);
  console.log('user===>', user);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    number: '',
    email: '',
  });

  console.log('formData===>>>', formData);
  const handleClick = () => {
    dispatch(get_user_request(formData));
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(()=>{
  //   dispatch({type:"USER_FETCH_REQUESTED"});
  // },[dispatch])

  const handleNav = () => {
    navigate('/login')
  };


  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="first_name" label="First Name" onChange={handleFormData} />
        <TextField name="last_name" label="Last Name" onChange={handleFormData} />
        <TextField name="number" label="Contact" onChange={handleFormData} />
        <TextField name="email" label="Email Address" onChange={handleFormData} />
      </Stack>

      <Typography variant="body2" sx={{ mt: 4, mb: 4 }}>
          Already have an account?
        <Link variant="subtitle2" sx={{ ml: 0.5, cursor: "pointer" }} onClick={handleNav} >
          Sign In
        </Link>
      </Typography>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Register
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" marginBottom={"30px"}>Register</Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
