import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';



import { useNavigate } from 'react-router-dom';
//import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
import face_icon from '../../assets/images/face-icon.jpg';




const Admin_menu_comp = () => {


    const [time, settime] = useState();
    let today;



    useEffect(() => {
        today = new Date();
        get_time();
    });

    const get_time = () => {
        //settime(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
        settime(Date().toLocaleString());
    };



    return (
        <div>
            <div className='admin-m-comp-section1'>
                <div className='admin-m-comp-iframe-info'>
                    <div className='admin-m-comp-data'>
                        {time}
                    </div>
                </div>
                <div className='admin-m-comp-data-see-offert'>
                Ver ofertas
                </div>
                <div className='admin-m-icon-profile'>
                    <img className="admin-m-face_icon" src={face_icon} alt="icon face" />
                    <p className='admin-m-icon-profile-name'>Raul</p>
                </div>

            </div>
        </div>
    )

};


export default Admin_menu_comp;