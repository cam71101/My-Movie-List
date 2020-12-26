import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootMovieList: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    marginTop: '-5rem',
    background: 'black',
  },
  filter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  gridContainer: {
    flexGrow: 1,
    marginTop: '1rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default useStyles;
