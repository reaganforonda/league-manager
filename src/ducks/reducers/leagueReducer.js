import axios from 'axios';

const INITIAL_STATE = {
    leagues: [],
    managedLeagues: [],
    selectedLeague: [],
    selectedSeasonLeague: [],
    seasonsLeague: [],
}

const GET_ALL_LEAGUES = 'GET_ALL_LEAGUES';
const GET_MANAGED_LEAGUES = 'GET_MANAGED_LEAGUES';
const LOAD_LEAGUE_INFO = 'LOAD_LEAGUE_INFO';
const GET_ALL_SEASONS = 'GET_ALL_SEASONS';

export function getAllSeasons(leagueID){
    const seasons = axios.get(`/api/season/${leagueID}`).then((result) => {
        return result.data;
    })


    return {
        type: GET_ALL_SEASONS,
        payload: seasons
    }
}

export function loadLeagueInfo(league){
    return {
        type: LOAD_LEAGUE_INFO,
        payload: league[0]
    }
}

export function getAllLeagues() {
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
        case GET_ALL_SEASONS + '_FULFILLED':
            return Object.assign({}, state, {seasonsLeague: action.payload})
        case GET_ALL_SEASONS + '_PENDING':
            return "Loading";

        default:
            return state;
    }
}  