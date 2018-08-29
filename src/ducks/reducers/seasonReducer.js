import axios from 'axios';

const INITIAL_STATE = {
    seasonsByLeague:[],
    allSeasonsManager:[],
    seasonLeague: {},
    seasonTeam:[],
    seasonsByTeam:[]
}

const GET_SEASON_BY_LEAGUE = 'GET_SEASON_BY_LEAGUE';
const GET_ALL_SEASONS_MANAGER = 'GET_ALL_SEASONS_MANAGER';
const LEAGUE_LOAD_SEASON = "LEAGUE_LOAD_SEASON";

export function leagueLoadSeason(userID, seasonID, leagueID) {
    let season = axios.get(`/api/seasons/?userID=${userID}&leagueID=${leagueID}&seasonID=${seasonID}`).then( (result) => {
        return result.data[0]
    })

    
    return {
        type: LEAGUE_LOAD_SEASON,
        payload: season
    }
}

export function getSeasonByLeague(userID, leagueID) {
    let seasons = axios.get(`/api/seasons/?userID=${userID}&leagueID=${leagueID}`).then(result => {
        return result.data
    })

    return {
        type: GET_SEASON_BY_LEAGUE,
        payload: seasons
    }
}

export function getAllSeasonsLeagueManager(userID) {
    let seasons = axios.get(`/api/seasons/?userID=${userID}`).then(result => {
        return result.data
    })

    return {
        type: GET_ALL_SEASONS_MANAGER,
        payload: seasons
    }
}

export default function seasonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_SEASON_BY_LEAGUE + "_PENDING":
            return "LOADING";
        case GET_SEASON_BY_LEAGUE + "_FULFILLED":
            return Object.assign({}, state, {seasonsByLeague : action.payload})

        case GET_ALL_SEASONS_MANAGER + "_PENDING":
            return "LOADING";
        case GET_ALL_SEASONS_MANAGER + "_FULFILLED":
            return Object.assign({}, state, {allSeasonsManager: action.payload})

        case LEAGUE_LOAD_SEASON + "_PENDING":
            return "LOADING";
        case LEAGUE_LOAD_SEASON + "_FULFILLED":
            return Object.assign({}, state, {seasonLeague : action.payload});

        default:
            return state;
    }
}