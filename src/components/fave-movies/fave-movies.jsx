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
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

//create MovieView component
export class FaveMovies extends React.Component {

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
    const { user, movie, removeFavoriteFilm } = this.props;
    console.log("ProfileView", user);
   console.log("FavoriteMovies", movie);

    return (
      <CardDeck  variant="h-50" className=" fave-movies bg-dark">
      <Card className="text-center" style={{ height: '35rem', width: '18rem', color: 'white', background: '#292b2c'}}>
        <Card.Body className="bg-dark h-100 mx-2">
          <Card.Title style={{marginTop: 25, paddingRight: 0 }}>{movie.Title}</Card.Title>
          <Card.Img variant="top mb-3" style={{ height: '20rem', width: '13rem', textAlign: 'center'}} src={movie.ImagePath} /><br/>
          <Link to={`/movies/${movie._id}`}>
            <Button style={{ marginBottom: 25 }} variant="link">Read More</Button>
          </Link>
          <button data-id={movie._id} type="submit" style={{ display: 'block', margin: 'auto' }} onClick={removeFavoriteFilm}>Remove</button>
        </Card.Body>
      </Card>
    </CardDeck>   
    );
  }
}

