import axios from 'axios';

const INITIAL_STATE = {
    allFixtures: [],
}

const GET_ALL_FIXTURES = 'GET_ALL_FIXTURES';

export function getFixtures(userID) {
    let fixtures = axios.get(``).then((result) => {
        return result.data
    })

    return {
        type: GET_ALL_FIXTURES,
        payload: fixtures
    }
}

export default function fixtureReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case GET_ALL_FIXTURES + "_PENDING":
            return "Loading";
        case GET_ALL_FIXTURES + "_FULFILLED":
            return Object.assign({}, state, {allFixtures: action.payload})
        
        default:
            return state;
    }
}