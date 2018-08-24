import axios from 'axios';

const INITIAL_STATE = {
    selectedSeasonLeague: [],
    seasonsLeague: [],
}

const GET_ALL_SEASONS = 'GET_ALL_SEASONS';

export function getAllSeasons(leagueID) {
    const seasons = axios.get(`/api/season/${leagueID}`).then((result) => {
        return result.data;
    })

    return {
        type: GET_ALL_SEASONS,
        payload: seasons
    }
}

export default function seasonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ALL_SEASONS + '_FULFILLED':
            return Object.assign({}, state, {
                seasonsLeague: action.payload
            })
        case GET_ALL_SEASONS + '_PENDING':
            return "Loading";

        default:
            return state;
    }
}