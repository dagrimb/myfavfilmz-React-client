//Import React and useState hook
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link} from "react-router-dom";

import '../../index.scss';
import { Col } from 'react-bootstrap';
import axios from 'axios';


//call useState method and set to empty string the represents values prior to login
export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  //Send request to server for auth
  const handleSubmit = (e) => {
    //prevent default behavior of submitting form
    e.preventDefault();
    //console.log(username, password);
    // Send a request to the server for authentication by passing username and password
      axios.post('https://myfavfilmz.herokuapp.com/login', {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data;
        //console.log(data);
        //call props.onLoggedIn(username), which provides the username to our parent component (child to parent communication)
        props.onLoggedIn(data); //will trigger onLoggedIn method of main-view.jsx; passed to the LoginView and triggers the function 
        //onLoggedIn(authData) in MainView when the user logs in
        //console.log(data);
      })
      .catch(e => {
        console.log('no such user')
        alert("Login failed. Please check your information and try again.");
      });
    };

  return (
    [
      'Dark',
    ].map((variant, idx) => (
      <div className="bg-primary" style={{ width: '100%', height: '130rem'}} /*key={user._id}*/>
        <Col className="bg-primary w-100 h-100" xs={12} sm={12} md={12} lg={12} xl={12}>
          <p style={{ color: 'white', paddingTop: 15, paddingLeft: 0  }}>myfavfilmz</p>
          <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ maxWidth: '28rem' }}
            className="justify-content-center text-center mx-auto my-5"
          >
            <Card.Body>
              <div className="text-align-center">
                <h3>Welcome Back!</h3>
              </div>
              <Form.Text className="mb-4">
                Login into your account
              </Form.Text>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Row className="align-items-left">
                    <Form.Label>Username:</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control 
                        className="mb-2"
                        type="text" 
                        value={username}
                        aria-describedby="inputGroupPrepend"
                        placeholder="Enter username" 
                        onChange={e => setUsername(e.target.value)} 
                      />
                    </InputGroup>
                  </Form.Row>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Row className="align-items-left">
                  <Form.Label>Password:</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      required 
                      type="password" 
                      placeholder="Enter password" 
                      value={password}
                      onChange={e => setPassword(e.target.value)} 
                    />
                  </InputGroup>
                </Form.Row>
              </Form.Group>
              <Button variant="primary my-4" type="submit" onClick={handleSubmit}>
                Login
              </Button>
              <p>New to myfavfilmz?</p>            
              <Link to={`/register`}>
                <Button variant="primary" size="sm" block type="button">Click here to register!</Button> 
              </Link>
            
            
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  ))
)}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func
};