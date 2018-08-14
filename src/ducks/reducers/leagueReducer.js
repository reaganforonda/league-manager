import axios from 'axios';

const INITIAL_STATE = {
    leagues: [],
    managedLeagues: [],
    selectedLeague: {}
}

const GET_ALL_LEAGUES = 'GET_ALL_LEAGUES';
const GET_MANAGED_LEAGUES = 'GET_MANAGED_LEAGUES';
const LOAD_LEAGUE_INFO = 'LOAD_LEAGUE_INFO';

export function loadLeagueInfo(league){
    return {
        type: LOAD_LEAGUE_INFO,
        payload: league
    }
}

export  function getAllLeagues() {
    let leagues = axios.get('/api/leagues').then((result)=>{
        return result.data;
    })

    return {
        type: GET_ALL_LEAGUES,
        payload: leagues
    }
}

export function getManagedLeagues(userID){
    let managedLeagues = axios.get(`/api/leagues/${userID}`).then((leagues)=> {
        return leagues.data
    })

    return {
        type: GET_MANAGED_LEAGUES,
        payload: managedLeagues
    }
}

export default function leagueReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case GET_ALL_LEAGUES + "_FULFILLED":
            return Object.assign({}, state, {leagues:action.payload});
        case GET_ALL_LEAGUES + "_PENDING":
            return 'Loading';
        case GET_MANAGED_LEAGUES + '_PENDING':
            return "Loading";
        case GET_MANAGED_LEAGUES + '_FULFILLED':
            return Object.assign({}, state, {managedLeagues: action.payload})
        case LOAD_LEAGUE_INFO:
            return Object.assign({}, state, {selectedLeague: action.payload})

        default:
            return state;
    }
}