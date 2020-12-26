import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100%',
    background:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)',
    display: 'flex',
    boxShadow: '0px 0px',
    height: '15rem',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
    },
  },
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 1,
    width: '100%',
    height: '50%',
    boxShadow: '0px 0px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      height: '10rem',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      height: '7rem',
      justifyContent: 'space-between',
    },
    position: 'relative',
  },
  signOut: {
    order: 3,
    width: '8rem',
    [theme.breakpoints.down('sm')]: {
      width: '7rem',
    },
    [theme.breakpoints.down('xs')]: {
      order: 1,
      width: '3rem',
    },
  },
  logo: {
    marginTop: '-1rem',
    order: 1,
    width: '8rem',
    [theme.breakpoints.down('sm')]: {
      width: '7rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '6rem',
    },
  },
}));

export default useStyles;
