//import React into file
import React from 'react';
//import Axios info file
import axios from 'axios';
//import Route and BrowserRouter
import { BrowserRouter as Router, Route} from "react-router-dom";
//import MovieCard into file
import { MovieCard } from '../movie-card/movie-card';
//import MovieView into file
import { MovieView } from '../movie-view/movie-view';
//import LoginView into file
import { LoginView } from '../login-view/login-view';
//import Registrationview into file
import { RegistrationView } from '../registration-view/registration-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import Button into file
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';

//create MainView component as a class component by using React.Component template
export class MainView extends React.Component {
  //add movies state that will hold list of movies
  constructor(){
    super(); //initialize component state
    this.state = {
      movies: [],
      selectedMovie: null,//set default (pre-click event) value to null
      user: null,
      registerClicked: false
    };
  }

  getMovies(token) {
    axios.get('https://myfavfilmz.herokuapp.com/movies', {  // use axios to make GET request to movies endpoint of Node.js API
      headers: { Authorization: `Bearer ${token}`}  // pass bearer authorization in the header of GET request allowing you to make an 
    })                                              // authenticated request to the API
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //Fetch the list of movies from your database with MainView is mounted
  componentDidMount(){
    let accessToken = localStorage.getItem('token'); // get the value of the token from localStorage
    if (accessToken !== null) {   // access token being present (i.e. "!==null") means that user is already logged in
      this.setState({
        user: localStorage.getItem('user')
      })
      this.getMovies(accessToken);  // getMovies method is executed and a GET request to the movies endpoint
      }
    }

  //a method later passed as a prop to LoginView (below). When user clicks movie, the function updates
  //state of the selectedMovie property with that movie
  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  //Upon successful login, this method will update the user property with specific user
  onLoggedIn(authData) { // authData allows us to use both the user and the token; this is triggered when the user logs in...
    console.log(authData);
    this.setState({
      user: authData.user.Username // ...updates the state with the logged in authData (the user's username is saved in the user state)
    });

    //auth info (token, user) received from handleSubmit method is saved in localStorage
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token); // is called and gets movies from API once user is logged in
  }

  setSelectedMovie(newSelectedMovie) { //setSelectedMovie is a custom component method
    this.setState({ //to change the state of the MainView
      selectedMovie: newSelectedMovie
    });
  }

  handleRegister = (value) => {
    this.setState({ registerClicked: value });
  }

 

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  render() {
    const  { movies, user } = this.state; // shortened form of const movies = this.state.movies
    //if no user signed in and button to render RegistrationView is clicked, render RegistrationView
    if (!user) return 
      <Row>
        <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
        </Col>
      </Row>
      if (movies.length === 0) return <div className="main-view" />;
      return (
        <Router>
          <Row className="main-view justify-content-md-center ml-0">
            <div className="w-100">
              <Navbar bg="primary" variant="dark" style={{paddingLeft: 0, paddingRight: 0 }}>
                <Navbar.Brand className="ml-2" href="#home">myfavfilmz</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#account">Account</Nav.Link>
                  <Nav.Link href="#movies">Movies</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-3" />
                  <Button variant="outline-light" className="mr-5">Search</Button>
                </Form>
              </Navbar>
            </div>
            <Route exact path="/" render={() => { // Route component tells React Router the mainview routes and what to render if path and URL entered match
              return movies.map(m => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }} />
            <Route path="/movies/:movieId" render={({ match }) => { // this path will display a single movie
              return <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} />
              </Col>
            }} />
          </Row>
        </Router>
      );
    }
  }




