import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./adminpanel.css";
import Appliances from './Appliances';
import User from './User';
import ApplianceTable from './ApplianceTable';

const AdminPanel = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col xs={12} md={2} className="sidebar">
          <ListGroup>
            <ListGroup.Item action className="sidebar-link" href="/AdminComponents/ApplianceTable">
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action className="sidebar-link" href="#users">
              Users
            </ListGroup.Item>
            <ListGroup.Item action className="sidebar-link" href="#Table">
              Appliance Table
            </ListGroup.Item>
            <ListGroup.Item action className="sidebar-link" href="#comments">
              Comments
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={12} md={10} className="main-content">
          <h1>Welcome to the Admin Panel</h1>
          <div className="hero-section">
            <img src="hero.png" alt="hero" className="hero-image"style={{width:" 1000px",height:"450px"}} />
          </div>
                     <ApplianceTable/>
                        <br />
                        <User/>
                        <br />
                        <Appliances/>   

        </Col>
      </Row>


    </Container>
    </>

  );
};

export default AdminPanel;
