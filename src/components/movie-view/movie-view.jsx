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
          { movies.map((movie, index) => (<span key={index} className="value">{movie.Description}</span>)) }
          <div className="movie-synopsis">
            <span className="label">Synopsis: </span>
            <span className="value">{movie.Description.Synopsis}</span>
          </div>
          <div className="movie-synopsis-source">
            <span className="label">Source: </span>
            <span className="value">{movie.Description.Source}</span>
          </div>
        </div>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Genre}</span>
          <div className="movie-genre-name">
            <span className="label">Name: </span>
            <span className="value">{movie.Genre.Name}</span>
          </div>
          <div className="movie-genre-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Genre.Description}</span>
          </div>
          <div className="movie-genre-source">
            <span className="label">Source: </span>
            <span className="value">{movie.Genre.Source}</span>
          </div>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director}</span>
          <div className="movie-director-name">
            <span className="label">Name: </span>
            <span className="value">{movie.Director.Name}</span>
          </div>
          <div className="movie-director-bio">
            <span className="label">Bio: </span>
            <span className="value">{movie.Director.Bio}</span>
          </div>
          <div className="movie-director-birth">
            <span className="label">Birth: </span>
            <span className="value">{movie.Director.Birth}</span>
          </div>
          <div className="movie-director-source">
            <span className="label">Source: </span>
            <span className="value">{movie.Director.Source}</span>
          </div>
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


<ul>Quote: { response.map((item, index) => (<li key={index}>{item.quote}</li>)) }</ul>
