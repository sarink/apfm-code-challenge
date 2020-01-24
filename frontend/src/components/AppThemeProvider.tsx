import React from 'react';
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: blueGrey,
  },
});

export interface AppThemeProviderProps {}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};
