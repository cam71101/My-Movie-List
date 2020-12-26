import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootHome: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  loading: {
    width: '100%',
    height: '80rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    position: 'absolute',
    top: 26,
    left: 0,
    right: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      top: 25,
    },
    [theme.breakpoints.down('sm')]: {
      top: 20,
    },
    [theme.breakpoints.down('xs')]: {
      top: 80,
    },
  },
}));

export default useStyles;
