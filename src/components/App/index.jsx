import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../theme';
import Main from '../Main';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Main />
  </ThemeProvider>
)

export default App;
