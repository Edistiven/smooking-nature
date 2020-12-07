import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navigation() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <div className="container">
    <Link className="navbar-brand" to="/smooking-nature/">Inicio</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/smooking-nature/about">¿QUIÉNES SOMOS?</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/smooking-nature/contact">CONTACTOS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/smooking-nature/product">PRODUCTOS</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>



       
    )
}
