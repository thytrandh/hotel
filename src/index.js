import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default.theme';
import GlobalStyles from 'themes/global.style';
import AuthProvider from 'context/AuthProvider';
import AppRoutes from './router';
import { Provider } from 'react-redux';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
          <BrowserRouter>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
