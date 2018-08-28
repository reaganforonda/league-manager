import axios from 'axios';

const INITIAL_STATE = {
    allFixtures: [],
}

const GET_ALL_FIXTURES = 'GET_ALL_FIXTURES';

function getAllFixtures(userID) {}



export default function fixtureReducer(state = INITIAL_STATE, action){
    switch(action.type){

        default:
            return state;
    }
}