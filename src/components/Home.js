import React from 'react';
import {Link} from 'react-router-dom';

import Navegation from '../components/Navigation';
import Slide from '../components/Slide';
import Footer from '../components/Footer';

import '../css/Home.css';
import tomato from '../img/tomato.jpeg';

export default function Home() {

    return (

        <div>
             <div className="menu-btn">
                     <i className="fas fa-bars"></i>
             </div>
                 <Navegation></Navegation>
             <div className="container">
                
                 <header className="showcase">
                     <Slide></Slide>
                     
                 </header>

                 <div className="news-cards2">
                         <div>
                             <i className="fas fa-truck"></i>
                             <h3>ENVÍO URGENTE</h3>
                             <p> Solo envíos a peninsula</p> 
                         </div>

                         <div>
                             <i className="fas fa-leaf"></i>
                             <h3>100% FRESCO</h3>
                             <p>Frescura y calidad garantizada</p> 
                         </div>
                         <div>
                             <i className="fas fa-phone"></i>
                             <h3> 0991234567 / 0915432765</h3>
                             <p> ¿Alguna Duda? Contáctenos</p> 
                         </div>

                     </div>
                     <br/>
                     <h2><i className="fas fa-apple-alt"></i> Nuestros Productos</h2>
                     <div className="news-cards">

                         <div>
                             <img src={tomato} alt="Img 1" />
                             <h4>Tomate.</h4>
                             <p>$ 2.09</p>
                             <Link to="/" >Mas info. <i className="fas fa-angle-double-right"></i></Link>
                         </div>

                         <div>
                             <img src={tomato} alt="Img 1" />
                             <h4>Tomate.</h4>
                             <p>$ 2.09</p>
                             <Link to="/" >Mas info. <i className="fas fa-angle-double-right"></i></Link>
                         </div>

                         <div>
                             <img src={tomato} alt="Img 1" />
                             <h4>Tomate.</h4>
                             <p>$ 2.09</p>
                             <Link to="/" >Mas info. <i className="fas fa-angle-double-right"></i></Link>
                         </div>

                         <div>
                             <img src={tomato} alt="Img 1" />
                             <h4>Tomate.</h4>
                                <p>$ 2.09</p>
                             <Link to="/" >Mas info. <i className="fas fa-angle-double-right"></i></Link>
                         </div>

                     </div>

                     <section className="cards-banner-two">
                         <div className="content">

                             <h2>¿Desea hacernos alguna consulta?</h2>
                             <p>Para mejorar nuestro servicio nos contactamos directamente con usted para cualquier información.</p>
                             <Link to="/contact" className="btn">Click Aqui <i className="fas fa-angle-double-right"></i> </Link>
                         </div>
                     </section>
             </div>
                 <Footer></Footer>
           
        </div>
    )
}
