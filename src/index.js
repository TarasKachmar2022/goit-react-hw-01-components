import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
