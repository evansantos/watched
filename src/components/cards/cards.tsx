import React, { FunctionComponent } from 'react'

type MovieCardProps = {
  posterPath?: string,
  title: string,
  releaseDate: string,
  overview: string,
  rating: number
}

const dateFormat = (date: string) => {
  const dateToBeFormated: Date = new Date(date)
  const opts = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return new Intl.DateTimeFormat('en-US', opts).format(dateToBeFormated)
}

const shortifyOverview = (text: string) => {
  return `${text.substr(0, 86)}...`
}

const Card = ({
  posterPath,
  title,
  releaseDate,
  overview, 
  rating
}: MovieCardProps) => <div className="Card">
  <img
    className="Card--image"
    src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
  />
  <div
    className="Card--content"
  >
    <h3 className="Card--title">{title}</h3>
    <small className="Card--release-date">{dateFormat(releaseDate)}</small>
    <p className="Card--overview">{shortifyOverview(overview)}</p>
  </div>
</div>

export default Card

