import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footers from './Footers';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

class Login extends Component {
   
    constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    // Handle login here
  }



   handleSignup = (event) => {
    this.props.history.push("/signup");
    event.preventDefault();
      // Handle signup here
  }

  render() {
    return (
        <>
        
        <Container style={{marginTop:"50px", marginBottom:"50px"}}>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <h1>Login Page</h1>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} />
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} />
                </Form.Group>
                   <br />
                 
                <Button variant="outline-info" type="submit" onClick={this.handleLogin} >
                  Login
                </Button>
                <br/>
                <b>Don't have an Account ? </b><Button as={Link} to={"/signup"} variant="outline-primary" type="submit" onClick={this.handleSignup} style={{marginRight:"10px"}}>
                  Signup
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      <Footers/>
        </>
);
  }
}

export default Login;
