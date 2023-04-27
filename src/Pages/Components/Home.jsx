import React, { Component } from 'react'
import Carousels from './Crousel';
import Cards from './Cards';
import Footers from './Footers';
import { Router } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousels/>
        <Cards/>
        <Footers/>
      </div>
    )
  }
}
