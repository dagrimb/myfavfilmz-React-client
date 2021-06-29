//Import React and useState hook
import React, { useState } from 'react';
import { LoginView } from '../login-view/login-view';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import FormFile from 'react-bootstrap/FormFile';
import { render } from 'react-dom';
import axios from 'axios';


//call useState method and set to empty string the represents values prior to login
export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState(new Date());

  //Send request to server for auth
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    axios.post('https://myfavfilmz.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
    .then(response => { // if previous backend validation successful...
      const data = response.data;
      console.log(data); // ... data logged to console
      window.open('/', '_self'); // '_self' argument opens current tab (user is being re-directed to 
                                 // main view)
    })
    .catch(e => {
      console.log('error registering the user')
    });
    props.handleRegister(username);
  };

  return (

    [
      'Dark',
    ].map((variant, idx) => (
      <div class="bg-primary" style={{ height: '130rem'}} /*key={user._id}*/>
        <p style={{ color: 'white', paddingTop: 15, paddingLeft: 15}}>myfavfilmz</p>
        <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '40rem', height: '55rem', marginBottom: 10}}
          className="justify-content-center text-center mx-auto"
        >
        <Card.Body>
          <div className="text-align-center">
            <h3>Great to meet you!</h3>
          </div>
          <Form.Text>
            Creat an account
          </Form.Text>
          <Form>
            <Form.Text className="text-muted mb-4">
              We will never share your username, password, email or birthdate with a third-party.
            </Form.Text>
            <Form.Group as={Col} controlId="validationCustomUsername">
              <Form.Label className="float-left">Username</Form.Label>
              <InputGroup className="mb-3" hasValidation>
                <Form.Control
                  type="text" 
                  placeholder="Enter your username" 
                  aria-describedby="inputGroupPrepend"
                  required
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label className="float-left">Email address</Form.Label>
              <InputGroup hasValidation></InputGroup>
              <Form.Control 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                aria-describedby="inputGroupPrepend"
                onChange={e => setEmail(e.target.value)}  
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label className="float-left">Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control 
                  required
                  type="password" 
                  placeholder="Enter your password"
                  value={password}
                  aria-describedby="passwordHelpBlock"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputGroup>
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or 
                emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="float-left">Birthday</Form.Label>
              <InputGroup hasValidation></InputGroup>
              <Form.Control
                required
                type="date"
                value={birthday}
                aria-describedby="inputGroupPrepend"
                onChange={e => setBirthday(e.target.value)}
                placeholder="Birthday"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to the myfavfilmz Terms of Serivce" />
            </Form.Group>
            <Button variant="primary mt-1 h-5" type="submit" onClick={handleSubmit}>Register</Button><br /><br /><br />
            <p>Already a member?</p>
            <Link to={`/`}>
              <Button variant="primary" size="sm" block type="button">Click here to log in!</Button> 
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>

    ))
  )}

RegistrationView.propTypes = {
  username: PropTypes.shape({
    FavoriteMovies: PropTypes.array.isRequired,    
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.instanceOf(Date)
  }),
  onClick: PropTypes.func
};
