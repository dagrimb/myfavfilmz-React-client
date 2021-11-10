//Import React and useState hook
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';

//call useState method and set to empty string the represents values prior to login
export function ProfileEdit(props) {
  const { updateUserInfo, removeUser, user} = props;
  const [ username, setUsername ] = useState(user.Username);
  
  console.log("Render ProfileEdit", username);

  return (
    [
      'Dark',
    ].map((variant, idx) => (
      <div className="profile-edit bg-dark" style={{ width: '100%', height: '80%'}} /*key={user._id}*/>
        <div style={{ color: 'white', paddingTop: 15, paddingLeft: 15}}>
        <Link to={`/users/${user.Username}`}>
            <Button className="m-5" style={{display: 'float-right'}} variant="primary"> Back to Your Profile</Button>
          </Link>
        </div>
        <Col className="bg-dark w-100 h-100" xs={12} sm={12} md={10} lg={10} xl={8}>
        <Card
          bg="primary" variant="toLowerCase()"
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ maxWidth: '95%', marginBottom: 5}}
          className="justify-content-center text-center mx-auto"
        >
        <Card.Body>
          <div className="text-align-center" >
            <h3>Update your account information</h3>
          </div>
          <Form.Text className="mb-4 mt-3 w-100">
            Please complete ALL fields, including whatever you would like to change, below.
          </Form.Text>
          <Form>
            <Form.Group as={Col} controlId="validationCustomUsername" style={{ marginTop: '3rem'}}>
              <Form.Label className="float-left mr-3">Username</Form.Label><br></br>
              <InputGroup className="mb-3" id="username" hasValidation>
                <Form.Control
                  type="text"
                  name="newUsername"
                  placeholder="Enter current or desired username"
                  aria-describedby="inputGroupPrepend"
                  //value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicPassword" style={{ marginTop: '2rem', paddingBottom: '0rem'}}>
              <Form.Label className="float-left mr-4">Password</Form.Label>
              <InputGroup id="password" hasValidation>
                <Form.Control 
                  style={{ width: '40rem'}}
                  type="password" 
                  name="newPassword"
                  //value={password}
                  placeholder="Enter current or desired password"
                  //value={password}
                  aria-describedby="passwordHelpBlock"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Text className="mx-auto" style={{ marginLeft: '6rem', marginTop:'0rem'}}>
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or 
                emoji.
              </Form.Text>
            <Form.Group as={Col} controlId="formBasicEmail" style={{ marginTop: '3rem' }}>
              <Form.Label className="float-left">Email address</Form.Label>
              <InputGroup id="email" hasValidation>
              <Form.Control 
                style={{ width: '40rem'}}
                type="email" 
                name="newEmail"
                //value={email}
                placeholder="Enter current or desired email address"
                //value={Email}
                aria-describedby="inputGroupPrepend"
                onChange={e => setEmail(e.target.value)}  
              />
              </InputGroup>
            </Form.Group>
            
            <Form.Group as={Col} controlId="validationCustom01" style={{ marginTop: '2rem' }}>
              <Form.Label className="float-left mr-4">Birthday</Form.Label>
              <InputGroup id="birthday" hasValidation>
              <Form.Control
                type="date"
                name="newBirthday"
                //value={user.Birthday}
                //value={birthday}
                aria-describedby="inputGroupPrepend"
                onChange={e => setBirthday(e.target.value)}
                />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
            <Button variant="dark mt-5 h-5" type="submit" onClick={updateUserInfo}>Update Account</Button><br/><br/>
            <button className="mt-4" onClick={removeUser}>Delete Account</button>
            <Form.Text style={{ marginTop:'rem'}}>
                WARNING: This action cannot be reversed!
              </Form.Text>
            </div>
          </Form>
        </Card.Body>
      </Card>
      </Col>
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