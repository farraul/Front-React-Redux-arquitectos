import React, { useState, useEffect } from 'react';
import face_archi from '../../assets/images/archi-1.png';
import face_archi_dos from '../../assets/images/architect_dos.png';
import face_archi_tres from '../../assets/images/architect_tres.png';
import { useNavigate } from 'react-router-dom';


const Architects = () => {

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ correo: '', clave: '' });

    const history = useNavigate();
    const go_to_the_link = (url) => {
        history("/" + url);
    }
  
    
    
    //Handler o manejador
    const manejadorInputs = (e) => {
        console.log("e: ", e);
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        /*console.log("e.target.name::: ", e.target.name)
        console.log("e.target.value::: ", e.target.value)*/
        console.log("credentials: ", credentials)
    }

    const go_to_login = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            /* let res = await axios.post("https://app-movies-mongoose.herokuapp.com/api/signin", body); */
            console.log("imprimir ", body);

            /* //Guardamos en REDUX
             let datos = res.data;
             
             props.dispatch({type:LOGIN,payload:datos});
            console.log("datos:",datos);
 
 
              setTimeout(() => {
                 history("/profile");
             }, 1000); */
        } catch (error) {
            setmsgError("Error al logearmeee");
        }


    }

    return (

        <div className="architects-section-1">

            {/*<div className='archi-menu'>
                <input className="archi-imput-search-city" type="text" name="architects"  title="architects" lenght="30" placeholder="Escrihbe ciudad" />
            </div> */}

            <div className='archi-show-archi-all'>


                <h2 className="architects-section-1-title">
                Los mejores profesionales a tu mano
                </h2>
                <p  className='architects-go-to-link' onClick={()=>go_to_the_link("registro-usuarios")}>Quiero que me contacten para mi proyecto</p>


                <div className='archi-template'>
                    <div className='archi-template-photo-info'>
                        <div className='archi-template-photo'>
                            <img className="archi-template-photo-img" src={face_archi} alt="face" />

                        </div>
                        <div className='archi-template-info'>
                            <div className='archi-template-info'>
                                <div className='archi-template-info-name'>
                                </div>
                                <div className='archi-template-info-descript'>
                                    <h4>Ramon </h4>
                                    <p>Los proyectos generados por el estudio asumen la definicción de “Arquitectura de Autor”, donde “la Arquitectura de Diseño” se desquita de lo superfluo y estilizado de las modas para convertirse en una “Arquitectura ecológica y eficiente”, y por tanto bien construida. Dentro de esta categoría de “Arquitectura de Autor” somos el estudio más competitivo, tanto en proyectos de obra nueva como de rehabilitación, teniendo gran experiencia en ambos campos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='archi-template-info-contact'>

                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p>Ciudad:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p>Valencia</p>
                            </div>
                        </div>

                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p>Especialidad:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p>Fincas</p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Web:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="https://raulfar.com/">Raulfar.com</a></p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Teléfono:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="tel:666777888">666777888</a></p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Email:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="tel:666777888">raulfar@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='archi-template'>
                    <div className='archi-template-photo-info'>
                        <div className='archi-template-photo'>
                            <img className="archi-template-photo-img" src={face_archi_tres} alt="face" />

                        </div>
                        <div className='archi-template-info'>
                            <div className='archi-template-info'>
                                <div className='archi-template-info-name'>
                                </div>
                                <div className='archi-template-info-descript'>
                                    <h4>Marisa</h4>
                                    <p>Trabajamos con un equipo de profesionales formado por delineantes y arquitectos técnicos. Nuestros clientes nos encomiendan sus ilusiones; una casa, una oficina, un restaurante, una tienda, una clínica… Y nuestra misión es materializar buenas ideas a la medida de las necesidades. Al realizarlo con absoluta pasión y cariño, las ilusiones las convertimos en realidad y conseguimos clientes, personas, totalmente satisfechas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='archi-template-info-contact'>

                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p>Ciudad:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p>Barcelona</p>
                            </div>
                        </div>

                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p>Especialidad:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p>Técnico</p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Web:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="https://raulfar.com/">Raulfar.com</a></p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Teléfono:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="tel:666777888">666777888</a></p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Email:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="tel:666777888">raulfar@gmail.com</a></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='archi-template'>
                    <div className='archi-template-photo-info'>
                        <div className='archi-template-photo'>
                            <img className="archi-template-photo-img" src={face_archi_dos} alt="face" />

                        </div>
                        <div className='archi-template-info'>
                            <div className='archi-template-info'>
                                <div className='archi-template-info-name'>
                                </div>
                                <div className='archi-template-info-descript'>
                                    <h4>Alberto</h4>
                                    <p>Creadores de ideas, constructores de sueños. Ese es el lema de Alberto Esteve desde que creamos nuestro estudio. Nuestro fin es hacer realidad ese proyecto que llevas en mente, y que el fin sea mucho mejor de lo que te habías imaginado, recorriendo juntos el camino para conseguirlo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='archi-template-info-contact'>

                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p>Ciudad:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p>Madrid</p>
                            </div>
                        </div>

                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p>Especialidad:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p>Casas</p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Web:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="https://raulfar.com/">Raulfar.com</a></p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Teléfono:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="tel:666777888">666777888</a></p>
                            </div>
                        </div>
                        <div className='archi-template-info-contact-field'>
                            <div className='archi-template-info-contact-field-inside-t'>
                                <p> Email:</p>
                            </div>
                            <div className='archi-template-info-contact-field-inside-i'>
                                <p><a target="_blank" href="tel:666777888">raulfar@gmail.com</a></p>
                            </div>
                        </div>

                    </div>
                </div>



            </div>





        </div>
    )
};

export default Architects;