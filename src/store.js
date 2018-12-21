import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dogReducer from './reducers/dogs';
import catReducer from './reducers/cats';

const store = createStore(
  combineReducers({
    dog: dogReducer,
    cat: catReducer
  }),
  applyMiddleware(thunk)
);

export default store;