import axios from 'axios';

const INITIAL_STATE={
    allStadiums : [],
    selectedStadium: []
}

const GET_ALL_STADIUMS = 'GET_ALL_STADIUMS';
const LOAD_STADIUM_INFO = 'LOAD_STADIUM_INFO';

export default function stadiumReducer(state = INITIAL_STATE, action){
    switch(action.type){
        default:
            return state
    }
}