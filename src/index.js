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
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import moviesReducer from './store/reducers/movies';

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

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
