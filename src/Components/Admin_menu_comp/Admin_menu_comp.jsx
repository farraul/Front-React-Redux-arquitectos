import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { connect } from 'react-redux';





import { useNavigate } from 'react-router-dom';
//import { connect } from 'react-redux';
//import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile.svg';
import whats from '../../assets/images/whats.svg';
import phone from '../../assets/images/phone.svg';
import email from '../../assets/images/email.svg';
import buy from '../../assets/images/buy.svg';
import menu from '../../assets/images/menu.svg';




const Admin_menu_comp = (props) => {

    console.log("props",props)
    const history = useNavigate();

    const go_to_the_link = (url) => {
        console.log("history", url)
        history("/" + url);
    }


    const [timenow, settimenow] = useState([""]);
    let today;
    let Time;







    useEffect(() => {
        today = new Date();
        componentDidMount();
    });

    //crear hora para admin
    const componentDidMount = () => {
        Time = setInterval(() => {
            clearInterval(Time)
            // let lettimes = new Date().toDateString();
            let lettimes = new Date().toUTCString();
            console.log("funtion to time in admin_menu");
            settimenow(lettimes);
        }, 1000

        )
    };


    //////////////código desplegable///////////////////////////////////////////
    /*Cuando se hace click en el botón, muestra el submenu*/
    function myFunction() {
        //Añade una clase al elemento que tenga el id myDropdown
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //Cierra el submenu si se clica fuera
    window.onclick = function (event) {
        if (!event.target.matches('.drop-button')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                //Busca dentro de drop-content los elementos con la clase show
                if (openDropdown.classList.contains('show')) {
                    //elimina la clase show de los elementos dentro de drop-content
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    //////////////////fin código desplegable//////////////////////////////////////////////////////////




    return (
        <div>
            <div className='admin-m-comp-section1'>
                <div className='admin-m-comp-iframe-info'>
                    <div className='admin-m-comp-data'>
                        {timenow}

                    </div>
                </div>

                <div className='admin-m-comp-data-right'>

                    <div className='admin-m-comp-menu-links'>
                        <div onClick={() => go_to_the_link("admin-home")} className='admin-m-comp-data-see-offert pointer' id='admin-m-comp-data-see-offert-menu'>
                            <img className="admin-m-face_icon" src={menu} alt="icon face" />

                            <p>Panel principal</p>
                        </div>
                        <div onClick={() => go_to_the_link("admin-offers")} className='admin-m-comp-data-see-offert pointer'  id='admin-m-comp-data-see-offert-offerts'>
                            <img className="admin-m-face_icon" src={buy} alt="icon face" />

                            <p>Ver ofertas</p>
                        </div>

                    </div>
                    <div onClick={() => go_to_the_link("admin-profile")} className='admin-m-icon-profile pointer'  id='admin-m-comp-data-see-offert-profile'>
                        <img className="admin-m-face_icon" src={profile} alt="icon face" />
                        <p className='admin-m-icon-profile-name '>{props.data_user?.user?.name}</p>
                    </div>

                </div>




            </div>


            <div className="dropdown">

                <div id="myDropdown" className="dropdown-content">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+34628086995">
                        <img className="admin-m-face_icon" src={whats} alt="icon face" />
                    </a>

                    <a target="_blank|_self|_parent|_top|framename" href="tel:+34628086995">
                        <img className="admin-m-face_icon" src={phone} alt="icon face" />
                    </a>
                    <a target="_blank" href="mailto:raulfarllobell@gmail.com">
                        <img className="admin-m-face_icon" src={email} alt="icon face" />
                    </a>
                </div>
                <button onClick={() => myFunction()} className="drop-button" id='phone-to-help'>
                    ☎
                </button>
            </div>



        </div>
    )

};




export default connect((state) => ({
    data_user: state.data_user,
}))(Admin_menu_comp);
