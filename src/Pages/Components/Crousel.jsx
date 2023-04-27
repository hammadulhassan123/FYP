import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class Crousel extends Component {
  render() {
    return (
      <div>
      {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="2.png" className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </div>
  </div>
  <div className="carousel-item">
    <img src="1.png" className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
    </div>
  </div>
  <div className="carousel-item">
    <img src="3.png" className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
    </div>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>       */}
    <Carousel interval={500}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="2.png"
          alt="First slide"
          style={{maxHeight:"500px"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="1.png"
          alt="Second slide"
          style={{maxHeight:"500px"}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.png"
          alt="Third slide"
          style={{maxHeight:"500px"}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>
    )
  }
}
