import React, {Fragment} from 'react'; 
import { FaveMovies } from '../fave-movies/fave-movies';

import Image from 'react-bootstrap/Image';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { ProfileView } from '../profile-view/profile-view';

import { BrowserRouter as Router, Route, Link} from "react-router-dom";

//import { Button } from '../button/button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

//create MovieView component
export class NavigationBar extends React.Component {

  //function for both adding and removing event listener
  keypressCallback(event) {
    console.log(event.key);
  }

  render() {
    const { user, onLoggedOut } = this.props;

    return (
      <Router>
      <Row className="main-view justify-content-md-center ml-0 w-100 bg-dark">
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
              <button onClick={onLoggedOut}>Logout</button>
            </Form>
          </Navbar>
        </div>
        </Row>
        </Router>            
          );
        }
      }