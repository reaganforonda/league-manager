import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import leagueReducer from './ducks/reducers/leagueReducer';

const reducers = {
    leagueReducer : leagueReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));
