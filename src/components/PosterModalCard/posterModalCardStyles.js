import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '70rem',
    height: '40rem',
    position: 'relative',
    [theme.breakpoints.between('sm', 'md')]: {
      height: '37rem',
      width: '45rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '37rem',
      width: '20rem',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
  details: {
    display: 'flex',
    zIndex: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '5',
    zIndex: 1,
  },
  cover: {
    flex: '1 0 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '9rem',
      flex: 'none',
    },
  },
  tagline: {
    flex: '3 3 90%',
    zIndex: 1,
    overflow: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: 'rem',
      flex: 'none',
      maxHeight: '13rem',
      minHeight: '12rem',
    },
  },
  overview: {
    paddingRight: '5rem',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '3rem',
    },
  },
  ratingsContainer: {
    display: 'flex',
    zIndex: 1,
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    marginTop: '1rem',
    zIndex: 1,
  },
  title: {
    textTransform: 'uppercase',
  },
  rating: {
    paddingTop: '.5rem',
    marginLeft: '.3rem',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      paddingTop: '.3rem',
    },
  },
  genresList: {
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    zIndex: 1,
  },
  runTimeContainer: {
    alignSelf: 'flexend',
    zIndex: 1,
  },
  close: {
    position: 'absolute',
    right: 1,
    top: 1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
