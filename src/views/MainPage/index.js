import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {FloatButton} from 'antd';

const MainPage = ({logOut}) => (
  <div>
    {'MainPage'}
    <FloatButton
      description={'X'}
      shape={'square'}
      type={'primary'}
      style={{right: 24}}
      onClick={logOut}
    />
  </div>
);

const mapStore = ({UserStore}) => {
  return {
    logOut: UserStore.logOut
  };
};

MainPage.propTypes = {
  logOut: PropTypes.func
};

export default magic(MainPage, {store: mapStore});