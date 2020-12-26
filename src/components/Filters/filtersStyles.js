import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    marginTop: '2.5rem',
  },
  filter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    [theme.breakpoints.down('lg')]: {
      marginTop: '2rem',
    },
  },
  gridContainer: {
    flexGrow: 1,
    marginTop: '2.5rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default useStyles;
