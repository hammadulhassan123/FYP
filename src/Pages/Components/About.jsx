import React, { Component } from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap';
import Footers from './Footers';
export class About extends Component {
  render() {
    return (
      <div>
     <div className="container my-4">
  <div className="row featurette d-flex justify-content-center align-items-center border border-info-subtle">
    <div className="col-md-7">
      <h2 className="featurette-heading">Web App and Mobile App. <span className="text-muted">It’ll blow your mind.</span></h2>
      <p className="lead">Get peace of mind and control your home from anywhere with our Smart Web App and Mobile App.</p>
    </div>
    <div className="col-md-5">
      <img className="img-fluid" src="SmartHome.jpeg" alt="" />
    </div>
  </div>
  <div className="row featurette d-flex justify-content-center align-items-center border border-info-subtle">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading">We started project in DEC,2022 <span className="text-muted">It’ll bring innovation.</span></h2>
      <p className="lead">A smart home is a residence equipped with devices that can be controlled remotely or via automated systems, making it more convenient, efficient, and secure for occupants.</p>
    </div>
    <div className="col-md-5 order-md-1">
      <img className="img-fluid" src="solarpanel.png" alt="" />
    </div>
  </div>
  <div className="row featurette d-flex justify-content-center align-items-center border border-info-subtle">
    <div className="col-md-7">
      <h2 className="featurette-heading">Solar Inverter <span className="text-muted">Switch to solar power with our high-quality Solar Inverter.</span></h2>
      <p className="lead">Harness the power of the sun with our advanced Solar Inverter.</p>
    </div>
    <div className="col-md-5">
      <img className="img-fluid" src="inverter.jpeg" alt="" />
    </div>
  </div>
</div>

        <Footers/>
      </div>
    )
  }
}

export default About