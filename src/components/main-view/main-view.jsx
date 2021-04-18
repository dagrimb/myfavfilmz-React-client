//import React into file
import React from 'react';
//import Axios info file
import axios from 'axios';
//import Container into file
import Container from 'react-bootstrap/Container';
//import MovieCard into file
import { MovieCard } from '../movie-card/movie-card';
//import MovieView into file
import { MovieView } from '../movie-view/movie-view';
//import Button into file
import { Button } from '../button/button';
//import RegistrationView into file
import { RegistrationView } from '../registration-view/registration-view';
//import LoginView into file
import { LoginView } from '../login-view/login-view';


//create MainView component as a class component by using React.Component template
export class MainView extends React.Component {
  //add movies state that will hold list of movies
  constructor(){
    super(); //initialize component state
    this.state = {
      movies: null,
      selectedMovie: null,//set default (pre-click event) value to null
      user: null,
      registerClicked: true
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
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  setSelectedMovie(newSelectedMovie) { //setSelectedMovie is a custom component method
    this.setState({ //to change the state of the MainView
      selectedMovie: newSelectedMovie
    });
  }

  onRegistered = (value) => {
    this.setState({ registerClicked: value });
  }

  render() {
    const  { movies, selectedMovie, newUser, user, registerClicked } = this.state; // shortened form of const movies = this.state.movies
    //if no user signed in and button to render RegistrationView is clicked, render RegistrationView
    //if (!user && registerClicked) return <RegistrationView onRegistered={this.onRegistered} />;
    //if no user signed in, render LoginView
    //if (!user) return <LoginView onRegistered={this.onRegistered} />;
    //if not clicked, access selectedMovie state (passing a function as a prop called "onMovieClick")
    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />;
    //if no movies, display message stating that the list is empty
    if (!movies || movies.length === 0) return <div className="main-view" />;
    //else, display list of movie cards
    return (
      <Container>
        <div className="main-view">
          {selectedMovie
            ? (
              <Row> 
                <MovieView movie={selectedMovie} onBackClick={movie => this.onMovieClick(null)}/>
              </Row>
            )
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
            ))
          }
        </div>
      </Container>
    );
  }
}
