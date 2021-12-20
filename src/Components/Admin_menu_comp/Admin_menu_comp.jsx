import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';




import { useNavigate } from 'react-router-dom';
//import { connect } from 'react-redux';
//import logo from '../../assets/images/logo.png';
import face_icon from '../../assets/images/face-icon.jpg';
import whats from '../../assets/images/whats.svg';
import phone from '../../assets/images/phone.svg';
import email from '../../assets/images/email.svg';





const Admin_menu_comp = () => {

    const history = useNavigate();
    
    const go_to_the_link = (url) => {
        console.log("history", url)
        history("/"+url);
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
            console.log("hola");
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

                <div className='admin-m-comp-dropdown'>


                </div>
                <div  onClick={()=>go_to_the_link("admin-home")} className='admin-m-comp-data-see-offert'>
                    Home
                </div>
                <div  onClick={()=>go_to_the_link("admin-offers")} className='admin-m-comp-data-see-offert'>
                    Ver ofertas
                </div>
                <div className='admin-m-icon-profile'>
                    <img className="admin-m-face_icon" src={face_icon} alt="icon face" />
                    <p className='admin-m-icon-profile-name'>Raul</p>
                </div>






            </div>


            <div className="dropdown">

                <div id="myDropdown" className="dropdown-content">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+34628086995">
                        <img className="admin-m-face_icon" src={whats} alt="icon face" />
                    </a>

                    <a target="_blank|_self|_parent|_top|framename" href="+34628086995">
                        <img className="admin-m-face_icon" src={phone} alt="icon face" />
                    </a>
                    <a  target="_blank" href="mailto:raulfarllobell@gmail.com">
                        <img className="admin-m-face_icon" src={email} alt="icon face" />
                    </a>
                </div>
                <button onClick={() => myFunction()} className="drop-button">
                ☎ 
                </button>
            </div>



        </div>
    )

};


export default Admin_menu_comp;