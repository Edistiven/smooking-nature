import React from 'react'
import '../css/Navigation.css'
import brand from '../img/brand.png';
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <nav className="nav-main">
                <img src={brand} alt="TechNews Logo" className="nav-brand"></img>
                <ul className="nav-menu show">

                    <li> 
                    <Link to="/smooking-nature/" >INICIO</Link>
                    </li>

                    <li>
                        <Link to="/smooking-nature/about" >¿QUIÉNES SOMOS?</Link>
                    </li>

                    <li>
                        <Link to="/smooking-nature/product" >PRODUCTOS</Link>
                    </li>

                    <li>
                        <Link to="/smooking-nature/contact" >CONTÁCTANOS</Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}
