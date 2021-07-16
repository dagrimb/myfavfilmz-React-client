import React from 'react'; 

import { connect } from 'react-redux';
import { FaveMovies } from '../fave-movies/fave-movies';

import Col from 'react-bootstrap/Col';

//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

//create ProfileView component
function ProfileView(props) {
  const { user, visibilityFilter, FavoriteMovie, removeFavoriteFilm } = props;
  //console.log(FavoriteMovie);
  let filteredMovie = FavoriteMovie;

  if (visibilityFilter !== '') {
    filteredMovie = FavoriteMovie.filter(fm => fm.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  return <>
    <Col xs={12} sm={10} md={8} lg={10} xl={11} className="pt-5 bg-dark mx-auto" style={{ height: '50%', width: '100%', color: 'white', background: '#292b2c'}}>
      <div className="profile-view pt-5 bg-dark" style={{ paddingBottom: '1rem', width: '100%', color: 'white', background: '#292b2c'}}>
        <div style={{ height: '100%', width: '20rem' }} >
          <div className="user-profile" style={{ color: 'white' }}>
            <div className="user-intro mb-4 justify-content-left text-left ml-3">
              <h2>my profile</h2>
              <img src={user.ImagePath} height="5%" width="20%"/>
            </div>
            <div>
              <div style={{ display: 'inline-flex', marginLeft: '2rem'}}>
                <h5>Username</h5>
                <span className="value ml-5">{user.Username}</span>
              </div><br/>
              <div style={{ display: 'inline-flex', marginLeft: '2rem'}}>
                <h5>Password</h5>
                <p className="ml-5"> ********** </p>
              </div><br/>
              <div style={{ display: 'inline-flex', marginLeft: '2rem'}}>
                <h5 className="value mr-4">E-mail</h5>
                <span className="value ml-4"> {user.Email}</span>
              </div><br/>
              <div style={{ display: 'inline-flex', marginLeft: '2rem'}}>
                <h5>Date of Birth</h5>
                <span className="value ml-4">{ (new Date(user.Birthday)).toLocaleDateString() } </span>
              </div>
            </div>
            <div className="mx-auto my-5" style={{ display: 'inline-flex', maxWidth: '90%'}}>
              <Link to={`/users/${user.Username}/edit_profile`}>
                <Button className="mx-1" variant="primary">Edit Profile or Unregister</Button> 
              </Link>
              <Link to={`/`}>
                <Button style={{ marginLeft: '0rem'}} variant="primary">Back to All Movies</Button>
              </Link>
            </div>  
          </div>
          <h4 className="text-left mt-5 ml-3" style={{ marginBottom: 0}}>{user.Username}'s fav filmz</h4>
          <div>
         </div>
        </div>
      </div> 
      </Col>
      <>
        {FavoriteMovie.length === 0 ? <div style={{ color: 'white', marginBottom: '5rem' }}>You currently do not have any favorites. Go back to 
        all movies to select your first ones today!</div>
        : filteredMovie.length === 0 ? <div className="bg-dark justify-md-content-center m-5" style={{ color: 'white', height: '35rem'}}>No movies found. Please check the 
        name of the film you are looking for and try again.</div>
        : filteredMovie.map(fm => (
            <Col variant="h-50 w-100" className="bg-dark" xs={12} sm={10} md={6} lg={4} xl={3}  key={fm._id}>
              <FaveMovies FavoriteMovie={fm} removeFavoriteFilm={removeFavoriteFilm} />
            </Col>
          ))
        }   
      </>
    </>
  }
      
  export default connect(mapStateToProps)(ProfileView);
