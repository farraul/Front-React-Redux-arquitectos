import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import brand1 from '../../assets/images/brand-1.png';
import brand2 from '../../assets/images/brand-2.png';
import brand4 from '../../assets/images/brand-4.png';
import brand5 from '../../assets/images/brand-5.png';



const Home = () => {
    const history = useNavigate();

    const go_to_the_link = (url) => {
        history(url);
    }

    return (
        <div className='home-container'>

            <div className='home-section-1'>
                <div className='align-center'>
                    <p className='home-title'>Encuentra a tu arquitecto</p>
                    <p className='home-section-1-n-1'>Los 3 arquitectos que más se ajusten a tu proyecto se pondrán en contacto contigo </p>
                </div>
                <div>
                    <div className='home-section-1-buttons'>
                        <div><button onClick={() => go_to_the_link("registro")} className='home-section-1-button' type="button">Empezar registro</button></div>
                        <div><button onClick={() => go_to_the_link("arquitectos")} className='home-section-1-button' type="button">Ver arquitectos</button></div>
                    </div>
                </div>
            </div>

            <div className='home-section-2'>
                <p className='home-brand-trust-us'>Marcas que confian en nosotros</p>
                <div className='home-s-2-brands'>
                    <div>
                        <img className="home-brands" src={brand1} alt="logo" />
                    </div>
                    <div>
                        <img className="home-brands" src={brand2} alt="logo" />
                    </div>
                    <div>
                        <img className="home-brands" src={brand4} alt="logo" />
                    </div>
                    <div>
                        <img className="home-brands" src={brand5} alt="logo" />
                    </div>
                </div>
            </div>

            <div></div>

            <div className='home-section-3'>
                <div className='home-section-3-iframe-images'>
                    <div className='home-section-3-div-title'>
                        <h3 className='home-section-3-title'>Últimos proyectos</h3>
                    </div>
                    <div className='home-section-3-images'>
                        <div id='home-section3-images-2'></div>
                        <div id='home-section3-images-1'></div>
                        <div id='home-section3-images-3'></div>
                        <div id='home-section3-images-4'></div>
                        <div id='home-section3-images-5'></div>
                    </div>

                </div>
            </div>

            <div className='home-section-4'>
                <div className='home-section-4-iframe-images'>
                    <p className='home-section-4-our-workers'>Una plataforma con los mejores profesionales</p>
                </div>

                <div className='home-section4-images'>
                    <div id='home-section4-images-1'></div>
                    <div id='home-section4-images-3'></div>
                    <div id='home-section4-images-4'></div>
                    <div id='home-section4-images-5'></div>
                </div>
            </div>
        </div>
    )
};

export default Home;