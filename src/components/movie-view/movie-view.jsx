import React from 'react'; 
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

//create MovieView component
export class MovieView extends React.Component {

  //function for both adding and removing event listener
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;


    return (
      <div className="movie-view">
        <div className="movie-poster" fluid>
          <img src={movie.ImagePath} height="5%" width="10%" />
        </div>
        <span className="value">{movie.Genre.Name}</span>
        <div className="movie-title">
          <span className="value">{movie.Title}</span>
        </div>  
        <div className="movie-description">
          <span className="label">Description </span>
          <span className="value"></span>
          <div className="movie-synopsis">
            <span className="label"></span>
            <span className="value">{movie.Description.Synopsis}</span> 
          </div>
          <div className="movie-synopsis-source">
            <span className="label">Source: </span>
            <span className="value">{movie.Description.Source}</span>) 
          </div>
        </div>
        <div className="movie-actors">
          <span className="label">Actors: </span>
          <span className="value">{movie.Actors}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value"></span>
          <div className="movie-director-name">
            <span className="label">Name: </span>
            <span className="value">{movie.Director.Name}</span>
          </div>
          <div className="movie-director-bio">
            <span className="label">Bio: </span>
            <span className="value">{movie.Director.Bio}</span>
          </div>
          <div className="movie-director-birth">
            <span className="label">Birth: </span>
            <span className="value">{movie.Director.Birth}</span>
          </div>
          <div className="movie-director-source">
            <span className="label">Source: </span>
            <span className="value">{movie.Director.Source}</span>
          </div>
        </div>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value"></span>
          <div className="movie-genre-name">
            <span className="label">Name: </span>
            <span className="value">{movie.Genre.Name}</span>
          </div>
          <div className="movie-genre-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Genre.Description}</span>
          </div>
          <div className="movie-genre-source">
            <span className="label">Source: </span>
            <span className="value">{movie.Genre.Source}</span>
          </div>
        </div>
        <div className="movie-year">
          <span className="label">Year Released: </span>
          <span className="value">{movie.Year}</span>
        </div>
        <div className="movie-score">
          <span className="label">Rotten Tomatoes score: </span>
          <span className="value">{movie.Rotten_Tomatoes_score}</span>
        </div>
        <div className="movie-id">
          <span className="label">ID: </span>
          <span className="value">{movie._id}</span>
        </div>





        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}

MovieView.propTypes = {
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
  onClick: PropTypes.func
};