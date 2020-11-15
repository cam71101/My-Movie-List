import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import Box from '@material-ui/core/Box';

const Home = React.lazy(() => import('./containers/Home/Home'));

function App(props) {
  const { onTryAutoSignup, isAuthenticated } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <BrowserRouter>
      <Route path="/" exact component={Auth} />
      <Route path="/logout" exact component={Logout} />
      <Redirect to="/" />
    </BrowserRouter>
  );

  if (isAuthenticated) {
    routes = (
      <BrowserRouter>
        <Route path="/" exact component={Auth} />
        <Route
          path="/My-Movie-List"
          render={() => (
            <Suspense fallback={<div>loading...</div>}>
              <Home />
            </Suspense>
          )}
        />
        <Route path="/logout" exact component={Logout} />
      </BrowserRouter>
    );
  }

  return <Box component="div">{routes}</Box>;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
