import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../../Components/Admin_menu_comp/Admin_menu_comp';
import max from '../../../assets/images/max.png'
import profile from '../../../assets/images/profile.svg';








const Admin_home = () => {

    //Hooks

    const help = async () => {
        setTimeout(() => {
            let element = document.getElementById("help-start");
            let element_two = document.getElementById("chat-one");
            let element_three = document.getElementById("chat-tour");
            element.classList.add("chat-hide");
            element_two.classList.add("chat-see");
            element_three.classList.add("chat-block");



        }, 500);



        setTimeout(() => {
            let element = document.getElementById("chat-one");
            element.classList.remove("chat-see");

            let element_two = document.getElementById("chat-two");
            element_two.classList.add("chat-see");
        }, 3500);

        setTimeout(() => {
            let element = document.getElementById("chat-two");
            element.classList.remove("chat-see");

            let element_two = document.getElementById("chat-three");
            element_two.classList.add("chat-see");

            let element_three = document.getElementById("admin-m-comp-data-see-offert-profile");

            setTimeout(() => {
                element_three.classList.add("underline_menu");
            }, 5000);
        }, 8000);
    }








    return (

        <div className="">
            <div className="admin-h-section-1">
                <div>
                    <Admin_menu_comp />
                </div>


                <div className='admin-h-section-2'>
                    <div>
                        <h1>Bienvenido al Panel de admin</h1>
                    </div>

                    <div className='chat' id='chat-tour'>
                        <div onClick={() => help()} className="help" id="help-start" >Iniciar Tour</div>

                        <div className='chat-conversation-one chat-hide' id='chat-one'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>Hola soy Max,</p>
                                    <p>Quiero darte la bienvenida a Arquitect...</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-conversation-one chat-hide' id='chat-two'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>A continuación te presentaré todas las opciones que tienes, empezamos...</p>
                                
                                </div>
                            </div>
                        </div>
                        <div className='chat-conversation-one chat-hide' id='chat-three'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>Arriba a la derecha verás este icono <img className="admin-m-face_icon" src={profile} alt="icon face" /></p>
                                    <p>Aquí podrás ver tu perfil y las compras realizadas</p>
                                </div>
                            </div>
                        </div>








                    </div>
                </div>

                






            </div>
        </div>
    )
};

export default Admin_home;