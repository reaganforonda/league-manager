import axios from 'axios';

const INITIAL_STATE = {
    allCurrentSeasonFixtures: [],
    unplayedCurrentSeasonFixtures: [],
}

const GET_CURRENT_UNPLAYED_FIXTURES = 'GET_CURRENT_UNPLAYED_FIXTURES';
const GET_ALL_CURRENT_FIXTURES = 'GET_ALL_CURRENT_FIXTURES';

export function getAllCurrentFixtures(leagueID, seasonID){
    let currentFixtures = axios.get(`/api/fixtures/search?q`)
    return {
        type: GET_ALL_CURRENT_FIXTURES,
        payload: ''
    }
}

export default function fixtureReducer(state = INITIAL_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}