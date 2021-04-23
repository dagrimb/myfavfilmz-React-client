//Import React and useState hook
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup';
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import '../../index.scss';
//import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import FormFile from 'react-bootstrap/FormFile';


//call useState method and set to empty string the represents values prior to login
export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  //Send request to server for auth
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  return (
    [
      'Dark',
    ].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '28rem' }}
        className="justify-content-center mx-auto mt-5"
      >
      <Card.Body>
       <h3>Welcome Back!</h3>
       <Form.Text>
         Login into your account
       </Form.Text>
    <Form>
      <Form.Group controlId="validationCustomUsername">
        <Form.Label>Username:</Form.Label>
        <InputGroup hasValidation>
        <Form.Control 
          required
          type="text" 
          value={username}
          aria-describedby="inputGroupPrepend"
          placeholder="Enter username" 
          onChange={e => setUsername(e.target.value)} 
        />
        </InputGroup>
        <Form.Check label="Remember me" />
      </Form.Group>
      
      <Form.Group controlId="formBasicPassword">
        <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            required 
            type="password" 
            id="inputPassword5"
            placeholder="Enter password" 
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </InputGroup>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button> 
      <p>New to myfavfilmz?</p>
      <button type="button" onClick={() => props.onRegistered(true)}>Click here to register!</button>
    </Form>
    </Card.Body>
    </Card>
  ))
)}





LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired
};