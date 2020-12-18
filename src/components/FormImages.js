import React from 'react'
import Navegation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FormImages() {

    return (
        <div>
            <Navegation/>
                <div className="container mt-3">
                    <h2>Subida de Imagenes</h2>
                    
                        {/* <form>
                            <div className="form-group">
                                <input type="file" 
                                className="form-control-file"
                                name="file" 
                                placeholder="File"
                                onChange={onFileChange}/>

                                <img className="img-fluid img-thumbnail image" src={pathImage} alt="image"></img>
                            </div>

                            <input type="text" 
                            placeholder="Ingrese el nombre" 
                            required 
                            name="name"
                            className="name mt-2"
                            onChange={(e) => setName(e.target.value)} />

                            <br/>

                            <button type="submit" className="btn-card-two" onClick={sendImg}> Guardar</button>
                        </form> */}

                </div>
            <Footer/>
            
        </div>
    )
}
