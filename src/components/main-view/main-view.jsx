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

  componentDidMount(){
    axios.get('https://myfavfilmz.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const  { movies, selectedMovie } = this.state;
    //if not clicked, access selectedMovie state
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
