import React from 'react';
import '../css/Slide.css';
import natural from '../img/natural.png';

export default function Slide() {

  return (
    <div className="gallery">
      <div className="gallery-col" >
        <a  href="img_5terre.jpg">
          <img src={natural} alt="Cinque Terre"/>
        </a>
        <div className="desc">
          <h4 className="slide-title">Social</h4>
          <p className="slide-p">Follow our social media accounts for news, updates and events.</p>
          </div>
      </div>

      <div className="gallery-col">
        <a href="img_forest.jpg">
          <img src={natural} alt="Forest"/>
        </a>
        <div className="desc">
          <h4 className="slide-title">About</h4>
          <p className="slide-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sapiente!</p>
        </div>
      </div>

      <div className="gallery-col">
        <a  href="img_lights.jpg">
          <img src={natural} alt="Northern Lights" />
        </a>
        <div className="desc">
          <h4 className="slide-title">News</h4>
          <p className="slide-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>

      <div className="gallery-col">
        <a  href="img_mountains.jpg">
          <img src={natural} alt="Mountains"/>
        </a>
        <div className="desc">
          <h4 className="slide-title">Products</h4>
          <p className="slide-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
</div>
  )
}
