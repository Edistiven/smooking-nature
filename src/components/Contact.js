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
                            <form >
                                <h4>Formulario de Contacto</h4>
                                <div className="form-group">
                                <label >Nombres y Apellidos</label>
                                <input className="form-control" type="text"  id="name" placeholder="Ingrese el nombre y Apellido" />
                                </div>
                                <div className="form-group">
                                <label >Correo electrónico</label>
                                <input className="form-control" type="email" id="email" placeholder="Ingrese su Correo"/>
                                </div>

                                <div className="form-group">
                                <label >Celular</label>
                                <input className="form-control" type="number" id="phone"/>
                                </div>
                                <div className="form-group">
                                <label >Mensaje</label>
                                <textarea className="form-control"  id="message" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn-card-two">Enviar</button>
                            </form>
                        </div>
                    

                            <div className="contact-gallery-col"> 
                                <h4>Información de Contacto</h4>
                            <p><i className="fas fa-phone"></i><b> Teléfono:</b> (02) 3411730</p>

                            <p><i className="fab fa-whatsapp"></i><b> Whatsapp:</b> 0995154854</p>

                            <hr></hr>
                            <h4>Horario de Atención</h4>
                            
                            <p><i className="fas fa-clock"></i> Lunes a Viernes de 8H00 a 16H30, Sabados de 9H00 a 14H00.</p>

                            <hr></hr>
                            <h4>Donde nos ubicamos</h4>
                            <p><i className="fas fa-map-marker-alt"></i><b> Dirección:</b> De las Madreselvas N48-50 y De las Hortencias, Sector El Inca.</p>          
                                        
                                <iframe title="Contact Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8024460604784!2d-78.49910578601666!3d-0.1616248998820705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59ab8b2baefef%3A0xc3968ebe435c5e8c!2sCentro%20Comercial%20El%20Bosque!5e0!3m2!1ses!2sus!4v1607635263767!5m2!1ses!2sus"></iframe>          
                            </div>  

                </div>   
            </div>
            <br/>
        </div>
            
            <Footer></Footer>
        </div>
    )
}
