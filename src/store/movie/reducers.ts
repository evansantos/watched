import { Reducer } from 'redux'
import { Actions, ActionTypes } from './action'

export interface IMovie {
  poster_path?: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path?: string
  popularity: number
  vote_count: number
  video: boolean 
  vote_average: number;
}

// export interface IMovie  {
//   page: number;
//   total_results: number;
//   total_pages: number;
//   results: {
//     [key: string]: Result
//   };
// }

export interface IMovieState {
  readonly movies: IMovie[]
}

const initialMoviesState: IMovieState = {
  movies: []
}

export const movieReducer: Reducer<IMovieState, Actions> = (
  state = initialMoviesState,
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_TOP_RATED: {
      return {
        ...state,
        movies: action.movies,
      }
    }
    default:
      return state
  }
}