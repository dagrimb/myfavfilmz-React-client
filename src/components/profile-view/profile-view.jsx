import React from 'react'; 
import Image from 'react-bootstrap/Image';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


//create MovieView component
export class ProfileView extends React.Component {

  //function for both adding and removing event listener
  keypressCallback(event) {
    console.log(event.key);
  }

  
  //Fetch the appropriate profile from your database with MainView is mounted
  componentDidMount(){
    document.addEventListener('keypress', this.keypressCallback);
  }
  /*
    let accessToken = localStorage.getItem('token'); // get the value of the token from localStorage
    if (accessToken !== null) {   // access token being present (i.e. "!==null") means that user is already logged in
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getProfile(accessToken);  // getMovies method is executed and a GET request to the movies endpoint
      }
    }
*/
  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  /*getProfile(token) {
    axios.get('https://myfavfilmz.herokuapp.com//users', {
      headers: { Authorization: `Bearer ${token}`},
      params: { 
        ID: match.params.userId,
      }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 
}
*/

  render() {
    const { onBackClick, user } = this.props;
    console.log("ProfileView", user);

    return (
      <div className="profile-view">
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
          <div className="mx-auto" style={{ height: '100%', maxWidth: '50%' }} >
            <div className="movie-director" style={{ color: 'white' }}>
            <div className="movie-poster mb-4 justify-content-center text-center mx-auto">
              <img src={user.ImagePath} height="5%" width="20%"/>
            </div>
              <span className="value">{user.Username}</span>
              <span className="value"> {user.Email}</span>
              <span className="value">{user.Birthday} </span>
              <span className="value">{user.FavoriteMovies}</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button className="mt-5"  size="sm" variant="primary" onClick={() => this.handleEdit(true)}>Edit Profile</Button>
              <Button className="mt-5"  variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
            </div>
          </div>
        </Col>
      </div>  
    );
  }
}


ProfileView.propTypes = {
  User: PropTypes.shape({
    FavoriteMovies: PropTypes.array,    
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.instanceOf(Date).isRequired
  }),
  onClick: PropTypes.func
};
