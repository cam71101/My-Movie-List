import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as actions from '../../../store/actions/index';
import SearchMoviesField from '../SearchMoviesField/SearchMoviesField';
import logo from '../../../assets/images/logo.png';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { compose } from 'redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    zIndex: 2,
  },
  appBar: {
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
    justifyContent: 'space-around',
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
  },
  signOut: {
    order: 3,
    width: '8rem',
    [theme.breakpoints.down('sm')]: {
      width: '7rem',
    },
    [theme.breakpoints.down('xs')]: {
      order: 1,
      width: '7rem',
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

export function NavBar(props) {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const timeout = {
    enter: 500,
    exit: 500,
  };

  return (
    <div className={classes.root}>
      <Fade in timeout={timeout}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.Toolbar}>
            <img className={classes.logo} src={logo} alt="Logo" />
            <Link to="/logout" className={classes.signOut}>
              <Button color="secondary" className={classes.signOut}>
                <ExitToAppIcon fontSize={matches ? 'small' : undefined} /> Sign
                out
              </Button>
            </Link>
            {props.selectedMovie ? (
              <SearchMoviesField className={classes.search} />
            ) : null}
          </Toolbar>
        </AppBar>
      </Fade>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.movies.selectedMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(NavBar);
