import React from 'react'; 
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { MovieView } from '../movie-view/movie-view';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

//create DirectorView component
export class DirectorView extends React.Component {

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
    const { onBackClick, director } = this.props;


    return (
      <div className="director-view">
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
          <div class="mx-auto" style={{ height: '100%', maxWidth: '50%' }} >
            <div className="movie-director" style={{ color: 'white' }}>
            <div className="movie-poster mb-4 justify-content-center text-center mx-auto" fluid>
              <img src={director.ImagePath} height="5%" width="20%"/>
            </div>
              <span className="value">{director.Name}</span>
              <span className="value"> ({director.Birth}-{director.Death}). </span>
              <span className="value">{director.Bio} </span>
              <a className="label" href={director.Source}>(source)</a>  
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

DirectorView.propTypes = {              
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
      Source: PropTypes.string.isRequired
    }).isRequired,
  onBackClick: PropTypes.func
};