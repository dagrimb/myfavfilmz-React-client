//Import React and useState hook
import React, { useState } from 'react';
import { LoginView } from '../login-view/login-view';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import FormFile from 'react-bootstrap/FormFile';
import { render } from 'react-dom';
import axios from 'axios';


//call useState method and set to empty string the represents values prior to login
export function ProfileEdit(props) {
  const [ username, setUsername ] = useState(props.Username);
  const [ password, setPassword ] = useState(props.Password);
  const [ email, setEmail ] = useState(props.Email);
  const [ birthday, setBirthday ] = useState(props.Birthday);
  const [ user, setNewUser ] = useState(props.user);
  
  return (

    [
      'Dark',
    ].map((variant, idx) => (
      <div class="profile-edit bg-dark" style={{ height: '130rem'}} /*key={user._id}*/>
        <div style={{ color: 'white', paddingTop: 15, paddingLeft: 15}}>
        <Link to={`/users/${user.Username}`}>
            <Button className="mt-5" style={{display: 'float-right'}} variant="primary"> Back to Your Profile</Button>
          </Link>
        </div>
        <Card
          bg="primary" variant="toLowerCase()"
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '60rem', height: '55rem', marginBottom: 10, marginTop: '10rem', marginLeft: '10rem'}}
          className="justify-content-center bg-primary"
        >
        <Card.Body>
          <div className="text-align-center" >
            <h3>Update your account information</h3>
          </div>
          <Form.Text style={{ marginTop:'0rem'}}>
            Enter your desired new information in the appropriate fields below
          </Form.Text>
          <Form>
            <Form.Group as={Col} controlId="validationCustomUsername" style={{ marginTop: '3rem', display: 'inline-flex'}}>
              <Form.Label className="float-left mr-3">Username</Form.Label>
              <InputGroup className="mb-3" id="username" hasValidation>
                <Form.Control
                  type="text"
                  name="newUsername"
                  value={user.Username}
                  placeholder={user.Username}
                  aria-describedby="inputGroupPrepend"
                  //value={username}
                  onChange={this.inputChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicPassword" style={{ marginTop: '2rem', paddingBottom: '0rem', display: 'inline-flex'}}>
              <Form.Label className="float-left mr-4">Password</Form.Label>
              <InputGroup id="password" hasValidation>
                <Form.Control 
                  style={{ width: '49rem'}}
                  type="password" 
                  name="newPassword"
                  value={user.password}
                  placeholder="***********"
                  //value={password}
                  aria-describedby="passwordHelpBlock"
                  onChange={this.inputChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Text style={{ marginLeft: '6rem', marginTop:'0rem'}}>
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or 
                emoji.
              </Form.Text>
            <Form.Group as={Col} controlId="formBasicEmail" style={{ marginTop: '2rem', display: 'inline-flex'}}>
              <Form.Label className="float-left">Email address</Form.Label>
              <InputGroup id="email" hasValidation>
              <Form.Control 
                style={{ width: '49rem'}}
                type="email" 
                name="newEmail"
                value={user.Email}
                placeholder={user.Email}
                //value={Email}
                aria-describedby="inputGroupPrepend"
                onChange={this.inputChange}  
              />
              </InputGroup>
            </Form.Group>
            
            <Form.Group as={Col} controlId="validationCustom01" style={{ marginTop: '2rem', display: 'inline-flex'}}>
              <Form.Label className="float-left mr-4">Birthday</Form.Label>
              <InputGroup id="birthday" hasValidation>
              <Form.Control
                type="date"
                name="newBirthday"
                //value={user.Birthday}
                //value={Birthday}
                aria-describedby="inputGroupPrepend"
                onChange={e => setBirthday(e.target.value)}
                //placeholder={user.Birthday}
                />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
            <Button variant="dark mt-5 h-5" type="submit" onClick={props.handleEdit}>Update Account</Button><br/><br/>
            <button className="mt-4" onClick={() => { this.removeUser() }}>Delete Account</button>
            <Form.Text style={{ marginTop:'rem'}}>
                WARNING: This action cannot be reversed!
              </Form.Text>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>

    ))
  )}

ProfileEdit.propTypes = {
  username: PropTypes.shape({
    FavoriteMovies: PropTypes.array,    
    Username: PropTypes.string,
    Password: PropTypes.string,
    Email: PropTypes.string,
    Birthday: PropTypes.instanceOf(Date)
  }),
  onClick: PropTypes.func
};
