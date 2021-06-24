//import React into file
import React from 'react';
//import Axios info file
import axios from 'axios';
//import Route and BrowserRouter
import { BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom";
//import LoginView into file
import { LoginView } from '../login-view/login-view';
//import MovieCard into file
import { MovieCard } from '../movie-card/movie-card';
//import MovieView into file
import { MovieView } from '../movie-view/movie-view';
//import DirectorView into file
import { DirectorView } from '../director-view/director-view';
//import GenreView into file
import { GenreView } from '../genre-view/genre-view';
//import Registrationview into file
import { RegistrationView } from '../registration-view/registration-view';
//import ProfileView into file
import { ProfileView } from '../profile-view/profile-view';
import { ProfileEdit } from '../profile-edit/profile-edit';
import { FaveMovies } from '../fave-movies/fave-movies';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import Button into file
//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import { Navbar,Nav, Form,FormControl} from 'react-bootstrap';

//create MainView component as a class component by using React.Component template
export class MainView extends React.Component {
  //add movies state that will hold list of movies
  constructor(){
    super(); //initialize component state
    this.state = {
      movies: [],
      //selectedMovie: null,//set default (pre-click event) value to null
      user: null
      //registerClicked: false,
      //isLoggedIn: false,
      //profileEditClicked: false
    };
  }

  //Fetch the list of movies from your database with MainView is mounted
  componentDidMount(){
    let accessToken = localStorage.getItem('token'); // get the value of the token from localStorage
    if (accessToken !== null) {   // access token being present (i.e. "!==null") means that user is already logged in
      this.setState( { isLoggedIn: !!accessToken }); // transform string to boolean 
      this.getUser(localStorage.getItem('userID'), accessToken);
      this.getMovies(accessToken);  // getMovies method is executed and a GET request to the movies endpoint
      this.getFavoriteFilms(localStorage.getItem('userID'), accessToken);
      //this.addNewFilm(localStorage.setItem('userID', faveMovie), accessToken);
      /*this.updateUserInfo(localStorage.setItem('userID', updates.Username), accessToken);*/
      }
    }

    getMovies(token) {
      axios.get('https://myfavfilmz.herokuapp.com/movies', {  // use axios to make GET request to movies endpoint of Node.js API
        headers: { Authorization: `Bearer ${token}`}  // pass bearer authorization in the header of GET request allowing you to make an 
      })                                              // authenticated request to the API
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    getUser(userID, token) {
      axios.get('https://myfavfilmz.herokuapp.com/users/' + userID, {  // use axios to make GET request to movies endpoint of Node.js API
        headers: { Authorization: `Bearer ${token}`}  // pass bearer authorization in the header of GET request allowing you to make an 
      })                                              // authenticated request to the API
      .then(response => {
        // Assign the result to the state
        this.setState({
          user: response.data
          //birthday: user.Birthday.toLocaleDateString()
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    getFavoriteFilms(userID, token) {
      axios.get('https://myfavfilmz.herokuapp.com/users/' + userID + '/Movies', {  // use axios to make GET request to movies endpoint of Node.js API
        headers: { Authorization: `Bearer ${token}`}  // pass bearer authorization in the header of GET request allowing you to make an 
      })                                              // authenticated request to the API
      .then(response => {
        // Assign the result to the state
        this.setState({
          FavoriteMovies: response.data
          //findFavorites: FavoriteMovies.map(id => movies.find(m => m._id === id))
        })
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
      //console.log(user, movie);
      const movieID = e.currentTarget.dataset.id;
      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');

      console.log("update Favorite Film", userID, movieID);

      axios.post('https://myfavfilmz.herokuapp.com/users/' + userID + '/Movies/' + movieID, {}, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        this.setState({
          movie: response.data
        })
        console.log(response);
        alert("Your favorite movie list has been updated.");
      })
      .catch (error => {
        console.log(error);
      })
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
      this.setState({
        movie: null
      })
      console.log(response);
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
          console.log(response);
          alert("Your account has been deleted");
        })
        .catch(response => {
          console.log(response);
          })
        }


  //a method later passed as a prop to LoginView (below). When user clicks movie, the function updates
  //state of the selectedMovie property with that movie
  /*onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }*/

  inputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //Upon successful login, this method will update the user property with specific user
  onLoggedIn(authData) { // authData allows us to use both the user and the token; this is triggered when the user logs in...
    console.log("LOGIN", authData);
    this.setState({
      user: authData.user // ...updates the state with the logged in authData (the user's username is saved in the user state)
    });

    //auth info (token, user) received from handleSubmit method is saved in localStorage
    localStorage.setItem('token', authData.token);
    localStorage.setItem('userID', authData.user._id);
    this.getMovies(authData.token); // is called and gets movies from API once user is logged in
  }



  /*setSelectedMovie(newSelectedMovie) { //setSelectedMovie is a custom component method
    this.setState({ //to change the state of the MainView
      selectedMovie: newSelectedMovie
    });
  }*/

  /*
  findFavorites = (FavoriteMovies) => {
    this.setState({ FavoriteMovies: FavoriteMovies.map(id => movies.find(m => m._id === id))});
  }*/

  
  handleRegister = (value) => {
    this.setState({ registerClicked: value });
  }

  

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  render() {
    const  { movies, user, registerClicked, FavoriteMovies, birthday } = this.state; // shortened form of const movies = this.state.movies
    //if no user signed in and button to render RegistrationView is clicked, render RegistrationView
    if (!user && registerClicked) return <RegistrationView handleRegister={this.handleRegister} onRegistered={this.onRegistered} />;
    //if user is logged in but not on user profile...
    //if (isLoggedIn && !user) return <div>Loading...</div>
    //if no user signed in, render LoginView
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister}/>
    //if (user && profileEditClicked) return <ProfileEdit handleEdit={this.handleEdit} onRegistered={this.onRegistered} />;
      return (
        <Router>
          <Row className="main-view justify-content-md-center ml-0">
            <div className="w-100">
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand className="ml-2" href="#home">myfavfilmz</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#account">Account</Nav.Link>
                  <Nav.Link href="#movies">Movies</Nav.Link>
                  <Nav.Link href="aboutus">About</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-3" />
                  <Button variant="outline-light" className="mr-5">Search</Button>
                  <Link to={`/users/${user.Username}`}>
                    <Button variant="link-white">{user.Username}</Button>
                  </Link>
                  <button onClick={() => { this.onLoggedOut() }}>Logout</button>
                </Form>
              </Navbar>
            </div>

            <Route exact path="/" render={( match, history ) => { // Route component tells React Router the mainview routes and what to render if path and URL entered match
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister}/>
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return movies.map(m => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} addFavorite={movie => this.addNewFilm(movie)}/>
                </Col>
              ))
            }} />
            <Route path="/register" render={() => {
              if (user) return <Redirect to="/" />
              return <Col>
                <RegistrationView />
              </Col> 
            }} />

            <Route path="/movies/:movieId" render={({ match, history }) => { // this path will display a single movie
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister}/>
              </Col>
              if (movies.length === 0) return <div className="main-view" />;  
              return <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} addFavorite={movie => this.addNewFilm(movie)} addFavorite={this.addNewFilm} onBackClick={() => history.goBack()}/>
              </Col>
            }} />
            <Route path="/directors/:name" render={({ match, history }) => { // this path will display a single movie
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister} />
              </Col>
              if (movies.length === 0) return <div className="main-view" />; 
              return <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()}/>
              </Col>
            }} />
            <Route path="/genres/:name" render={({ match, history}) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister}/>
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()}/>
              </Col>
            }} />
            <Route exact path="/users/:Username" render={({ match, history}) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister}/>
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                  <ProfileView movie={FavoriteMovies} user={user} removeFavoriteFilm={this.removeFavoriteFilm} onBackClick={() => history.goBack()}/>
                </Col>       
              }} />
            <Route exact path="/users/:Username/edit_profile" render={({ match, history }) => { // this path will display a single movie
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister}/>
              </Col>
              return <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                <ProfileEdit updateUserInfo={e => this.updateUserInfo(e)} removeUser={e => this.removeUser(e)} user={user} onBackClick={() => history.goBack()}/>
              </Col>
            }} />
            <Route exact path="/users/:Username/Movies" render={({ match, history}) => {
              if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} handleRegister={this.handleRegister}/>
              </Col>
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={12} style={{paddingLeft: 0, paddingRight: 0 }}>
                  <FaveMovies birthday={birthday} movie={FavoriteMovies} removeFavoriteFilm={this.removeFavoriteFilm} user={user} onBackClick={() => history.goBack()}/>
                </Col>  
              }} />
          </Row>
        </Router>
      );
    }
  }


  