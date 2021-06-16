//Import React and useState hook
import React, { useState } from 'react';
import { LoginView } from '../login-view/login-view';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import FormFile from 'react-bootstrap/FormFile';
import { render } from 'react-dom';
import axios from 'axios';


//call useState method and set to empty string the represents values prior to login
export function ProfileEdit(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState(new Date());
  const [ user, setUser ] = useState(props.user);

  //Send request to server for auth
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    axios.post('https://myfavfilmz.herokuapp.com/users' + userID, {
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
      console.log('error updating user info')
    });
    props.handleEdit(username);
    const user = props.user;
  };

  
  return (

    [
      'Dark',
    ].map((variant, idx) => (
      <div class="profile-edit bg-dark" style={{ height: '130rem'}} /*key={user._id}*/>
        <div style={{ color: 'white', paddingTop: 15, paddingLeft: 15}}></div>
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
              <InputGroup className="mb-3" hasValidation>
                <Form.Control
                  type="text"
                  placeholder={user.Username}
                  aria-describedby="inputGroupPrepend"
                  required
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicPassword" style={{ marginTop: '2rem', paddingBottom: '0rem', display: 'inline-flex'}}>
              <Form.Label className="float-left mr-4">Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control 
                  style={{ width: '49rem'}}
                  required
                  type="password" 
                  placeholder="***********"
                  value={password}
                  aria-describedby="passwordHelpBlock"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Text style={{ marginLeft: '6rem', marginTop:'0rem'}}>
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or 
                emoji.
              </Form.Text>
            <Form.Group as={Col} controlId="formBasicEmail" style={{ marginTop: '2rem', display: 'inline-flex'}}>
              <Form.Label className="float-left">Email address</Form.Label>
              <InputGroup hasValidation>
              <Form.Control 
                style={{ width: '49rem'}}
                type="email" 
                placeholder={user.Email}
                value={email}
                aria-describedby="inputGroupPrepend"
                onChange={e => setEmail(e.target.value)}  
              />
              </InputGroup>
            </Form.Group>
            
            <Form.Group as={Col} controlId="validationCustom01" style={{ marginTop: '2rem', display: 'inline-flex'}}>
              <Form.Label className="float-left mr-4">Birthday</Form.Label>
              <InputGroup hasValidation>
              <Form.Control
                required
                type="date"
                value={birthday}
                aria-describedby="inputGroupPrepend"
                onChange={e => setBirthday(e.target.value)}
                placeholder={user.Birthday}
                />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
            <Button variant="dark mt-5 h-5" type="submit" onClick={handleSubmit}>Update Account</Button><br/><br/>
            <button className="mt-4" onClick={() => { this.deleteUser() }}>Delete Account</button>
            <Form.Text style={{ marginTop:'0rem'}}>
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
