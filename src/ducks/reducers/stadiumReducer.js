import axios from 'axios';

const INITIAL_STATE={
    allStadiums : [],
    selectedStadium: []
}

const GET_ALL_STADIUMS = 'GET_ALL_STADIUMS';
const LOAD_STADIUM_INFO = 'LOAD_STADIUM_INFO';

export function getAllStadiums(leagueID){
    let stadiums = axios.get(`/api/stadiums/${leagueID}`).then((result) => {
        return result.data
    })

    return {
        type: GET_ALL_STADIUMS,
        payload: stadiums
    }
}

export default function stadiumReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_ALL_STADIUMS + '_PENDING':
            return "Loading";

        case GET_ALL_STADIUMS + "_FULFILLED":
            return Object.assign({}, state, {allStadiums: action.payload})

        default:
            return state
    }
}