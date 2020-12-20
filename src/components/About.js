import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import '../css/About.css';
import 'react-image-shadow/assets/index.css';

import planta3 from '../img/planta3.jpg';


export default function About() {
    return (
        <div>
        <Navegation/>
        <div className="about-container">
            <div className="panel-header"><p><i className="fas fa-home"></i> {'>'} ¿Quiénes Somos?</p>
            </div>
                <div className="about-content">
                
                <div className="about-gallery">
                    <div className="about-gallery-col" >
                    <h4 >¿Quienes Somos?</h4>
                        <a  href="img_5terre.jpg">
                        <img src={planta3} alt="Cinque Terre"/>
                        </a>
                        <div className="desc">
                        
                        <p className="about-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore iste, ab, facere repellat facilis illum neque repudiandae possimus quae ad at saepe dolor modi exercitationem? Earum consectetur nihil, itaque eius numquam veritatis sequi quaerat molestias animi voluptatum excepturi illum perferendis. Culpa eligendi facilis minus laboriosam, unde voluptatem cumque iste nulla.</p>
                        </div>
                    </div>

                    <div className="about-gallery-col">
                        <div className="desc">
                        <h4 >Historia.</h4>
                        <p className="about-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt labore modi voluptatum voluptates quisquam? Natus nesciunt nulla, asperiores non, veniam, reiciendis rerum placeat ex pariatur harum minima expedita sed modi nobis officiis tenetur. Quam maiores pariatur voluptatibus vitae, minima corrupti est. Quae vel odit laudantium, dolore animi aut. Distinctio, magni.</p>
                        <p className="about-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eum quos, labore nisi sit nemo suscipit consequuntur sunt impedit, doloribus tenetur architecto? Inventore provident quisquam libero laudantium, architecto at officia delectus voluptatum beatae facilis! Repellat autem laboriosam adipisci corporis accusantium culpa! Quas porro eos tenetur magnam nesciunt et inventore quaerat!</p>
                        <p className="about-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ex a, adipisci quod autem placeat voluptas asperiores in. Eligendi asperiores deleniti laborum corporis qui debitis!</p>
                        </div>
                    </div>

                </div>
                </div>  
        </div>
    <Footer></Footer>
    </div>
    )
}
