import React, {Fragment} from 'react'; 
import { FaveMovies } from '../fave-movies/fave-movies';

import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};


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
function NavigationBar(props) {
  const { movies, user, onLoggedOut, visibilityFilter } = props;



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
            <VisibilityFilterInput visibilityFilter={visibilityFilter} />
              <Link to={`/users/${user.Username}`}>
                <Button variant="link-white" onClick="window.location.reload()">{user.Username}</Button>
              </Link>
              <button onClick={onLoggedOut}>Logout</button>
            </Form>
          </Navbar>
        </div>
        </Row>
        </Router>            
          );
        }
      

      export default connect(mapStateToProps)(NavigationBar);
