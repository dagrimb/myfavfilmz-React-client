//Import React and useState hook
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import '../../index.scss';
//import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import FormFile from 'react-bootstrap/FormFile';
import Alert from 'react-bootstrap/Alert';
import { Col } from 'react-bootstrap';


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
      <div class="w-100 h-100">
      
      <Col className="bg-primary w-100 h-100">
      <p style={{ color: 'white', paddingTop: 15, paddingLeft: 0  }}>myfavfilmz</p>
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '28rem' }}
        className="justify-content-center text-center mx-auto"
      >
      <Card.Body>
        <div className="text-align-center">
          <h3>Welcome Back!</h3>
        </div>
       <Form.Text>
         Login into your account
       </Form.Text>
    <Form>
      <Form.Group controlId="validationCustomUsername">
        <Form.Row className="align-items-left">
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
        </Form.Row>
        <Form.Row className="align-items-left">
        <Form.Check label="Remember me" />
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
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
      <Button variant="primary float-right mr-5" type="submit" onClick={handleSubmit}>
        Login
      </Button><br /><br /><br />  
      <p>New to myfavfilmz?</p>
      <Button variant="primary" size="sm" block type="button" onClick={() => props.onRegistered(true)}>Click here to register!</Button>
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
  }).isRequired,
  onClick: PropTypes.func
};