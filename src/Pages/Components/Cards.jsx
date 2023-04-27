import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div className='m-5'>
 <div className="row d-flex">
    <div className="col-sm-6 mb-2">
    <div className="card border border-primary rounded">
      <div className="card-body">
      <img className='img-fluid' src='solar inverter and solar panel.png' height={200} width={250} alt='...'/>
        <h3 className="card-title">Solar Inverter</h3>
        <p className="card-text">Monitor, manage and optimize your solar energy production with ease using inverter available</p>
        <a href='/about' className="btn btn-success">More Details</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-2">
    <div className="card border border-primary rounded">
      <div className="card-body">
      <img className='img-fluid' src='solarpanel.png' height={200} width={250} alt='...'/>
        <h3 className="card-title">Solar Panel</h3>
        <p className="card-text">Join the green revolution and save money on your energy bills with our solar panel solutions.</p>
        <a href="/about" className="btn btn-success">More Details</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-2">
    <div className="card">
      <div className="card-body border border-primary rounded">
      <img className='img-fluid' src='AboutUs.png' height={200} width={250} alt='...'/>
        <h3 className="card-title">About Us</h3>
        <p className="card-text">Discover our story and learn how we're changing the world with innovative solutions .</p>
        <a href="/about" className="btn btn-success">Discover Us</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-2">
    <div className="card">
      <div className="card-body border border-primary rounded">
      <img className='img-fluid' src='ContactUs.jpeg' height={200} width={250} alt='...'/>
        <h3 className="card-title">Contact Us</h3>
        <p className="card-text">We're here to help. Get in touch with us for any questions, or concerns you may have.</p>
        <a href="/contact" className="btn btn-success">Get in Touch</a>
      </div>
    </div>
  </div>
 
</div>

    </div>
    )
  }
}

