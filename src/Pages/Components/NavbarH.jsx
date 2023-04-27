import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Image} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import SignUp from './SignUp';
import LogIn from './LogIn';
import AdminPanel from './AdminComponents/admindashboard';

export default class NavbarH extends Component {
    render() {
        return (
          <Router>
<div style={{position:"relative"}}>
          {/* <Navbar bg='dark' variant={"dark"} expand="lg" >
              <Navbar.Brand  as={Link} to="/home" style={{ marginInline:"10px", marginLeft:"2px"}} >HEMS</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="mr-2 my-2 my-lg-0"
                  style={{ maxHeight: '90px' }}

                  navbarScroll
                      >
                <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                <Nav.Link  as={Link} to="/about">About</Nav.Link>
                <Nav.Link  as={Link} to="/contact">Contact</Nav.Link>
                <div className="mx-2 mt-1 ">
                  <Button as={Link} to="/signup" variant="outline-primary" size="sm" style={{ marginInline:"10px"}}>SignUp</Button>
                  <Button as={Link} to="/login" variant="outline-info" size="sm" >LogIn</Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}

<Navbar bg="dark" variant="dark" expand="lg" style={{paddingTop:"5px"}}>
  
      <Navbar.Brand as={Link} to="/home" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>
        <b>Home Energy Mangement App</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0 me-2"
          style={{ maxHeight: '90px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/home" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/adminpanel" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>
            Admin Panel
          </Nav.Link>
          <div className="ms-2 mt-1">
            <Button
              as={Link}
              to="/signup"
              variant="outline-primary"
              size="sm"
              className="me-2"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
            >
              SignUp
            </Button>
            <Button as={Link} to="/login" variant="outline-info" size="sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>
              LogIn
            </Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

{/* <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand as={Link} to='/home'>
        <img
          src=""
          alt='Logo'
          height='30'
          className='d-inline-block align-top'
        />
        {' HEMS'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav
          className='mr-auto my-2 my-lg-0'
          style={{ maxHeight: '90px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to='/home'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/contact'>
            Contact
          </Nav.Link>
        </Nav>
        <Nav className='my-2 my-lg-0'>
          <Button as={Link} to='/signup' variant='outline-primary' size='sm' className='me-2'>
            Sign Up
          </Button>
          <Button as={Link} to='/login' variant='outline-info' size='sm'>
            Log In
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
          </div>
          <div>
            <Routes>
              <Route path="/home/*" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp/>} /> 
              <Route path='/login' element={<LogIn/>}/>
              <Route path='/adminpanel' element={<AdminPanel/>}/>
            </Routes>
          </div>
        </Router>
        )
    }
}

// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,1,0" />
  {/* <Image src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,1,0" alt="Logo" style={{ height: "30px", marginRight: "10px" }} /> */}
            {/* <img src="hems logo.png" alt="Logo"  /> */}
            {/* <Navbar.Brand  as={Link} to="/" style={{ marginInline:"10px", marginLeft:"2px"}} >HEMS</Navbar.Brand> */}
