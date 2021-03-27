import React from 'react';

//create MovieCard component
export class MovieCard extends React.Component {
  render() {
    const { movieData } = this.props;
    return <div className="movie-card">{movie.Title}</div>;
  }
}