import axios from 'axios';

const INITIAL_STATE = {
    allPlayersLeagueManager: [],
    leaguePlayersLeagueManager: [],
    teamPlayersLeagueMaanger: []
}

const GET_ALL_PLAYERS_LM = "GET_ALL_PLAYERS_LM"

export function getAllPlayersLM(userID) {
    let players = axios.get(`/api/players?userID=${userID}`).then((result) => {
        return result
    })

    return {
        type: GET_ALL_PLAYERS_LM,
        payload: players
    }
}

export default function playersReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case GET_ALL_PLAYERS_LM + "_PENDING":
            return "Loading";

        case GET_ALL_PLAYERS_LM + "_FULFILLED":
            return Object.assign({}, state, {allPlayersLeagueManager : action.payload});
        default:
            return state
    }
}