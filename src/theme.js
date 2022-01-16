import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Roboto"', 'sans-serif'
    ].join(','),
    htmlFontSize: 16,
    body2: {
      fontSize: 14,
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    caption: {
      fontSize: 11,
      fontWeight: 600,
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#a6aec2',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#fff'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
});