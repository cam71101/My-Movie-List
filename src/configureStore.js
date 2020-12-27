import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import moviesReducer from './store/reducers/movies';
import authReducer from './store/reducers/auth';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
});

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);
