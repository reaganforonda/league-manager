import axios from 'axios';

const INITIAL_STATE = {
    managedLeagues: [],
    selectedLeague: '',
}

const GET_MANAGED_LEAGUES = 'GET_MANAGED_LEAGUES';
const LOAD_LEAGUE_INFO = 'LOAD_LEAGUE_INFO';

export function loadLeagueInfo(userID, leagueID){
    let league = axios.get(`/api/leagues?userID=${userID}&leagueID=${leagueID}`).then((league) => {
        return league.data[0]
    })

    return {
        type: LOAD_LEAGUE_INFO,
        payload: league
    }
}

export function getManagedLeagues(userID){
    let managedLeagues = axios.get(`/api/leagues?userID=${userID}`).then((leagues)=> {
        return leagues.data
    })

    return {
        type: GET_MANAGED_LEAGUES,
        payload: managedLeagues
    }
}

export default function leagueReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case GET_MANAGED_LEAGUES + '_PENDING':
            return "Loading";
        case GET_MANAGED_LEAGUES + '_FULFILLED':
            return Object.assign({}, state, {managedLeagues: action.payload})

        case LOAD_LEAGUE_INFO + "_PENDING":
            return "Loading";   
        
        case LOAD_LEAGUE_INFO + '_FULFILLED':
            return Object.assign({}, state, {selectedLeague: action.payload});

        default:
            return state;
    }
}  