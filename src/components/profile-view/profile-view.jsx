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

  /*
  //Fetch the appropriate profile from your database with MainView is mounted
  componentDidMount(){
    let accessToken = localStorage.getItem('token'); // get the value of the token from localStorage
    if (accessToken !== null) {   // access token being present (i.e. "!==null") means that user is already logged in
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getProfile(accessToken);  // getMovies method is executed and a GET request to the movies endpoint
      }
    }
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
        <Col className="pt-5 bg-dark" style={{ paddingBottom: '80rem', height: '100%', width: '100%', color: 'white', background: '#292b2c'}}>
          <div style={{ height: '100%', maxWidth: '100%' }} >
            <div className="user-profile" style={{ color: 'white' }}>
              <div className="user-intro mb-4 justify-content-left text-left mx-auto">
                <h2>my profile</h2>
                <img src={user.ImagePath} height="5%" width="20%"/>
              </div>
                <div>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5>Username</h5>
                  <span className="value ml-5">{user.Username}</span>
                </div><br/>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5>Password</h5>
                  <p className="ml-5"> ********** </p>
                </div><br/>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5 className="value mr-4">E-mail</h5>
                  <span className="value ml-5"> {user.Email}</span>
                </div><br/>
                <div style={{ display: 'inline-flex', marginLeft: '10rem'}}>
                  <h5>Date of Birth</h5>
                  <span className="value ml-4">{user.Birthday} </span>
              </div>
              <Button className="mt-5" variant="primary" onClick={() => props.handleEdit(true)}>All Movies</Button> 
              <Button className="mt-5" variant="primary" onClick={() => props.handleEdit(true)}>Edit Profile</Button> 
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button className="mt-5"  variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
              <h4 className="text-left mt-5">{user.Username}'s fav filmz</h4>
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