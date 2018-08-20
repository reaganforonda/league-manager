import axios from 'axios';

const INITIAL_STATE = {
    allCurrentSeasonFixtures: [],
    unplayedCurrentSeasonFixtures: [],
}

const GET_CURRENT_UNPLAYED_FIXTURES = 'GET_CURRENT_UNPLAYED_FIXTURES';
const GET_ALL_CURRENT_FIXTURES = 'GET_ALL_CURRENT_FIXTURES';

export function getAllCurrentFixtures(leagueID, seasonID){
    let currentFixtures = axios.get(`/api/fixtures/search?leagueID=${leagueID}&seasonID=${seasonID}`).then((result) => {
        return result.data;
    })

    return {
        type: GET_ALL_CURRENT_FIXTURES,
        payload: currentFixtures
    }
}

export default function fixtureReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case GET_ALL_CURRENT_FIXTURES + '_PENDING':
            return "Loading";

        case GET_ALL_CURRENT_FIXTURES + '_FULFILLED':
            return Object.assign({},state, {allCurrentSeasonFixtures : action.payload});

        default:
            return state;
    }
}