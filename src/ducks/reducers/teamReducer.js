import axios from 'axios';

const INITIAL_STATE = {
    managedTeams: [],
    pendingApproval: []
}

const GET_MANAGED_TEAMS = 'GET_MANAGED_TEAMS';
const GET_PENDING_APPROVAL_TEAMS = 'GET_PENDING_APPROVAL_TEAMS';

export function getManagedTeams(userID){
    let managedTeams = axios.get(`/api/teams/${userID}`).then((result)=>{
        return result;
    }).catch((err)=>{
        console.log(`Client Side Error: Attempting to retrive managed teams: ${err}`);
    })

    return {
        type: GET_MANAGED_TEAMS,
        payload: managedTeams
    }
}

export function getPendingApprovalTeams(userID) {
    let pendingTeams = axios.get(`/api/teams/pending/${userID}`).then((result) => {
        return result.data;
    }).catch((err)=> {
        console.log(`Client Side Error: Attempting to retrive pending approval teams: ${err}`)
    })

    return {
        type: GET_PENDING_APPROVAL_TEAMS,
        payload: pendingTeams
    }
}

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_MANAGED_TEAMS + '_PENDING':
            return 'PENDING';

        case GET_MANAGED_TEAMS + '_FULFILLED':
            return Object.assign({}, state, {managedTeams: action.payload})
        
        case GET_PENDING_APPROVAL_TEAMS + '_PENDING':
            return 'LOADING TEAMS'
        case GET_PENDING_APPROVAL_TEAMS + '_FULFILLED':
            return Object.assign({}, state, {pendingApproval: action.payload})

        default:
            return state;
    }
}