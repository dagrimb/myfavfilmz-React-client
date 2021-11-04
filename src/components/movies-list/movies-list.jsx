import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter, addFavorite } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }
  
  return (
    <>
      {
        filteredMovies.length > 0 ? 
          filteredMovies.map(m => 
            <Col variant="h-50" className="bg-dark justify-md-content-center" xs={12} sm={10} md={4} lg={4} xl={3} xxl={2} key={m._id}>
              <MovieCard movie={m} addFavorite={addFavorite} />
            </Col>
          )
        : 
          <div className="bg-dark justify-md-content-center m-5" style={{ color: 'white', height: '35rem'}}>No movies found. Please check the 
          name of the film you are looking for and try again.</div>
      }
    </>
  )
}

  export default connect(mapStateToProps)(MoviesList);