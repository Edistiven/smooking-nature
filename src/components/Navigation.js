import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../img/logo2.png';
import '../css/Navigation.css';

export default function Navigation() {
    return (
    <nav >
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <ul>
              <li><Link to="/smooking-nature/" className="link">Inicio</Link></li>
              <li><Link to="/smooking-nature/about" className="link">Acerca</Link></li>
              <li><Link to="/smooking-nature/product" className="link">Productos</Link></li>
              <li><Link to="/smooking-nature/contact" className="link">Contactos</Link></li>
        </ul> 
    </nav>
       
    )
}
