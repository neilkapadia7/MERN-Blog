import {USER_SIGNIN, USER_SIGNUP, USER_LOGOUT, USER_SIGNIN_RESULT, USER_SIGNUP_RESULT, USER_SIGNUP_ERROR, USER_SIGNIN_ERROR} from '../constants/authConstants'
export const userSignIn = (payload) => {
    return {
        type: USER_SIGNIN,
        payload
    }
}

export const userSignInResult = (payload) => {
    localStorage.setItem('userInfo', JSON.stringify(payload));
    return {
        type: USER_SIGNIN_RESULT,
        payload
    }
}

export const userSignUp = (payload) => {
    return {
        type: USER_SIGNUP,
        payload
    }
}

export const userSignUpResult = (payload) => {
    localStorage.setItem('userInfo', JSON.stringify(payload));
    return {
        type: USER_SIGNUP_RESULT,
        payload
    }
}

export const userSignInError = (payload) => {
    return {
        type: USER_SIGNIN_ERROR,
        payload
    }
}



export const logout = () => {
    localStorage.removeItem('userInfo')
    return {
        type: USER_LOGOUT,
    }
}