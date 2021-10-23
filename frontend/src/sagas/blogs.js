import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import {GET_BLOGS, PUBLISH_BLOGS, APPROVE_BLOGS, GET_PUBLISHED_BLOGS} from '../constants/blogsConstant'
import * as BlogService from '../services/blogs'
import * as BlogAction from '../actions/blogsActions'

export function* getBlogsSaga() {
    try {
        const response = yield call(BlogService.getBlogs);
        if(!response.status) {
          yield put(BlogAction.blogError(response.message ? response.message : response.data))
        }
        else {
          yield put(BlogAction.blogsResult(response.data))
        }
    
      } catch (error) {
        console.log(error)
        yield put(BlogAction.blogError(error.message))
      }
}

export function* getPublishedBlogsSaga() {
    try {
        const response = yield call(BlogService.getPublishedBlogs);
        if(!response.status) {
          yield put(BlogAction.blogError(response.message ? response.message : response.data))
        }
        else {
          yield put(BlogAction.getPublishedBlogsResult(response.data))
        }
    
      } catch (error) {
        console.log(error)
        yield put(BlogAction.blogError(error.message))
      }
}

export function* publishBlogSaga(param) {
      try {
        const response = yield call(BlogService.publishBlog, param.payload);
        if(!response.status) {
          yield put(BlogAction.blogError(response.message ? response.message : response.data))
        }
        else {
          yield put(BlogAction.publishBlogResult(response))
        }
    
      } catch (error) {
        console.log(error)
        yield put(BlogAction.blogError(error.message))
      }
}

export function* approveBlogSaga(param) {
      try {
        const response = yield call(BlogService.approveBlog, param.payload);
        if(!response.status) {
          yield put(BlogAction.blogError(response.message ? response.message : response.data))
        }
        else {
          yield put(BlogAction.aproveBlogResult(response))
        }
    
      } catch (error) {
        console.log(error)
        yield put(BlogAction.blogError(error.message))
      }
}


export default function* actionWatcher() {
    yield all([
        takeLatest(PUBLISH_BLOGS, publishBlogSaga),
        takeLatest(APPROVE_BLOGS, approveBlogSaga),
        takeLatest(GET_BLOGS, getBlogsSaga),
        takeLatest(GET_PUBLISHED_BLOGS, getPublishedBlogsSaga),
    ])
}