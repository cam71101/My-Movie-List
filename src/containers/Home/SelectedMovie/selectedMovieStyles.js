import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  selectedMovieRoot: {
    width: '100%',
    height: '57rem',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      marginBottom: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '45rem',
    },
    [theme.breakpoints.up('xl')]: {
      height: '65rem',
    },
  },
  black: {
    width: '100%',
    height: '57rem',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      height: '45rem',
    },
    [theme.breakpoints.up('xl')]: {
      height: '65rem',
    },
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    position: 'absolute',
    opacity: 0.2,
    width: '150rem',
    transform: 'translateY(10vw)',
    [theme.breakpoints.up('xl')]: {
      width: '200rem',
    },
    [theme.breakpoints.down('l')]: {
      width: '180rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '120rem',
    },

    [theme.breakpoints.down('xs')]: {
      width: '90rem',
      transform: 'translateY(0)',
    },
    zIndex: 0,
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    zIndex: 1,
    [theme.breakpoints.down('lg')]: {
      marginTop: '9rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      justifyContent: 'flex-start',
      marginTop: '10rem',
    },
  },
  ratingsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  yourRatings: {
    zIndex: 1000,
    color: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  audienceStars: {
    margin: theme.spacing(1),
  },
  startContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: '10rem',
    },
  },
  ratingText: {
    margin: '0 0 0 8px',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
    zIndex: 1,
  },
  description: {
    width: '50vw',
    height: '13rem',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      marginBottom: '3rem',
      textAlign: 'center',
      height: 'auto',
    },
  },
  btn: {
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
  },
  tagline: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '80vw',
    },
  },
  gradient: {
    width: '100%',
    height: '35rem',
    position: 'absolute',
    top: '39rem',
    zindex: 0,
    background:
      'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 46%, rgba(0,212,255,0) 100%)',
    [theme.breakpoints.down('xs')]: {
      top: '25rem',
    },
    [theme.breakpoints.up('lg')]: {
      top: '35rem',
    },
    [theme.breakpoints.up('xl')]: {
      top: '55rem',
    },
  },
  gradientBG: {
    width: '100%',
    height: '35rem',
    position: 'absolute',
    top: '43rem',
    zindex: 0,
    background:
      'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 46%, rgba(0,212,255,0) 100%)',
    [theme.breakpoints.down('xs')]: {
      top: '30rem',
    },
    [theme.breakpoints.up('lg')]: {
      top: '43rem',
    },
    [theme.breakpoints.up('xl')]: {
      top: '65rem',
    },
  },
}));

export default useStyles;
