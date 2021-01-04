import {combineReducers} from 'redux'
import {USER_LOGIN, USER_LOGOUT, ADD_PROFILE_INFO} from '../user/userAction'; 
const initialState = {
    isSignedIn : false , 
    name: '',
    email: ''
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN: return action.payload ; 
        case USER_LOGOUT: return action.payload ; 
        case ADD_PROFILE_INFO : return {
            ...state, 
            info: action.payload
        } ;  
        default: return state
    }
}

export default combineReducers({
    user
})