import React from 'react';
import {createRoot} from 'react-dom/client';
import StyleContext from 'isomorphic-style-loader-react18/StyleContext';
import {Provider} from 'mobx-react';
import {UiStore, UserStore} from '@stores';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {THEME} from '@utils';

const container = document.getElementById('root');
const root = createRoot(container);

const newUiStore = new UiStore();
const newUserStore = new UserStore();

const AppContext = {
  insertCss: (...styles) => {
    const removeCss = styles.map((style) => style._insertCss());

    return () => removeCss.forEach((dispose) => dispose());
  }
};

root.render(
  <StyleContext.Provider value={AppContext}>
    <Provider
      UiStore={newUiStore}
      UserStore={newUserStore}
    >
      <ThemeProvider theme={THEME}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StyleContext.Provider>
);