import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import leagueReducer from './ducks/reducers/leagueReducer';
import teamReducer from './ducks/reducers/teamReducer';
import userReducer from './ducks/reducers/userReducer';
import stadiumReducer from './ducks/reducers/stadiumReducer';
import fixtureReducer from './ducks/reducers/fixtureReducer';

const reducers = {
    leagueReducer : leagueReducer,
    teamReducer : teamReducer,
    userReducer : userReducer,
    stadiumReducer: stadiumReducer,
    fixtureReducer: fixtureReducer
}

let middleware = promiseMiddleware();

export default createStore(combineReducers(reducers), applyMiddleware(middleware));
