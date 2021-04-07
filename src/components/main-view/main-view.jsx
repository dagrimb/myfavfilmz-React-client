//import React into file
import React from 'react';
//import Axios info file
import axios from 'axios';
//import MovieCard into file
import { MovieCard } from '../movie-card/movie-card';
//import MovieView into file
import { MovieView } from '../movie-view/movie-view';

//create MainView component as a class component by using React.Component template
export class MainView extends React.Component {
  //add movies state that will hold list of movies
  constructor(){

    super(); //initialize component state
    this.state = {
      movies: [],
      selectedMovie: null //set default (pre-click event) value to null
    }
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

  setSelectedMovie(newSelectedMovie) { //setSelectedMovie is a custom component method
    this.setState({ //to change the state of the MainView
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const  { movies, selectedMovie } = this.state; // shortened form of const movies = this.state.movies
    //if not clicked, access selectedMovie state (passing a function as a prop called "onMovieClick")
    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />;
    //if no movies, display message stating that the list is empty
    if (movies.length === 0) return <div className="main-view" />;
    //else, display list of movie cards
    return (
        <div className="main-view">
          {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: 
          newSelectedMovie }); }} />)}
        </div>
    );
  }
}
