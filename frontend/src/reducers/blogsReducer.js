import {GET_BLOGS, PUBLISH_BLOGS, PUBLISH_BLOGS_RESULT, APPROVE_BLOGS, APPROVE_BLOGS_RESULT, SET_LOADING, BLOGS_RESULT, BLOGS_ERROR, END_LOADING, REMOVE_ERRORS, REMOVE_MESSAGE, GET_PUBLISHED_BLOGS_RESULT, GET_PUBLISHED_BLOGS} from '../constants/blogsConstant'

let initialState = {
    blogsData: [], 
    loading: false, 
    error: null,
    myBlogs: [],
    rejectedBlogs: [],
    publishedBlogs: [],
    blogMessage: null,
}

export const blogsReducer = (state = initialState, action) => {
  console.log('Action Payload',action.payload)
    switch (action.type) {
        case GET_BLOGS:
          return {
            ...state,
            loading: true,
            blogsData: [],
            error: null
          }
        case BLOGS_RESULT:
          return {
            ...state,
            loading: false,
            blogsData: action.payload,
            error: null          
          }
        case GET_PUBLISHED_BLOGS:
          return {
            ...state,
            loading: true,
            error: null
          }
        case GET_PUBLISHED_BLOGS_RESULT:
          return {
            ...state,
            loading: false,
            publishedBlogs: action.payload.blogs,
            error: null          
          }
        case PUBLISH_BLOGS:
          return {
            ...state,
            loading: true,
            error: null
          }
        case PUBLISH_BLOGS_RESULT:
          return {
            ...state,
            loading: false,
            myBlogs: state.myBlogs.length > 0 ? [...state.myBlogs, action.payload.data] : [action.payload.data],
            error: null,
            blogMessage: 'Successfully Submitted Blog' 
          }
        case REMOVE_MESSAGE:
          return {
            ...state,
            blogMessage: null
          }
        case APPROVE_BLOGS:
          return {
            ...state,
            loading: true,
            error: null
          }
        case APPROVE_BLOGS_RESULT:
          return {
            ...state,
            loading: false,
            blogsData: state.blogsData.length > 0 ? [...state.blogsData, action.payload] : [action.payload],
            error: null          
          }
        case SET_LOADING:
          return {
            ...state,
            loading: true
          }
        case END_LOADING: 
          return {
            ...state,
            loading: false
          }
        case BLOGS_ERROR: 
          return {
            ...state,
            loading: false,
            error: action.payload
          }
        case REMOVE_ERRORS: 
          return {
            ...state,
            loading: false,
            error: null
          }
        default:
            return state;
    }
} 