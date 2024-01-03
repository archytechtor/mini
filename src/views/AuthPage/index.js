import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink, Navigate} from 'react-router-dom';
import {magic, ROUTES} from '@utils';
import {
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Button} from '@ui';

const AuthPage = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    toggleShowPassword,
    showPassword,
    isLogin,
    user,
    setIsLogin,
    loading,
    submit
  } = props;

  if (user) {
    return <Navigate to={ROUTES.MAIN} />;
  }

  return (
    <Stack spacing={2} p={2}>
      <TextField
        label={'Email'}
        value={email}
        onChange={setEmail}
        error={!email}
        size={'small'}
        InputLabelProps={{shrink: true}}
      />
      <FormControl variant={'outlined'} size={'small'}>
        <InputLabel shrink={true} htmlFor={'password'} size={'small'}>
          {'Пароль'}
        </InputLabel>
        <OutlinedInput
          id={'password'}
          type={showPassword ? 'text' : 'password'}
          label={'Пароль'}
          value={password}
          onChange={setPassword}
          size={'small'}
          endAdornment={
            (
              <InputAdornment position={'end'}>
                <IconButton
                  onClick={toggleShowPassword}
                  onMouseDown={toggleShowPassword}
                  edge={'end'}
                  size={'small'}
                >
                  {
                    showPassword ?
                      <VisibilityOff /> :
                      <Visibility />
                  }
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
      <Button
        onClick={submit}
        disabled={loading}
      >
        {isLogin ? 'Войти' : 'Создать'}
      </Button>
      {
        isLogin ? (
          <RouterLink
            to={ROUTES.SIGN_UP}
            onClick={() => setIsLogin(false)}
          >
            {'Нет аккаунта? '}
            {'Регистрация'}
          </RouterLink>
        ) : (
          <RouterLink
            to={ROUTES.SIGN_IN}
            onClick={() => setIsLogin(true)}
          >
            {'Есть аккаунт? '}
            {'Авторизация'}
          </RouterLink>
        )
      }
    </Stack>
  );
};

const mapStore = ({UserStore}) => {
  return {
    email: UserStore.email,
    setEmail: UserStore.setEmail,
    password: UserStore.password,
    setPassword: UserStore.setPassword,
    toggleShowPassword: UserStore.toggleShowPassword,
    showPassword: UserStore.showPassword,
    isLogin: UserStore.isLogin,
    user: UserStore.user,
    setIsLogin: UserStore.setIsLogin,
    loading: UserStore.loading,
    submit: UserStore.submit
  };
};

AuthPage.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  toggleShowPassword: PropTypes.func,
  showPassword: PropTypes.bool,
  isLogin: PropTypes.bool,
  user: PropTypes.object,
  setIsLogin: PropTypes.func,
  loading: PropTypes.bool,
  submit: PropTypes.func
};

export default magic(AuthPage, {store: mapStore});