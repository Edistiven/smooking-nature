import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';

import fruits from '../img/verduras.jpg'
import tomato from '../img/tomato.jpeg';
import showcase from '../img/showcase2.jpg';

import '../css/Slide.css';

export default function Slide() {

  return (
    
       <Slider className="slider-nav" activeIndex={0} hasBullets >
				 <img id="slide-img" src={fruits} alt="imagen1"></img> 
				 <img  id="slide-img" className="slide-img" src={tomato} alt="imagen2"></img>
				 <img id="slide-img" className="slide-img" src={showcase} alt="imagen3"></img>
		</Slider>
    
  )
}
