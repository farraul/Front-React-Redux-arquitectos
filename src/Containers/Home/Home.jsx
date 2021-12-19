import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import brand1 from '../../images/brand-1.png';
import brand2 from '../../images/brand-2.png';
import brand3 from '../../images/brand-3.png';
import brand4 from '../../images/brand-4.png';
import brand5 from '../../images/brand-5.png';
import face_icon from '../../images/face-icon.jpg';
//import { connect } from 'react-redux';


const Home = () => {

    return (
        <div>

            <div className='home-section-1'>
                <div>
                    <p className='home-title'>Una Plataforma para arquitectos</p>
                    <p className='home-section-1-n-1'>Nº 1 en España</p>
                </div>
                <div>
                    <div className='home-section-1-buttons'>
                        <div><button className='home-section-1-button' type="button">Pedir Presupuesto</button></div>
                        <div><button className='home-section-1-button' type="button">Buscar Arquitecto</button></div>
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

           
        </div>
    )
};

export default Home;