//import React into file
import React from 'react';
//import MovieCard into file
import { MovieCard } from '../movie-card/movie-card';

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
      ]
    }
  }

  render() {
    const  { movies } = this.state;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
        <div className="main-view">
          {movies.map(movie => <MovieCard />)}
        </div>
    );
  }
}
