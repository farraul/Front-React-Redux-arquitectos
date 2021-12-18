import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
//import { connect } from 'react-redux';
import logo from '../../images/logo.png';




const Header = () => {

    const history = useNavigate();


    const go_to_the_link = (url) => {
        history(url);
    }
  

    return (
        <div className="header">
            <div className='header-padding'>
                <div>
                    <img className="logo" src={logo} alt="logo"  onClick={()=>go_to_the_link("/")} /> 
                </div>
                <div className="">
                    
                    <div className="designBoton" onClick={()=>go_to_the_link("login")}>Login</div>

                    {/*<Boton destino="Registro" url="/register"/>*/}
                </div>
            </div>
        </div>
    )

};


export default Header;