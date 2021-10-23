import {GET_MOVIES, SET_LOADING, MOVIES_RESULT, MOVIES_ERROR, END_LOADING, ADD_MOVIES_RESULT, ADD_MOVIES} from '../constants/moviesConstant'
export const addMovies = (payload) => {
    return {
        type: ADD_MOVIES,
        payload
    }
}

export const moviesResult = (payload) => {
    return {
        type: MOVIES_RESULT,
        payload
    }
}
export const addMoviesResult = (payload) => {
    return {
        type: ADD_MOVIES_RESULT,
        payload
    }
}

export const getMovies = () => {
    return {
        type: GET_MOVIES
    }
}

export const moviesError = (payload) => {
    return {
        type: MOVIES_ERROR,
        payload
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
}

export const endLoading = () => {
    return {
        type: END_LOADING,
    }
}