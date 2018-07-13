import axios from 'axios';

const INITIAL_STATE = {
    leagues: []
}

const GET_ALL_LEAGUES = 'GET_ALL_LEAGUES';


export  function getAllLeagues() {
    let leagues = axios.get('/api/leagues').then((result)=>{
        return result.data;
    })

    return {
        type: GET_ALL_LEAGUES,
        payload: leagues
    }
}

export default function leagueReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case GET_ALL_LEAGUES + "_FULFILLED":
            return Object.assign({}, state, {leagues:action.payload});
        case GET_ALL_LEAGUES + "_PENDING":
            return 'Loading';

        default:
            return state;
    }
}