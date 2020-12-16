import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

const Logout = (props) => {
  useState(() => {
    props.onLogout();
  }, []);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actions.logout());
      dispatch(actions.clearState());
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
