import React, { FunctionComponent } from 'react'

type MovieCardProps = {
  posterPath?: string,
  title: string,
  releaseDate: string,
  overview: string,
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

const Card = ({
  posterPath,
  title,
  releaseDate,
  overview
}: MovieCardProps) => <div>
  <h1>{title}</h1>
  <small>{dateFormat(releaseDate)}</small>
  <p>{overview}</p>
</div>

export default Card

