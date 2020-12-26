import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '20rem',
    order: 2,
    [theme.breakpoints.down('xs')]: {
      order: 3,
      width: '20rem',
      margin: 'auto',
    },
    zIndex: 3000,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 20,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      right: 20,
    },
  },
  autoComplete: {
    zIndex: 10,
    width: '20rem',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default useStyles;
