import React from 'react'
import Navegation from '../components/Navigation'
import tomato from '../img/tomato.jpeg';
import '../css/Product.css';

export default function Product() {
    return (
        <div>
            <Navegation></Navegation>
            <div className="container mt-1"> 
            <div className="navbar2"> <p><i className="fas fa-archive"></i> {'>'} Productos</p></div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail">
                        <a href={tomato} data-toggle="modal" data-target="#exampleModalCenter">
                            <img src={tomato} alt="Lights" className="img-product" />
                            <div className="caption">
                            <p>Lorem ipsum...</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                        <a href={tomato} data-toggle="modal" data-target="#exampleModalCenter">
                            <img src={tomato} alt="Nature"  className="img-product"/>
                            <div className="caption">
                            <p>Lorem ipsum...</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                        <a href={tomato} data-toggle="modal" data-target="#exampleModalCenter">
                            <img src={tomato} alt="Fjords"  className="img-product" />
                            <div className="caption">
                            <p>Lorem ipsum...</p>
                            </div>
                        </a>
                        </div>
                    </div>
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
            </div> 
       
    )
}
