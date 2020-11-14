import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0f3460',
      dark: 'rgb(178, 178, 178)',
      light: 'rgb(255, 255, 255)',
    },
    secondary: {
      dark: '#0f3460',
      light: '#f5005654',
      main: '#f50057',
    },
    text: {
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      primary: '#fff',
      secondary: '#29c7ac',
    },
    background: {
      default: '#221f1f',
      paper: '#0f131f',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 100,
    },
    h4: {
      fontWeight: 200,
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '4rem',
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
};

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '.9rem',
  },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
};

export default theme;
