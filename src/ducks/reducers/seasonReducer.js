import axios from 'axios';

const INITIAL_STATE = {
    seasonsByLeague:[],
    allSeasonsManger:[],
    seasonLeague: [],
    seasonTeam:[],
    seasonsByTeam:[]
}

const GET_SEASON_BY_LEAGUE = 'GET_SEASON_BY_LEAGUE';
const GET_ALL_SEASONS_MANAGER = 'GET_ALL_SEASONS_MANAGER'

export function getSeasonByLeague(userID, leagueID) {
    let leagues = axios.get(`/api/seasons/?userID=${userID}&leagueID=${leagueID}`).then(result => {
        return result.data
    })

    return {
        type: GET_SEASON_BY_LEAGUE,
        payload: leagues
    }
}

export function getAllSeasonsLeagueManager(userID) {
    let leagues = axios.get(`/api/seasons/?userID=${userID}`).then(result => {
        return result.data
    })

    return {
        type: GET_ALL_SEASONS_MANAGER,
        payload: leagues
    }
}

export default function seasonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_SEASON_BY_LEAGUE + "_PENDING":
            return "LOADING";
        case GET_SEASON_BY_LEAGUE + "_FULFILLING":
            return Object.assign({}, state, {seasonsByLeague : action.payload})

        case GET_ALL_SEASONS_MANAGER + "_PENDING":
            return "LOADING";
        case GET_ALL_SEASONS_MANAGER + "_FULFILLING":
            return Object.assign({}, state, {allSeasonsManger: action.payload})

        default:
            return state;
    }
}