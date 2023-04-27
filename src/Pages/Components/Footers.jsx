import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default class Footers extends Component {
  render() {
    return (
      <footer className="text-white bg-dark ">
  <div className="container pt-5">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h5>Bill Reducers</h5>
        <p>Reducing Electricity Costs with Smart Scheduling and Renewable Energy.</p>
      </div>
      <div className="col-md-4 ">
        <h5>Follow Us</h5>
        <p>
          <a href="https://www.facebook.com"><FaFacebook size={30} className="ml-3"/></a>
          <a href="https://twitter.com"><FaTwitter size={30} className="mr-5"/></a>
          <a href="https://www.instagram.com"><FaInstagram size={30} className="mr-3"/></a>
          <a href="https://www.linkedin.com"><FaLinkedin size={30} className="mr-3"/></a>
          <a href="mailto:info@company.com"><FaEnvelope size={30} /></a>
        </p>
      </div>
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <p>
          NUML, H-9, ISL, Pakistan<br />
          info@company.com<br />
          (+92)123 4567890
        </p>
      </div>
    </div>
  </div>
  <div className="container-fluid text-center py-3">
    <p>&copy; {new Date().getFullYear} Bill Reducers</p>
  </div>
</footer>

    )
  }
}
