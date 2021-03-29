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
      movies: [
        { _id: 1, Title: 'Inception', Description: 'A thief who steals corporate secrets through the user of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', 
        ImagePath: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        Genre: 'Action', Director: 'Christopher Nolan', Actors: 'Leonardo DiCaprio, Ken Wantanabe, Joseph Gordon-Levitt', Year: '2010' },
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 
        ImagePath: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        Genre: 'Drama', Director: 'Frank Darabont', Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton', Year: '1994' },
        { _id: 3, Title: 'Gladiator', Description: 'A former Roman General sets out to exact vengence against the corrupt emperor who murdered his family and sent him into slavery.', 
        ImagePath: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        Genre: 'Action', Director: 'Ridley Scott', Actors: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen', Year: '2000' }
      ],
      selectedMovie: null //set default (pre-click event) value to null
    }
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
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    //else, display list of movie cards
    return (
        <div className="main-view">
          {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: 
          newSelectedMovie }); }} />)}
        </div>
    );
  }
}
