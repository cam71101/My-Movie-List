import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: '.5rem',
    zIndex: 10000,
  },
  media: {
    width: 350,
    height: 140,
    opacity: 0.5,
  },
  yourRatings: {
    zIndex: 1000,
    color: theme.palette.secondary.main,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginLeft: 0,
  },
  titleContainer: {
    opacity: 1,
    backgroundColor: 'black',
  },
  title: {},
}));

export default useStyles;
