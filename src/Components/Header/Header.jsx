import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { connect } from 'react-redux';
import logo from '../../images/logo.png';




const Header = () => {
    const history = useNavigate();
    const go_to_the_link = () => {
        history("/");
    }


    return (
        <div className="header">
            <div className='header-padding'>
                <div>
                    <img className="logo" src={logo} alt="logo"  onClick={()=>go_to_the_link()} />
                </div>
                <div className="">
                    Home

                </div>
            </div>
        </div>
    )

};


export default Header;