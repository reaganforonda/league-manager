import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import leagueReducer from './ducks/reducers/leagueReducer';
import teamReducer from './ducks/reducers/teamReducer';
import userReducer from './ducks/reducers/userReducer';
import stadiumReducer from './ducks/reducers/stadiumReducer'

const reducers = {
    leagueReducer : leagueReducer,
    teamReducer : teamReducer,
    userReducer : userReducer,
    stadiumReducer: stadiumReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));
