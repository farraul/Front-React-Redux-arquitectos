import React, { useState, useEffect } from 'react';
import face_archi from '../../assets/images/archi-1.png';
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
                                    <h4>Ramon Soriano</h4>
                                    <p>Con más de 10 años de experiencia, tanto de arquitecto, y supervisa la construcción de un edificio. La funcionalidad puede ser variada: vivienda residencial, edificio público, hotel, edificio de oficinas o comercial… La creatividad y el rigor son fundamentales para el ejercicio de esta profesión. contenedores, entre otros-; en este artículo veremos alguno de sus posibles usos de este particular filtro; recordemos que existe vários filtros que ya tocamos en una anterior entrada</p>
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
                                <p>Laboral</p>
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
                            <img className="archi-template-photo-img" src={face_archi} alt="face" />

                        </div>
                        <div className='archi-template-info'>
                            <div className='archi-template-info'>
                                <div className='archi-template-info-name'>
                                </div>
                                <div className='archi-template-info-descript'>
                                    <h4>Ramon Soriano</h4>
                                    <p>Con más de 10 años de experiencia, tanto de arquitecto, y supervisa la construcción de un edificio. La funcionalidad puede ser variada: vivienda residencial, edificio público, hotel, edificio de oficinas o comercial… La creatividad y el rigor son fundamentales para el ejercicio de esta profesión. contenedores, entre otros-; en este artículo veremos alguno de sus posibles usos de este particular filtro; recordemos que existe vários filtros que ya tocamos en una anterior entrada</p>
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
                                <p>Laboral</p>
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
                            <img className="archi-template-photo-img" src={face_archi} alt="face" />

                        </div>
                        <div className='archi-template-info'>
                            <div className='archi-template-info'>
                                <div className='archi-template-info-name'>
                                </div>
                                <div className='archi-template-info-descript'>
                                    <h4>Ramon Soriano</h4>
                                    <p>Con más de 10 años de experiencia, tanto de arquitecto, y supervisa la construcción de un edificio. La funcionalidad puede ser variada: vivienda residencial, edificio público, hotel, edificio de oficinas o comercial… La creatividad y el rigor son fundamentales para el ejercicio de esta profesión. contenedores, entre otros-; en este artículo veremos alguno de sus posibles usos de este particular filtro; recordemos que existe vários filtros que ya tocamos en una anterior entrada</p>
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
                                <p>Laboral</p>
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