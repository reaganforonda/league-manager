const INTIAL_STATE = {
    user: {}
}

const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export function setActiveUser(user) {
    return {
        type: SET_ACTIVE_USER,
        payload: user
    }
}

export default function userReducer(state = INTIAL_STATE, action) {
    switch(action.type) {
        case SET_ACTIVE_USER:
           return Object.assign({}, state, {user: action.payload})

        default:
            return state;
    }
}