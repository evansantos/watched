import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IMovie, IMovieState } from './reducers';

export enum ActionTypes {
  GET_ALL_TOP_RATED = 'GET_ALL_TOP_RATED',  
}

export interface IMovieGetAllTopRatedAction {
  type: ActionTypes.GET_ALL_TOP_RATED
  movies: IMovie[]
}

export type Actions = IMovieGetAllTopRatedAction

export const getAllTopRatedMovies: ActionCreator<
  ThunkAction<Promise<any>, IMovieState, null, IMovieGetAllTopRatedAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const url = new URL('https://api.themoviedb.org/3/movie/top_rated')
      const params = new URLSearchParams({
        api_key: 'e454a23839270effb6cfb8f854d37e35'
      })

      url.search = params.toString()

      const response = await fetch(url.toString())
        .then((response: { json: () => any; }) => response.json())

      dispatch({
        movies: response.results,
        type: ActionTypes.GET_ALL_TOP_RATED
      })

    } catch (err) {
      console.log(err)
    }
  }
}