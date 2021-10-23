import { call, put, takeLatest, all, select} from 'redux-saga/effects'
import {GET_MOVIES, ADD_MOVIES} from '../constants/moviesConstant'
import * as MoviesService from '../services/movies'
import * as MoviesAction from '../actions/moviesActions'

export function* getMoviesSaga() {
    try {
        const response = yield call(MoviesService.getFavourites);
        if(!response.status) {
          yield put(MoviesAction.moviesError(response.message ? response.message : response.data))
        }
        else {
          yield put(MoviesAction.moviesResult(response.data.favourites))
        }
    
      } catch (error) {
        console.log(error)
        yield put(MoviesAction.moviesError(error.message))
      }
}

export function* addMoviesSagaSaga(param) {
      try {
        const response = yield call(MoviesService.addFavourites, param.payload);
        if(!response.status) {
          yield put(MoviesAction.moviesError(response.message ? response.message : response.data))
        }
        else {
          yield put(MoviesAction.addMoviesResult(response))
        }
    
      } catch (error) {
        console.log(error)
        yield put(MoviesAction.moviesError(error.message))
      }
}


export default function* actionWatcher() {
    yield all([
        takeLatest(ADD_MOVIES, addMoviesSagaSaga),
        takeLatest(GET_MOVIES, getMoviesSaga)
    ])
}