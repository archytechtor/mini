import React from 'react';
import {magic} from '@utils';
import {Flex} from 'antd';
import Buttons from './Buttons';
import Tags from './Tags';
import Dropdowns from './Dropdowns';
import s from './style.scss';

const TestPage = () => {
  return (
    <div className={s.container}>
      <Flex
        gap={0}
        vertical={true}
      >
        <Buttons />
        <Tags />
        <Dropdowns />
      </Flex>
    </div>
  );
};

export default magic(TestPage, {styles: s});
