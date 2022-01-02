import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';
//import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';




const Header = (props) => {

    const history = useNavigate();
 console.log("props",props);

    const go_to_the_link = (url) => {
        history(url);
    }
  

    return (
        <header>
            <div className='header-padding'>
                <div>
                    <img className="logo" src={logo} alt="logo"  onClick={()=>go_to_the_link("/")} /> 
                </div>
                <div className="header-menu">

                    <div className="header-menu-links" onClick={()=>go_to_the_link("arquitectos")}>Arquitectos</div>
                    { props.data_user?.user?.rol=="admin" ? <div className="header-menu-links" onClick={()=>go_to_the_link("admin")}>Admin Arquitecto</div>: null}
                    { props.data_user?.user?.rol=="super-admin" ? <div className="header-menu-links" onClick={()=>go_to_the_link("super-admin")}>Super Admin</div>: null}

                    <div className="header-menu-links" onClick={()=>go_to_the_link("registro")}>Registrarme</div>
                    <div className="header-menu-links" onClick={()=>go_to_the_link("login")}>Login</div>

                    {/*<Boton destino="Registro" url="/register"/>*/}
                </div>
            </div>
        </header>
    )

};


export default Header;