import React from 'react';
import PropTypes from 'prop-types';

//create MovieCard component
export class MovieCard extends React.Component {
  render() {
    const { movie, onClick } = this.props; 

    return (
    <div onClick={() => onClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({ // movie object
    Title: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
};