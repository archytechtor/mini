import React from 'react';
import {magic} from '@utils';
import Game from './game';
import s from './style.scss';

const MainPage = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    const game = new Game(ref.current);

    game.animate(0);
  }, []);

  return (
    <canvas ref={ref} />
  );
};

export default magic(MainPage, {styles: s});