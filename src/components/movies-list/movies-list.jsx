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

  if (!movies) return <div className="main-view"/>;

  return <>
    {filteredMovies.map(m => (
      <Col variant="h-50" className="bg-dark" xs={12} sm={8} md={4} lg={4} xl={3}  key={m._id}>
        <MovieCard movie={m} addFavorite={addFavorite} />
      </Col>
    ))}
  </>;
}

  export default connect(mapStateToProps)(MoviesList);

