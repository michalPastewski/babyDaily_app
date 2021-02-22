import { createStore, combineReducers } from 'redux';
import meal from './state/meal';

const reducers = combineReducers({meal});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
