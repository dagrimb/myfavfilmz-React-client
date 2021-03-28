//import React into file
import React from 'react';
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
      movies: [
        { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...'},
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...'},
        { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...'}
      ],
      selectedMovie: null //set default (pre-click event) value to null
    }
  }

  render() {
    const  { movies, selectedMovie } = this.state;
    //if not clicked, access selectedMovie state
    if (selectedMovie) return <MovieView movie={selectedMovie} />;
    //if no movies, display message stating that the list is empty
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    //else, display list of movie cards
    return (
        <div className="main-view">
          {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setState({ selectedMovie: 
          newSelectedMovie}); }} />)}
        </div>
    );
  }
}
