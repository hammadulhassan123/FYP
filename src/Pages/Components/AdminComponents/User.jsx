import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const User = () => {
const [user, setUser] = useState({
id: '',
name: '',
password: '',
confirmPassword: '',
location: '',
rights: '',
status: 'active',
});

const handleChange = (e) => {
const { name, value } = e.target;
setUser((prevState) => ({ ...prevState, [name]: value }));
};

const handleSubmit = (e) => {
e.preventDefault();
console.log(user);
// add code here to submit the form data
};

return (
   <Container >
        <h1>Create User</h1>
        <Form onSubmit={handleSubmit}>
        <Row>
        <Col md={6}>
        <Form.Group controlId="formBasicId">
        <Form.Label>Id</Form.Label>
        <Form.Control
        type="text"
        name="id"
        value={user.id}
        onChange={handleChange}
        placeholder="Enter Id"
        />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </Form.Group>
      </Col>

      <Col md={6}>
        <Form.Group controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
            placeholder="Enter Location"
          />
        </Form.Group>

        <Form.Group controlId="formBasicRights">
          <Form.Label>Rights</Form.Label>
          <Form.Control
            type="text"
            name="rights"
            value={user.rights}
            onChange={handleChange}
            placeholder="Enter Rights"
          />
        </Form.Group>

        <Form.Group controlId="formBasicStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            name="status"
            value={user.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>

    <Button variant="outline-success" type="submit" size="sm" style={{marginTop:"5px"}}>
      Submit
    </Button>
  </Form>
</Container>
);
};

export default User;