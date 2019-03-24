import React, { Component } from 'react'
import './App.css'

import MovieList from './containers/MovieList'

const App: React.SFC<{}> = () => {
  return (
    <>
      <h1>Hello world</h1>
      <MovieList />
    </>
  )
}


export default App;
