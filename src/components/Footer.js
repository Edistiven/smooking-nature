import React from 'react'
import '../css/Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="footer-links">
                <div className="footer-container-page">
                    <ul className="footer-ul">
                        <li><h5 >ACERCA DE NOSOTROS</h5></li>
                        <li>
                            <h6> <i className="fas fa-map-marker-alt"></i> Ubicación </h6>
                        </li>
                        
                        <li>    
                            <h6> <i className="fas fa-phone"></i> (02) 3411234</h6>
                        </li>
                        <li>
                            
                            <h6> <i className="fas fa-phone"></i> 0995154854</h6>
                        </li>
                        <li>
                            
                            <h6> <i className="fas fa-envelope"></i> ejemplo@gmail.com</h6>
                        </li>
                        <li>
                            <h6> <i className="fas fa-globe"></i> www.smooking-nature.com</h6>
                        </li>
                    </ul>

                    <ul className="footer-ul">
                        <li> 
                            <h5>Title One </h5>
                        </li>
                        <li>
                            <h6>BlockChain</h6>
                        </li>
                        <li>
                            <h6>BlockChain</h6>
                        </li>
                        <li>
                            <h6>BlockChain</h6>
                        </li>
                        <li>
                            <h6>BlockChain</h6>
                        </li>

                    </ul>

                    <ul className="footer-ul">
                        <li> 
                            <h5>Redes Sociales </h5>
                        </li>
                        <li>
                            <h6>
                        <i className="fab fa-facebook-square"></i> Smooking Nature </h6>
                        </li>
                        <li>
                        <h6>
                        <i className="fab fa-youtube"></i> Smooking Nature </h6>
                        </li>
                        <li>
                        <h6>
                        <i className="fab fa-instagram"></i> Smooking Nature </h6>
                        </li>

                    </ul>
    
                </div>

            </div>

            <div className="footer-development">
                <h6>&copy; Smooking Footer - Todos los derechos Reservados. Desarrollo Web</h6>
            </div>
        </div>
    )
}
