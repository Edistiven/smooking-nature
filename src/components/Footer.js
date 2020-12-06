import React from 'react'
import '../css/Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="footer-links">
                <div className="footer-container">
                    <ul>
                        <li><h2>ACERCA DE NOSOTROS</h2></li>
                        <li>
                            <h3> <i className="fas fa-map-marker-alt"></i> Ubicación </h3>
                        </li>
                        
                        <li>    
                            <h3> <i className="fas fa-phone"></i> (02) 3411234</h3>
                        </li>
                        <li>
                            
                            <h3> <i className="fas fa-phone"></i> 0995154854</h3>
                        </li>
                        <li>
                            
                            <h3> <i className="fas fa-envelope"></i> ejemplo@gmail.com</h3>
                        </li>
                        <li>
                            
                            <h3> <i className="fas fa-globe"></i> www.smooking-nature.com</h3>
                        </li>
                    </ul>

                    
                    <ul>
                        <li> 
                            <h2>Title One </h2>
                        </li>
                        <li>
                            <h3>BlockChain</h3>
                        </li>
                        <li>
                            <h3>BlockChain</h3>
                        </li>
                        <li>
                            <h3>BlockChain</h3>
                        </li>
                        <li>
                            <h3>BlockChain</h3>
                        </li>

                    </ul>

                    <ul>
                        <li> 
                            <h2>Redes Sociales </h2>
                        </li>
                        <li>
                            <h3>
                        <i className="fab fa-facebook-square"></i> Smooking Nature </h3>
                        </li>
                        <li>
                        <h3>
                        <i className="fab fa-youtube"></i> Smooking Nature </h3>
                        </li>
                        <li>
                        <h3>
                        <i className="fab fa-instagram"></i> Smooking Nature </h3>
                        </li>
                      

                    </ul>
    
                </div>

            </div>

            <div className="footer">
                <h4>&copy; Smooking Footer - Todos los derechos Reservados. Desarrollo Web</h4>
            </div>
        </div>
    )
}
