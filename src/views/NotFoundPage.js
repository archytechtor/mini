import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Button} from '@ui';
import {Result} from 'antd';
import {ROUTES} from '@utils';

const NotFoundPage = () => (
  <Result
    status={'404'}
    title={'404'}
    subTitle={'Такой страницы не существует'}
    extra={
      <RouterLink to={ROUTES.MAIN}>
        <Button>
          На главную
        </Button>
      </RouterLink>
    }
  />
);

const mapStore = ({UserStore}) => {
  return {
    user: UserStore.user
  };
};

export default NotFoundPage;