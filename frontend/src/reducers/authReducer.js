import {USER_SIGNIN, USER_SIGNUP, USER_LOGOUT, USER_SIGNIN_RESULT, USER_SIGNUP_RESULT, USER_SIGNIN_ERROR, REMOVE_MESSAGE} from '../constants/authConstants'

let initialState = {
    isLoggedIn: false, 
    loading: false, 
    error: null,
    userMessage: null
}

export const userAuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNIN:
          return {
            ...state,
            loading: true,
            isLoggedIn: false,
            error: null
          }
        case USER_SIGNIN_RESULT:
          return {
            ...state,
            isLoggedIn: true,
            userInfo: action.payload,
            loading: false,
            error: null
          }
        case USER_SIGNUP:
          return {
            ...state,
            loading: true,
            error: null          
          }
        case USER_SIGNUP_RESULT: 
          return {
            ...state,
            userMessage: 'Added New User2',
            loading: false,
            error: null
          }
        case REMOVE_MESSAGE: 
          return {
            ...state,
            userMessage: null,
            error: null
          }
        case USER_SIGNIN_ERROR: 
          return {
            ...state,
            loading: false,
            error: action.payload,
            isLoggedIn: true
          }
        case USER_LOGOUT: 
          return {
            ...state,
            loading: false,
            isLoggedIn: false,
            userInfo: null
          }
        default:
            return state;
    }
} 