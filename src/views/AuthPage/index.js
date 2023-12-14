import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink, Navigate} from 'react-router-dom';
import {magic, ROUTES} from '@utils';
import {Button} from '@ui';
import {Input, Flex} from 'antd';
import s from './style.scss';

const AuthPage = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
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
    <Flex
      justify={'center'}
      align={'center'}
      className={s.container}
    >
      <Flex
        gap={16}
        justify={'center'}
        align={'center'}
        vertical={true}
        className={s.form}
      >
        <Input
          value={email}
          onChange={setEmail}
          type={'email'}
          placeholder={'Email'}
        />
        <Input.Password
          value={password}
          onChange={setPassword}
          placeholder={'Пароль'}
        />
        <Button
          onClick={submit}
          loading={loading}
          block={true}
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
      </Flex>
    </Flex>
  );
};

const mapStore = ({UserStore}) => {
  return {
    email: UserStore.email,
    setEmail: UserStore.setEmail,
    password: UserStore.password,
    setPassword: UserStore.setPassword,
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
  isLogin: PropTypes.bool,
  user: PropTypes.object,
  setIsLogin: PropTypes.func,
  loading: PropTypes.bool,
  submit: PropTypes.func
};

export default magic(AuthPage, {store: mapStore, styles: s});