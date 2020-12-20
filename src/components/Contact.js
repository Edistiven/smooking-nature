import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import '../css/Contact.css';

export default function Contact() {

    return (
        <div>
            <Navegation></Navegation>
            <div className="contact-container">
                <div className="panel-header"><p><i className="fas fa-home"></i> {'>'} Contactos</p></div>
    
            <div className="contact-content">
                    <div className="contact-gallery">
                        <div className="contact-gallery-col"> 
                        <h4>Redes Sociales</h4>
                            <p>Asegurate de seguirnos en nuestras redes sociales para no perderte ningun contenido que publicamos <b>#smooking-nature</b>.</p>
                            <p>Siguenos a traves de nuestro instagram dando clic aqui -> 
                                <button type="submit" className="btn-card-two">Follow</button>
                                </p>
                        </div>
                    

                            <div className="contact-gallery-col"> 
                                <h4>Información de Contacto</h4>
                            <p><i className="fas fa-phone"></i><b> Teléfono:</b> (02) 3411730</p>

                            <p><i className="fab fa-whatsapp"></i><b> Whatsapp:</b> 0995154854</p>

                            </div>  

                </div>   
            </div>
            <br/>
        </div>
            
            <Footer></Footer>
        </div>
    )
}
