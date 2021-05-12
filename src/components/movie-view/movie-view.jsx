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
              <Nav.Link href="#account">Account</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-3" />
              <Button variant="outline-light" className="mr-5">Search</Button>

            </Form>
          </Navbar> 
          </div>
        </Row>
        <Col className="pt-5 bg-dark" style={{ paddingBottom: '80rem', height: '100%', width: '100%', color: 'white', background: '#292b2c'}}>
          <div className="movie-poster mb-4 justify-content-center text-center mx-auto" fluid>
            <img src={movie.ImagePath} height="5%" width="20%"/>
          </div>
          <div class="mx-auto" style={{ height: '100%', maxWidth: '50%' }} >
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
                <span className="value">{movie.Director.Name}</span>
                <span className="value"> ({movie.Director.Birth}-{movie.Director.Death}). </span>
                <span className="value">{movie.Director.Bio} </span>
                <a className="label" href={movie.Director.Source}>(source)</a>
            </div>
            <div className="movie-genre">
              <span className="label">Genre: </span>
                <span className="value">{movie.Genre.Name}</span>
                <span className="value"> ({movie.Genre.Description}) </span>
                <a className="label" href={movie.Genre.Source}>(source)</a>
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