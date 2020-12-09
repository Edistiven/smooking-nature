import React from 'react';
import fruits from '../img/verduras.jpg'
import tomato from '../img/tomato.jpeg';
import showcase from '../img/showcase2.jpg';

import '../css/Slide.css';

export default function Slide() {

  return (

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		</ol>
  <div className="carousel-inner mt-8">
    <div className="carousel-item active">
		<img className="slide-img" src={fruits} alt="imagen1"></img>
			<div className="carousel-caption d-none d-md-block">
				<p><b>Variedad de Productos al mejor precio </b></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita?</p>
			</div> 
    </div>
    <div className="carousel-item">
	<img className="slide-img" src={tomato} alt="imagen2"></img>
            <div className="carousel-caption d-none d-md-block">
              <p><b>Variedad de Productos al mejor precio </b></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita?</p>
            </div>
    </div>
    <div className="carousel-item">
	<img className="slide-img" src={showcase} alt="imagen3"></img>
            <div className="carousel-caption d-none d-md-block">
              <p><b>Variedad de Productos al mejor precio </b></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita?</p>
            </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <i className="fas fa-chevron-left"></i>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <i className="fas fa-chevron-right"></i>
  </a>
</div>

  )
}
