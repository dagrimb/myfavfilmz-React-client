//import React into file
import React from 'react';
//import Axios info file
import axios from 'axios';
import { connect } from 'react-redux';
//import Route and BrowserRouter
import { BrowserRouter as Router, Route} from "react-router-dom";
import { setMovies, setUser, updateInfo, setFavorites, addFavorite, removeFavorite } from '../../actions/actions';
import MoviesList from '../movies-list/movies-list';
import { Redirect } from 'react-router-dom';
//import LoginView into file
import { LoginView } from '../login-view/login-view';
//import MovieView into file
import { MovieView } from '../movie-view/movie-view';
//import DirectorView into file
import { DirectorView } from '../director-view/director-view';
//import GenreView into file
import { GenreView } from '../genre-view/genre-view';
//import Registrationview into file
import { RegistrationView } from '../registration-view/registration-view';
//import ProfileView into file
import ProfileView from '../profile-view/profile-view';
import { ProfileEdit } from '../profile-edit/profile-edit';
import NavigationBar  from '../navigation-bar/navigation-bar';
import { UnderConstruction } from '../under-construction/under-construction';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//create MainView component as a class component by using React.Component template
class MainView extends React.Component {
  //add movies state that will hold list of movies
  constructor(){
    super(); //initialize component state
    this.state = {
      user: null
    };
    this.addNewFilm = this.addNewFilm.bind(this);
    //this.getFavoriteFilms = this.getFavoriteFilms(this);
  }

  //Fetch the list of movies from your database with MainView is mounted
  componentDidMount(){
    let accessToken = localStorage.getItem('token'); // get the value of the token from localStorage
    if (accessToken !== null) {   // access token being present (i.e. "!==null") means that user is already logged in
      this.setState( { isLoggedIn: !!accessToken }); // transform string to boolean 
      this.getUser(localStorage.getItem('userID'), accessToken);
      this.getMovies(accessToken);  // getMovies method is executed and a GET request to the movies endpoint
      this.getFavoriteFilms(localStorage.getItem('userID'), accessToken);
      }
    }

    getMovies(token) {
      axios.get('https://myfavfilmz.herokuapp.com/movies', {  // use axios to make GET request to movies endpoint of Node.js API
        headers: { Authorization: `Bearer ${token}`}  // pass bearer authorization in the header of GET request allowing you to make an 
      })                                              // authenticated request to the API
      .then(response => {
        // Assign the result to the state
        this.props.setMovies(response.data); // passed to the props via the connect() function
        const data = response.data;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    getUser(userID, token) {
      axios.get('https://myfavfilmz.herokuapp.com/users/' + userID, {  
        headers: { Authorization: `Bearer ${token}`}  
      })                                              
      .then(response => {
        this.props.setUser(response.data);    
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    getFavoriteFilms(userID, token) {
      axios.get('https://myfavfilmz.herokuapp.com/users/' + userID + '/Movies', {  
        headers: { Authorization: `Bearer ${token}`}   
      })                                              
      .then(response => {
       this.props.setFavorites(response.data);
        this.setState({
          FavoriteMovies: response.data,
        })
        const data = response.data;
        //console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    updateUserInfo(event) {
      event.preventDefault();

      const newUsername = document.querySelector('#username input');
      const newPassword = document.querySelector('#password input');
      const newEmail = document.querySelector('#email input');
      const newBirthday = document.querySelector('#birthday input');
          
      const updatedUsername = newUsername.value;
      const updatedPassword = newPassword.value;
      const updatedEmail = newEmail.value;
      const updatedBirthday = newBirthday.value;
    
      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');
    
      console.log("update User", updatedUsername, updatedPassword, updatedEmail, updatedBirthday);
    
      axios.put('https://myfavfilmz.herokuapp.com/users/' + userID, {
        Username: updatedUsername, 
        Password: updatedPassword, 
        Email: updatedEmail, 
        Birthday: updatedBirthday 
      },
      { 
        headers: { Authorization: `Bearer ${token}`}
      })
      .then( response => {
        this.setState({
          user: response.data
        })
        console.log(response);
        alert("Your information has been updated");
        })
        .catch (err => {
          console.log(err);
          alert("Something went wrong. Did you fill out the entire form?")
        })
      }
      
    addNewFilm(e) {
      const favoriteMovies = this.props.user.FavoriteMovies;
      const movieID = e.currentTarget.dataset.id;
      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');

      console.log("update Favorite Film", userID, movieID, favoriteMovies);

      if ( this.state.user.FavoriteMovies.indexOf( movieID ) >= 0 ) {
        alert("This movie is already in your favorites.");
      } else {
      axios.post('https://myfavfilmz.herokuapp.com/users/' + userID + '/Movies/' + movieID, {}, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        this.props.addFavorite(response.data);
        window.location.reload();
        alert("Your favorite movie list has been updated.");
      })
      .catch (error => {
        console.log(error);
      })
    }
  }

    removeFavoriteFilm(e) {
      e.preventDefault();

      const movieID = e.currentTarget.dataset.id;
      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');

      console.log("update Favorite Film", userID, movieID);

      axios.delete('https://myfavfilmz.herokuapp.com/users/' + userID + '/Movies/' + movieID, {
        headers: { Authorization: `Bearer ${token}`},
    })
    .then(response => {
      this.props.removeFavorite(response);
      console.log(response);
      window.location.reload();
      alert("Your favorite movie list has been updated");
    })
    .catch (error => {
      console.log(error);
    })
  }

    removeUser(event) {
      event.preventDefault();

      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');

      console.log("delete user", 'userID');

      axios.delete('https://myfavfilmz.herokuapp.com/users/' + userID, {
          headers: { Authorization: `Bearer ${token}`}      
        })
        .then(response => {
          this.setState({
            user: null
          })
          localStorage.removeItem('token');
          localStorage.removeItem('userID');
          console.log(response);
          alert("Your account has been deleted");
        })
        .catch(response => {
          console.log(response);
          })
        }

  //Upon successful login, this method will update the user property with specific user
  onLoggedIn(authData) { // authData allows us to use both the user and the token; this is triggered when the user logs in...
    //console.log("LOGIN", authData);
    //this.props.setUser(authData);
    this.setState({
      user: authData.user // ...updates the state with the logged in authData (the user's username is saved in the user state)
    });
    
    //auth info (token, user) received from handleSubmit method is saved in localStorage
    localStorage.setItem('token', authData.token);
    localStorage.setItem('userID', authData.user._id);
    this.getMovies(authData.token); // is called and gets movies from API once user is logged in
  }
  
  handleRegister = (value) => {
    this.setState({ registerClicked: value });
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    this.setState({
      user: null
    });
    window.location.href = '/'
  }


  render() {
    const { movies, user } = this.props; // movies is extracted from this.props rather than this.state
    let { FavoriteMovies } = this.state;
    //console.log(FavoriteMovies);

      return (
        <Router>
          <Row className="main-view justify-content-center ml-0 mr-0 w-100 bg-dark">
              <Route exact path="/" render={() => {
                if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister} onLoggedOut={user => this.onLoggedOut(user)}/>
                return ( 
                  <>
                    <NavigationBar movies={movies} user={user} onLoggedIn={user => this.onLoggedIn(user)} onLoggedOut={user => this.onLoggedOut(user)} />
                    <MoviesList movies={movies} addFavorite={movie => this.addNewFilm(movie)}/>
                  </>
                 ) 
                }} 
              />
            <Route exact path="/register" render={() => {
              if (user) return <Redirect to="/" />
              if (!user) return <RegistrationView handleRegister={value => this.handleRegister(value)} onRegistered={this.onRegistered}/>}} />
            <Route path="/movies/:movieId" render={({ match, history }) => { // this path will display a single movie
              if (!user) return <div>Loading...</div>             
              if (movies.length === 0) return <div className="main-view" />  
              return (
                <>
                  <NavigationBar user={user} onLoggedIn={user => this.onLoggedIn(user)} onLoggedOut={user => this.onLoggedOut(user)} />
                  <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                    <MovieView movie={movies.find(m => m._id === match.params.movieId)} addFavorite={this.addNewFilm} onBackClick={() => history.goBack()}/>
                  </Col>
                </>
              )  
            }} />
            <Route path="/directors/:name" render={({ match, history }) => { // this path will display a single movie
              if (!user) return <div>Loading...</div>              
              if (movies.length === 0) return <div className="main-view" /> 
              return (
                <>
                  <NavigationBar user={user} onLoggedIn={user => this.onLoggedIn(user)} onLoggedOut={user => this.onLoggedOut(user)} />
                  <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                    <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()}/>
                  </Col>
                </>
              )
            }} />
            <Route path="/genres/:name" render={({ match, history}) => {
              if (!user) return <div>Loading...</div>             
              if (movies.length === 0) return <div className="main-view" />
              return (
                <>
                  <NavigationBar user={user} onLoggedIn={user => this.onLoggedIn(user)} onLoggedOut={user => this.onLoggedOut(user)} />
                  <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                    <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()}/>
                </Col>
                </>
              )
            }} />
            <Route exact path="/users/:Username" render={({ match, history}) => {
             //if (!user) return <div>Loading...</div>            
              if (movies.length === 0) return <div className="main-view" />
              return (
                <>
                  <NavigationBar FavoriteMovie={FavoriteMovies} user={user} onLoggedIn={user => this.onLoggedIn(user)} onLoggedOut={user => this.onLoggedOut(user)} />
                  <ProfileView FavoriteMovie={user.FavoriteMovies.map(movieID => movies.find(m => m._id === movieID))} 
                  user={user} removeFavoriteFilm={movie => this.removeFavoriteFilm(movie)} onBackClick={() => history.goBack()}/>
                </>
              )
            }} />
            <Route exact path="/users/:Username/edit_profile" render={({ match, history }) => { // this path will display a single movie
            if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister} onLoggedOut={user => this.onLoggedOut(user)}/>
                return (
                <>
                  <NavigationBar user={user} onLoggedIn={user => this.onLoggedIn(user)} onLoggedOut={user => this.onLoggedOut(user)} />
                    <Col xs={12} sm={8} md={12} lg={12} xl={10} style={{paddingLeft: 0, paddingRight: 0 }}>
                      <ProfileEdit movies={movies} updateUserInfo={e => this.updateUserInfo(e)} removeUser={e => this.removeUser(e)} user={user} onBackClick={() => history.goBack()}/>
                    </Col>
                    ))
                </>
              )
            }} />
            <Route path="/account" render={({ match, history }) => { 
                return <UnderConstruction />
              }} />
            <Route path="/about" render={({ match, history }) => { 
                return <UnderConstruction />
              }} />
          </Row>
        </Router>
      );
    }
  }

let mapStateToProps = state => {
  return { movies: state.movies, user: state.user, favoriteMovies: state.favoriteMovies }
}

export default connect(mapStateToProps, { setMovies, setUser, updateInfo, setFavorites, addFavorite, removeFavorite })(MainView);

