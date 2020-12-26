import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as actions from '../../../store/actions/index';
import logo from '../../../assets/images/logo.png';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { compose } from 'redux';

import useStyles from './navBarStyles';

export function NavBar(props) {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const timeout = {
    enter: 500,
    exit: 500,
  };

  return (
    <Fade in timeout={timeout}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.Toolbar}>
          <img className={classes.logo} src={logo} alt="Logo" />
          <Link to="/logout" className={classes.signOut}>
            <Button color="secondary" className={classes.signOut}>
              <ExitToAppIcon fontSize={matches ? 'small' : undefined} />{' '}
              {matches ? null : 'Signout'}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Fade>
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
