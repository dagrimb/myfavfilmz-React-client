//import React into file
import React from 'react';
//import Axios info file
import axios from 'axios';
//import Container into file
//import Container from 'react-bootstrap/Container';
//import MovieCard into file
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RegistrationView } from '../registration-view/registration-view';
//import LoginView into file
import { LoginView } from '../login-view/login-view';


import { MovieCard } from '../movie-card/movie-card';
//import MovieView into file
import { MovieView } from '../movie-view/movie-view';
//import Button into file
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';

//import RegistrationView into file



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

  //Fetch the list of movies from your database with MainView is mounted
  componentDidMount(){
    axios.get('https://myfavfilmz.herokuapp.com/movies') //use Axios to fetch the movies
      .then(response => {
        this.setState({ //set the state of movies to the data received
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
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

  render() {
    const  { movies, selectedMovie, user, registerClicked } = this.state; // shortened form of const movies = this.state.movies
    //if no user signed in and button to render RegistrationView is clicked, render RegistrationView
    if (!user && registerClicked) return <RegistrationView handleRegister={this.handleRegister} />;
    //if no user signed in, render LoginView
    if (!user) return <LoginView handleRegister={this.handleRegister} />;
    //if not clicked, access selectedMovie state (passing a function as a prop called "onMovieClick")
    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />;
    //if no movies, display message stating that the list is empty
    if (!movies || movies.length === 0) return <div className="main-view" />;
    //else, display list of movie cards
    return (

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
        {selectedMovie
          ? (
            <Col md={8} class="h-100">
              <MovieView class="h-100" movie={selectedMovie} onBackClick={movie => this.onMovieClick(null)} />
            </Col>
          )
          : movies.map(movie => (
            <Col class="bg-dark h-50" md={4} lg={3} xl={2} style={{marginTop: 0, padding: 0 }} key={movie._id}>
              <MovieCard movie={movie} onClick={movie => this.onMovieClick(movie)}/>
            </Col>
          ))
        }
      </Row>
    );
  }
}
