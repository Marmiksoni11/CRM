import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
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
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import Logo from 'src/components/logo';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login_user_request } from 'src/actions/authActions';

// ----------------------------------------------------------------------

function LoginView({ login_user_request, state }) {
  const theme = useTheme();
  // const user = state?.users?.user
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // console.log("users", users);
  // console.log("user", user);

  const handleClick = () => {
    // dispatch(CreateUserReq(formData));
    navigate('/');
  };

  const handleNav = () => {
    navigate('/register');
  };

  // const onFormSubmit = (values) => {
  //   const { username_or_email, password } = values;
  //   if(username_or_email && password){
  //     let payload = {
  //       username_or_email,
  //       password
  //     }
  //     login_user_request(payload)
  //   }
  // };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleFocus,
    handleBlur,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username_or_email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username_or_email: Yup.string().required('Username or Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      const { username_or_email, password } = values;
      if (username_or_email && password) {
        let payload = {
          username_or_email,
          password,
        };
        login_user_request(payload);
      }
    },
  });

  const renderForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // formikSubmit(e);
        handleSubmit(e);
        // console.log(" Checking Number 1");
      }}
    >
      {/* {console.log("touched.username_or_email && errors.username_or_email", touched.username_or_email && errors.username_or_email)} */}

      <Stack spacing={3}>
        <TextField
          name="username_or_email"
          label="Username or Email"
          value={values.username_or_email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={errors.username_or_email}
          helperText={touched.username_or_email ? errors.username_or_email : ''}
        />
        <TextField
          name="password"
          label="Password"
          value={values.password}
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={errors.password}
          helperText={touched.password ? errors.password : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <Button
        // loading={isSubmitting}
        // disabled={isSubmitting}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
      >
        Login
      </Button>
    </form>
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
          <Typography variant="h4">Sign In</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5, cursor: 'pointer' }} onClick={handleNav}>
              Get started
            </Link>
          </Typography>

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

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  login_user_request: (payload) => {
    console.log('Dispatching login_user_request action')
    dispatch(login_user_request(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
