import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
// import tomato from '../img/tomato.jpeg';
import '../css/Product.css';

export default function Product() {
    return (
        <div>
            <Navegation></Navegation>
            <div className="container mt-2"> 
            <div className="panel-header"><p><i className="fas fa-archive"></i> {'>'} Productos</p></div>

            <hr/>
                <div className="row">

                {/* <div className="col-md-3">
                    <div className="panel">   
                            <b>CATEGORIAS</b> <a className="product-link" data-toggle="collapse" data-target="#demo"> <i className="fas fa-plus-circle"></i></a> 
                            <div id="demo" className="collapse">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ad.</p>
                        </div>
                    </div>
                </div>

                    <div className="col-md-3">
                        <div className="thumbnail">
                        <a href={tomato} data-toggle="modal" alt="img3" data-target="#exampleModalCenter">
                            <img src={tomato} alt="Lights" className="img-product" />
                            
                        </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="thumbnail">
                        <a href={tomato} data-toggle="modal" alt="img1" data-target="#exampleModalCenter">
                            <img src={tomato} alt="Nature"  className="img-product"/>
                        </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="thumbnail">
                        <a href={tomato} data-toggle="modal" alt="img2" data-target="#exampleModalCenter">
                            <img src={tomato} alt="example"  className="img-product" />
                        </a>
                        </div>
                    </div>*/}
                </div> 


                <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
     
            </div>

            <Footer></Footer>
            </div> 
       
    )
}
