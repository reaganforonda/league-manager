import axios from 'axios';

const INITIAL_STATE = {
    managedTeams: []
}

const GET_MANAGED_TEAMS = 'GET_MANAGED_TEAMS';

export function getManagedTeams(userID){
    let managedTeams = axios.get(`/api/teams/${userID}`).then((result)=>{
        console.log(result);
        return result;
    }).catch((err)=>{
        console.log(`Client Side Error: Attempting to retrive managed teams: ${err}`);
    })

    return {
        type: GET_MANAGED_TEAMS,
        payload: managedTeams
    }
}

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_MANAGED_TEAMS + '_PENDING':
            return 'PENDING';

        case GET_MANAGED_TEAMS + '_FULFILLED':
            return Object.assign({}, state, {managedTeams: action.payload})

        default:
            return state;
    }
}