import React from 'react'; 
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { MovieView } from '../movie-view/movie-view';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { generatePath, Link } from 'react-router-dom';

//create DirectorView component
export class GenreView extends React.Component {

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
    const { onBackClick, genre } = this.props;


    return (
      <div className="genre-view">
        <Row className="main-view justify-content-md-center ml-0 h-100">
          <div className="w-100">
          </div>
        </Row>
        <Col className="pt-5 bg-dark" style={{ paddingBottom: '105rem', height: '100%', width: '100%', color: 'white', background: '#292b2c'}}>
          <div class="mx-auto" style={{ height: '100%', maxWidth: '100%' }} >
            <div className="movie-genre" style={{ color: 'white', textAlign: 'center' }}>
            <div className="movie-poster mb-4 justify-content-center text-center mx-auto" fluid>
              <img src={genre.ImagePath} height="5%" width="20%"/>
            </div>
              <span className="value">{genre.Name}</span>
              <span className="value"> ({genre.Description}</span>
              <a className="label" href={genre.Source}>(source)</a>  
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

GenreView.propTypes = {              
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired
    }).isRequired,
  onBackClick: PropTypes.func
};