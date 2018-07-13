const INTIAL_STATE = {
    user_id: '',
    acct_type: '',
}

const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export function setActiveUser(user_ID, acct_type){
    let user = {
        user_ID: user_ID,
        acct_type: acct_type
    }
    return{
        type: SET_ACTIVE_USER,
        payload: user
    }
}

export default function userReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case SET_ACTIVE_USER:
        Object.assign({}, state, {user_id: action.payload.user_ID, acct_type: action.payload.acct_type})

        default: return state;
    }
}