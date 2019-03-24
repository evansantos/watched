// Security precaution
;(window as any).eval = global.eval = (payload: string) => {
  const error = new Error(`This app does not allow window.eval().`)
  Object.assign(error, { payload })

  throw error
}

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { Store } from 'redux'

import configureStore, { IAppState } from './store/index'
import { getAllTopRatedMovies } from './store/movie/action'

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

interface IProps {
  store: Store<IAppState>
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  )
}

const store = configureStore()
store.dispatch(getAllTopRatedMovies())

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
