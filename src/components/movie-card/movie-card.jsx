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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Description: PropTypes.shape({
      Synopsis: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }),                   
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }),
    Actors: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired,    
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
    Rotten_Tomatoes_score: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};