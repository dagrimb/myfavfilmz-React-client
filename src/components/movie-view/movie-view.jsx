import React from 'react'; 
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
    const { movie, onBackClick, addFavorite } = this.props;


    return (
      <div className="movie-view">
        <Col xs={12} sm={8} md={6} lg={4} xl={3} className="pt-5 bg-dark mx-auto" style={{ paddingBottom: '20rem', height: '100%', width: '100%', color: 'white', background: '#292b2c'}}>
          <div className="movie-poster mb-4 justify-content-center text-center mx-auto" fluid>
            <img src={movie.ImagePath} height="100%" width="80%"/>
          </div>
          <div className="mx-auto" style={{ height: '100%', width: '100%' }} >
            <div className="movie-title bg-dark h-100 text-center">
              <h5 className="value" style={{marginTop: 25, paddingRight: 0 }}>{movie.Title}</h5>
            </div>  
            <div className="movie-description">
              <span className="label">Synopsis: </span>
                <span className="value">{movie.Description.Synopsis} </span> 
                <a className="label" href={movie.Description.Source}>(source)</a>
            </div>
            <div className="movie-director">
              <span className="label">Director: </span>
                  <Link to={`/directors/${movie.Director.Name}`}>
                    <Button variant="link">{movie.Director.Name}</Button>
                  </Link>
            </div>
            <div className="movie-genre">
              <span className="label">Genre: </span>
                  <Link to={`/genres/${movie.Genre.Name}`}>
                    <Button variant="link">{movie.Genre.Name}</Button>
                  </Link>
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
            <div style={{ textAlign: 'center' }}>
              <Button data-id={movie._id} type="submit" className="mt-5"  variant="primary" onClick={addFavorite}>Add to Favorites</Button>

            </div>
            <div style={{ textAlign: 'center' }}>
              <Button className="mt-5"  variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
            </div>
          </div>
        </Col>
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
  onBackClick: PropTypes.func
};