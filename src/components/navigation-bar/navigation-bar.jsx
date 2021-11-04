import React from 'react'; 

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

import Row from 'react-bootstrap/Row';
import { Navbar,Nav,Form} from 'react-bootstrap';
import { BrowserRouter as Router, Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';


//create MovieView component
function NavigationBar(props) {
  const { user, onLoggedOut, visibilityFilter } = props;

    return (
      <Router>
        <Row className="main-view justify-content-md-center mx-auto w-100 bg-dark" >
          <div className="w-100">
            <Navbar collapseOnSelect bg="primary" variant="dark" expand="xl" className="w-100">
              <Navbar.Brand as={Link} to="/">myfavfilmz</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="w-90">
                <Nav style={{ marginLeft: '1rem', width: '30%' }}>
                  <Nav.Link as={Link} to="/account" variant="transparent" className="ml-1">
                    <Button>Account</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about" variant="transparent">
                    <Button>About</Button>
                  </Nav.Link>
                </Nav>
                <Form style={{ width: '100%', textAlign: 'center' }} className="w-sm-100">
                  <div className="my-4">
                    <VisibilityFilterInput className="mt-4" visibilityFilter={visibilityFilter} />
                  </div>
                  <div className="my-4 mx-auto">           
                  <Link to={`/users/${user.Username}`}>
                    <Button className="mx-4 " variant="link-white" onClick="window.location.reload()">{user.Username}'s profile</Button>
                  </Link>
                  <button style={{ marginRight: '0' }} onClick={onLoggedOut}>Logout</button>
                  </div>  
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Row>
      </Router>            
      );
    }
      
  export default connect(mapStateToProps)(NavigationBar);