import React from 'react'
import Navegation from '../components/Navigation'
import Footer from '../components/Footer'
import '../css/About.css';
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';
import tomato from '../img/tomato.jpeg';

export default function About() {
    return (
        <div>
            <Navegation></Navegation>

            <div className="container mt-4" >
                <div className="row">
                    <div className="col"> 
                        <div className="panel">
                        <div className="panel-heading"><h3>¿Quiénes somos? </h3></div>
                        <br/>
                        <ImageShadow src={tomato} shadowHover className="about-img" />
                        <br/>

                        <div className="panel-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maiores amet assumenda, repudiandae fuga, quaerat id laborum numquam repellendus officia perferendis doloremque quam corporis non perspiciatis eligendi? Sint quos amet maxime aliquam! Consequatur quidem recusandae amet eos non quibusdam architecto, rerum dolorem facere minima a sequi sapiente explicabo possimus vel ratione dicta expedita adipisci quisquam repellat. Rem soluta dignissimos nobis obcaecati veniam vitae iusto aperiam, voluptatibus, eum provident non sunt facilis doloremque tempore? Similique quas ipsam voluptates maiores deleniti, fuga ipsum laudantium sapiente repellendus nemo animi maxime quo quibusdam exercitationem? Quasi, eius. Quis repellendus pariatur quae, aliquam voluptatum expedita nobis.</div>
                        <div className="panel-heading"><h3>Acerca de Nosotros</h3></div>
                        <br/>
                        <ImageShadow src={tomato} shadowHover className="about-img" />
                        <br/>
                        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempore vitae fugit dolorum molestias culpa amet, atque dignissimos perspiciatis libero ad beatae minima vel ipsum iste. Ad magni rerum blanditiis voluptates. Aliquam cupiditate velit asperiores sapiente. Ab earum sequi odit delectus, voluptas placeat quisquam rerum voluptatibus aliquid tenetur accusamus, odio iure ipsam corrupti! Provident iure necessitatibus autem rerum nemo delectus facilis, minus veritatis odit, ex blanditiis aliquid iste voluptate laboriosam vel quas eaque ipsum, beatae sit ut. Pariatur aliquid nobis ullam, tenetur ut deserunt quibusdam enim quaerat consequatur, repellat accusamus at ipsam labore corporis sed rem culpa itaque consequuntur alias eaque unde! Minima eligendi rem corporis expedita, facere, facilis maxime cupiditate ut tempora fugit id, aut natus deleniti qui laudantium. Minus earum quia illo quam in dolorum nisi vel et, provident sequi, quae est fugiat obcaecati! Sint ipsa ut sit magnam sequi quam nostrum. Libero nihil quae veritatis ex nam voluptatem, quaerat voluptatibus suscipit omnis. Dicta praesentium quisquam architecto, corporis et vel harum nobis delectus quae ipsum tempora est expedita quo suscipit, numquam accusantium non maiores vitae temporibus soluta. Quisquam corporis quas exercitationem aperiam eum reprehenderit illum consequatur amet unde eius temporibus provident repellendus esse necessitatibus porro enim minus, voluptas molestiae ut vitae mollitia fugiat harum. Adipisci delectus minima voluptatum quisquam nulla autem ipsam ab maxime, explicabo rem soluta alias maiores aspernatur optio. Totam quisquam magni ex libero reiciendis rem beatae, facere aspernatur assumenda dolor ab blanditiis eveniet. Suscipit ipsa unde animi reprehenderit mollitia rem fugit aliquam, quo consequatur repellat corrupti assumenda nostrum accusantium aperiam facere, modi molestias a ipsam eum. Quaerat molestias facere velit, esse saepe soluta deleniti? Ratione in earum voluptatem recusandae placeat dolore cupiditate accusantium labore perspiciatis fugiat quia provident culpa eum quidem repellendus aliquid beatae magnam saepe, rem deserunt dolor! Deleniti dolorum nesciunt quaerat ipsa asperiores!</div>
                        </div>
                    </div>

                </div>
            </div>
            <br/>
            <Footer></Footer>
        </div>
    )
}
