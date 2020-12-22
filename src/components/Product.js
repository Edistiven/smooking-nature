import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import tomato from '../img/tomato.jpeg';
import '../css/Product.css';

export default function Product() {
    return (
        <div>
            <Navegation></Navegation>
            <div className="product-container"> 
            <div className="panel-header"><p><i className="fas fa-archive"></i> {'>'} Productos</p></div>
                <div className="product-content">
                    <h4>Nuestros Productos</h4>
                    <div className="product-gallery">
                    <div className="product-gallery-col">
                        <a data-toggle="modal" data-target=".bd-example-modal-lg"> 
                        <img src={tomato} alt="img1"></img>
                        <p>Tomate</p>
                        </a>
                    </div>
                    <div className="product-gallery-col"> 
                        <img src={tomato} alt="img1"></img>
                        <p>Tomate</p>
                
                    </div>
                    <div className="product-gallery-col"> 
                        <img src={tomato} alt="img1"></img>
                        <p>Tomate</p>
                
                    </div>
                    </div>
                    </div>
            </div>

            <div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Producto</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                    <img src={tomato} alt="img"></img>
                    </div>

                    <div>
                        <h4>Ejemplos</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid totam perferendis quos ut fugiat repellendus numquam, optio placeat? Id odio debitis natus ipsa maxime ut. Magni reiciendis et non assumenda iure nostrum vero veniam. Eligendi, laborum! Tempore accusantium consequuntur autem?</p>
                        <hr/>
                        <h4>Descripción</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime itaque doloremque eum ea corrupti qui quasi nisi dicta autem?</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn-card-two" data-dismiss="modal">Cerrar</button>
                   
                </div>
                </div>
            </div>
            </div>

            <Footer></Footer>
            </div> 
       
    )
}
