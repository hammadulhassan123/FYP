import React from 'react'

export default function Navbar() {
  return (
  <div>
<nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"greenyellow"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>About Us</a>
        </li>
      </ul>
      
    </div>
  

  </div>
</nav>
   


  </div>
  )
}
