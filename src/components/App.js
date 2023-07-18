import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import { Analytics } from '@vercel/analytics/react';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const App = () => (
  <Analytics>
    <DataContext.Provider value={dataService}>
      <ThemeProvider>
        <GlobalStyle />
        <BodyFontSizeOverride />

        <Desktop />
        <Taskbar />
      </ThemeProvider>
    </DataContext.Provider>
  </Analytics>
);

export default App;
