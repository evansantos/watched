import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk'


import {
  movieReducer,
  IMovieState,
} from './movie/reducers';

export interface IAppState {
  movieState: IMovieState
}

const rootReducer = combineReducers<IAppState>({
  movieState: movieReducer
})

export default function configureStore(): Store<IAppState, any> {
  return createStore(rootReducer, undefined, applyMiddleware(thunk)) 
}