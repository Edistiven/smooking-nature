import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../img/logo.png';
import '../css/Navigation.css';

export default function Navigation() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <div className="container">
                <Link className="navbar-brand" to="/smooking-nature/"> <img src={logo} className="logotipo" alt="logo"></img></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav navbar-right">
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
