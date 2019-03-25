import * as React from 'react'
import { connect } from 'react-redux'

import { IAppState } from '../store'
import { IMovie } from '../store/movie/reducers'

import Card from '../components/cards/cards'

interface IProps {
  movies: IMovie[]
}

class MovieList extends React.Component<IProps> {
  public render() {
    const { movies } = this.props

    return (
      <div className="Container">
        {movies && 
          movies.map((movie: IMovie) => {
            return (
              <Card
                posterPath={movie.poster_path}
                releaseDate={movie.release_date}
                title={movie.title} 
                overview={movie.overview}
                rating={movie.vote_average}
              />
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    movies: store.movieState.movies
  }
}

export default connect(mapStateToProps)(MovieList)