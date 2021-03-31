import React from 'react'; 

//create MovieView component
export class MovieView extends React.Component {

  componentDidMount() {
    document.addEventListener('keypress', event => {
      console.log(event.key);
    });
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Genre}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director}</span>
        </div>
        <div className="movie-actors">
          <span className="label">Actors: </span>
          <span className="value">{movie.Actors}</span>
        </div>
        <div className="movie-id">
          <span className="label">ID: </span>
          <span className="value">{movie._id}</span>
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>

        <div className="movie-featured">
          <span className="label">Featured: </span>
          <span className="value">{movie.Featured}</span>
        </div>

        <div className="movie-score">
          <span className="label">Rotten Tomatoes score: </span>
          <span className="value">{movie.Rotten_Tomatoes_score}</span>
        </div>
        <div className="movie-year">
          <span className="label">Year Released: </span>
          <span className="value">{movie.Year}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}