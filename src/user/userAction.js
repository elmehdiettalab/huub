

export const USER_LOGIN = 'USER_LOGIN'; 
export const USER_LOGOUT = 'USER_LOGOUT'; 
export const ADD_PROFILE_INFO = 'ADD_PROFILE_INFO'

export function login(user){
    return {
        type: 'USER_LOGIN',
        payload: {
            ...user,
            isSignedIn: true,
        }
    }
}
export function logout(){
    return {
        type: 'USER_LOGOUT',
        payload: {
            isSignedIn: false,
        }
    }
}

export function addInfo(info){
    return {
        type: 'ADD_PROFILE_INFO',
        payload: info
    }
}