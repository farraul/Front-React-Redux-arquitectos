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
  console.log("adminnn:",props.data_user);

    return (
        <header>
            <div className='header-padding'>
                <div>
                    <img className="logo" src={logo} alt="logo"  onClick={()=>go_to_the_link("/")} /> 
                </div>
                <div className="header-menu">

                { props.data_user?.user[0]?.rol==null ? <div className="header-menu-links" onClick={()=>go_to_the_link("arquitectos")}>Arquitectos</div> :null}
                    { props.data_user?.user[0]?.rol=='arquitect' ? <div className="header-menu-links" onClick={()=>go_to_the_link("admin")}>Panel Administrador</div>: null}
                    { props.data_user?.user[0]?.rol=='super-admin' ?<div className="header-menu-links" onClick={()=>go_to_the_link("super-admin")}>Super Admin</div> : null}

                    { props.data_user?.user[0]?.rol!='arquitect' ?<div className="header-menu-links" onClick={()=>go_to_the_link("registro")}>Registrarme</div> : null}
                    { props.data_user?.user[0]?.rol!='arquitect'   ?<div className="header-menu-links" onClick={()=>go_to_the_link("login")}>Login</div> : null}

                    {/*<Boton destino="Registro" url="/register"/>*/}
                </div>
            </div>
        </header>
    )

};



export default connect((state) => ({
    data_user: state.data_user,
}))(Header);
