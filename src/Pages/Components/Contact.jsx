import React, { Component } from 'react'
import Footers from './Footers'

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
        <h2>Contact Us</h2>
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@email.com" />
            </div>
           
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Tell us about yourself</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea2">Elaborate Your Concern</label>
                <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>
            <br />
            <button className="btn btn-outline-success">Submit</button>
        </form>
        </div>
        <Footers/>
      </div>
    )
  }
}

export default Contact