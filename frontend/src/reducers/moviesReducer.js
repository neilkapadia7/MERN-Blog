import {GET_MOVIES, SET_LOADING, MOVIES_RESULT, MOVIES_ERROR, END_LOADING, ADD_MOVIES_RESULT, ADD_MOVIES} from '../constants/moviesConstant'

let initialState = {
    moviesData: [], 
    loading: false, 
    error: null
}

export const moviesReducer = (state = initialState, action) => {
  console.log(action.payload)
    switch (action.type) {
        case GET_MOVIES:
          return {
            ...state,
            loading: true,
            moviesData: [],
            error: null
          }
        case ADD_MOVIES:
          return {
            ...state,
            loading: false,
            moviesData: state.moviesData,
            error: null
          }
        case SET_LOADING:
          return {
            ...state,
            loading: null
          }
        case MOVIES_RESULT:
          return {
            ...state,
            loading: false,
            moviesData: action.payload,
            error: null          
          }
        case ADD_MOVIES_RESULT:
          return {
            ...state,
            loading: false,
            moviesData: state.moviesData.length > 0 ? [...state.moviesData, action.payload] : [action.payload],
            error: null          
          }
        case MOVIES_ERROR: 
          return {
            ...state,
            moviesData: [],
            loading: false,
            error: action.payload
          }
        case END_LOADING: 
          return {
            ...state,
            loading: false
          }
        default:
            return state;
    }
} 