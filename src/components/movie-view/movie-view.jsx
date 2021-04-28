import React from 'react'; 
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';

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
        <Row className="main-view justify-content-md-center ml-0 h-100">
        <div className="w-100">
          <Navbar bg="primary" variant="dark" style={{paddingLeft: 0, paddingRight: 0 }}>
            <Navbar.Brand className="ml-2" href="#home">myfavfilmz</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Account</Nav.Link>
              <Nav.Link href="#features">Movies</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-3" />
              <Button variant="outline-light" className="mr-5">Search</Button>

            </Form>
          </Navbar> 
          </div>
        </Row>
        <Col className="pt-5 bg-dark" style={{ paddingBottom: 450, height: '100%', width: '100%', color: 'white', background: '#292b2c'}}>
          <div className="movie-poster mb-4 justify-content-center text-center mx-auto" fluid>
            <img src={movie.ImagePath} height="5%" width="20%"/>
          </div>
          <div class="justify-content-center text-center mx-auto" style={{ height: '100%' }} >
            <div className="movie-title bg-dark h-100">
              <h5 className="value" style={{marginTop: 25, paddingRight: 0 }}>{movie.Title}</h5>
            </div>  
            <div className="movie-description">
              <span className="label">Synopsis: </span>
                <span className="value">{movie.Description.Synopsis} </span> 
                <a className="label" href={movie.Description.Source}>(source)</a>
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
            <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
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
  onClick: PropTypes.func
};