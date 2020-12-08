import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import '../css/Contact.css';


export default function Contact() {

    return (
        <div>
            <Navegation></Navegation>
            <div className="container mt-1">
                
            <div className="navbar2"> <p><i className="fas fa-home"></i> {'>'} Contactos</p></div>
        
            <div className="panel-header "><h5><b>Acerca de Nosotros </b></h5></div>

            <div className="row mt-4">
                   
                    <div className="col-sm-8"> 
                    <form >
                        <div className="form-group">
                        <label >Nombre y Apellido</label>
                        <input type="text" className="form-control" id="name" placeholder="Ingrese el nombre y Apellido" />
                        </div>
                        <div className="form-group">
                        <label >Correo electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingrese su Correo"/>
                        </div>

                        <div className="form-group">
                        <label >Celular</label>
                        <input type="number" className="form-control" id="phone"/>
                        </div>
                        <div className="form-group">
                        <label >Mensaje</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn-card-two">Enviar</button>
                    </form>
                    </div>

                    <div className="col-sm-4">
                        <h4>Información de Contacto</h4>
                    <p><i class="fas fa-phone"></i><b> Teléfono:</b> (02) 3411730</p>

                    <p><i class="fab fa-whatsapp"></i><b> Whatsapp:</b> 0995154854</p>

                    <hr></hr>
                    <h4>Horario de Atención</h4>
                    
                    <p><i class="fas fa-clock"></i> Lunes a Viernes de 8H00 a 16H30, Sabados de 9H00 a 14H00.</p>

                    <hr></hr>
                    <h4>Donde nos ubicamos</h4>
                    <p><i class="fas fa-map-marker-alt"></i><b> Dirección:</b> De las Madreselvas N48-50 y De las Hortencias, Sector El Inca.</p>
                                 
                    </div>
                    
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    )
}
