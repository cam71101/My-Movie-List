import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  logo: {
    marginBottom: '-2rem',
    marginTop: '-2rem',
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  signInUp: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

export default useStyles;
