import React from 'react';
import {Link} from 'react-router-dom';

import Navegation from '../components/Navigation';
import Slide from '../components/Slide';
import Footer from '../components/Footer';

import '../css/Home.css';
import banner from '../img/banner.jpg';

export default function Home() {

    return (
        <div>
            <Navegation/>
                <section className="sec1">
                    <div className="center">
                        <p>The Smooking Nature</p>
                    </div>
                </section>
            <div className="container-home">
                <header className="showcase">
                    <img src={banner} alt="banner"></img>
                </header>
                <hr/>

                <div className="news-cards2">
                    <div>
                        <h3>SMOOKING NATURE</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia rerum minus atque iste magnam labore? Veritatis, culpa mollitia! Aperiam dolores illo voluptatem beatae, nisi in repudiandae maiores. Reiciendis, dicta mollitia. Error itaque tenetur maxime corrupti sapiente amet optio nam, voluptas deleniti enim placeat dolorum. Delectus at ipsa natus, necessitatibus harum ullam atque enim fuga accusantium corporis praesentium. A nihil suscipit obcaecati id numquam nostrum soluta maiores alias optio quaerat explicabo eius totam nemo non nisi, eligendi voluptatem cupiditate harum ipsa mollitia. Accusamus cupiditate, molestiae ut eaque dicta nisi animi excepturi quod vero est. Doloribus consequatur aspernatur eos iusto dolorum?</p> 
                    </div>
                    <div className="card-right">
                        <img src={banner} alt="natural"></img>
                    </div>
                </div>
                <hr/>

                <Slide></Slide>
                     
                <hr/>
                <section className="cards-banner-two">
                    <div className="content">
                        <h2 className="content-title">¿Desea hacernos alguna consulta?</h2>
                        <p>Para mejorar nuestro servicio nos contactamos directamente con usted para cualquier información.</p>
                        <Link to="/smooking-nature/contact" className="btn-card-two">Click Aqui <i className="fas fa-angle-double-right"></i> </Link>
                    </div>
                </section>       
            </div>
                <Footer></Footer>           
        </div>
    )
}
