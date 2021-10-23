import {GET_BLOGS, PUBLISH_BLOGS, PUBLISH_BLOGS_RESULT, APPROVE_BLOGS, APPROVE_BLOGS_RESULT, SET_LOADING, BLOGS_RESULT, BLOGS_ERROR, END_LOADING, REMOVE_ERRORS} from '../constants/blogsConstant'
export const publishBlog = (payload) => {
    return {
        type: PUBLISH_BLOGS,
        payload
    }
}
export const publishBlogResult = (payload) => {
    return {
        type: PUBLISH_BLOGS_RESULT,
        payload
    }
}

export const aproveBlog = (payload) => {
    return {
        type: APPROVE_BLOGS,
        payload
    }
}
export const aproveBlogResult = (payload) => {
    return {
        type: APPROVE_BLOGS_RESULT,
        payload
    }
}

export const getBlogs = () => {
    return {
        type: GET_BLOGS
    }
}
export const blogsResult = (payload) => {
    return {
        type: BLOGS_RESULT,
        payload
    }
}

export const blogError = (payload) => {
    return {
        type: BLOGS_ERROR,
        payload
    }
}

export const removeError = (payload) => {
    return {
        type: REMOVE_ERRORS,
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