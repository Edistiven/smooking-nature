import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import '../css/Contact.css';

import social from '../img/social-media.jpg';

export default function Contact() {

    return (
        <div>
            <Navegation></Navegation>
            <div className="contact-container">
                <div className="panel-header"><p><i className="fas fa-home"></i> {'>'} Contactos</p></div>
    
            <div className="contact-content">
                    <div className="contact-gallery">
                        <div className="contact-gallery-col"> 
                        <h4>Contactos</h4>
                            <p>Asegurate de seguirnos en nuestras redes sociales para no perderte ningun contenido que publicamos <b>#smooking-nature</b>.</p>
                            <p>Siguenos a traves de nuestro <b>INSTAGRAM </b>
                                <a type="submit" href="https://www.instagram.com/edistiven1/" target="_blank">Clic Aqui.</a></p>
                        
                            <p>Si tienes alguna pregunta puedes contactarte directamente con nosotros a traves de nuestro <b>WHATSAPP</b> dando <a href="https://api.whatsapp.com/send?phone=593998187445&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20." rel="noopener noreferrer" target="_blank">Clic Aqui.</a>
                            
                            </p>

                            <img src={social} alt="redes-sociales" className="redes-sociales"></img>
                        </div>
                </div>   
            </div>
            <br/>
        </div>
            
            <Footer></Footer>
        </div>
    )
}
