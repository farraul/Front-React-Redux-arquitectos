import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import person from '../../assets/images/person.svg';
import bag from '../../assets/images/bag.svg';


const Registration = () => {
    const history = useNavigate();

    const go_to_the_link = (url) => {
        history("/" + url);
    }
  
    return (

        <div className="registration-section-1">
            <div>
                <div className='registration-section-3'>
                    <div className='registration-section3-form-width'>
                        <p className='registration-ask-3-architects'>Registrate y disfruta</p>
                        <div className="registration-form-fields-div">
                            <div className='registration-form-full-w'>
                                <h4 className='registration-section3-h4'>Selecciona una opción:</h4>
                                <div className='registration-input arquitect'>
                                    <div className='registration-iframe-onclick' onClick={()=>go_to_the_link("registro-usuarios")}>
                                        <div>
                                            <p className='p-face-icon'>
                                                <img className="face_icon" src={person} alt="icon face" />
                                            </p>
                                        </div>
                                        <div className='registration-section3-radio-text'>
                                            <label htmlFor="usuario">Busco un Arquitecto</label>
                                        </div>
                                    </div>

                                    <div className='registration-iframe-onclick' onClick={()=>go_to_the_link("registro-arquitectos")}>
                                        <div>
                                            <p className='p-face-icon'>
                                                <img className="face_icon" src={bag} alt="icon face" />
                                            </p>
                                        </div>
                                        <div className='registration-section3-radio-text'>
                                            <label htmlFor="arquitecto">Soy Arquitecto</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;