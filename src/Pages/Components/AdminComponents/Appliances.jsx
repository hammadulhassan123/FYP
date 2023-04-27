import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Appliances = () => {
  const [appliance, setAppliance] = useState({
    id: '',
    name: '',
    category: '',
    consumptionRate: '',
    watt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppliance((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appliance);
    // add code here to submit the form data
  };

  return (
    <>
    <Container>
      <h1>Appliances</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formBasicId">
              <Form.Label>Appliance Id</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={appliance.id}
                onChange={handleChange}
                placeholder="Enter Appliance Id"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Appliance Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={appliance.name}
                onChange={handleChange}
                placeholder="Enter Appliance Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCategory">
              <Form.Label>Appliance Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={appliance.category}
                onChange={handleChange}
                placeholder="Enter Appliance Category"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formBasicConsumptionRate">
              <Form.Label>Appliance Consumption Rate</Form.Label>
              <Form.Control
                type="text"
                name="consumptionRate"
                value={appliance.consumptionRate}
                onChange={handleChange}
                placeholder="Enter Appliance Consumption Rate"
              />
            </Form.Group>

            <Form.Group controlId="formBasicWatt">
              <Form.Label>Appliance Watt</Form.Label>
              <Form.Control
                type="text"
                name="watt"
                value={appliance.watt}
                onChange={handleChange}
                placeholder="Enter Appliance Watt"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="outline-success" type="submit" size="sm" style={{marginTop:"5px"}}>
          Submit
        </Button>
      </Form>
    </Container>

    
    </>
  );
};

export default Appliances;
