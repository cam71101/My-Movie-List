import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionTypes from './store/actions/actionTypes';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import moviesReducer from './store/reducers/movies';
import { createMuiTheme } from '@material-ui/core/styles';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

const Theme = createMuiTheme();

console.log(Theme);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
