import React from 'react';
import ReactDOM from 'react-dom/client';
import Feedback from 'components/AppByHooks';
import './index.css';
import { theme } from './constants/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Feedback />
    </ThemeProvider>
  </React.StrictMode>
);
