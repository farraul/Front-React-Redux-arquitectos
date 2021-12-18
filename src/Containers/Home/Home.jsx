import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
                        <div><button className='home-section-1-button'type="button">Buscar Arquitecto</button></div>
                    </div>
                </div>




            </div>




        </div>
    )

};


export default Home;