import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../../Components/Admin_menu_comp/Admin_menu_comp';
import max from '../../../assets/images/max.png'

import { connect } from 'react-redux';

let time;


const Admin_home = (props) => {
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
            element_three.classList.add("underline_menu");

        }, 8000);

        setTimeout(() => {
            let element = document.getElementById("chat-three");
            element.classList.remove("chat-see");
            let element_two = document.getElementById("chat-four");
            element_two.classList.add("chat-see");
            let element_three = document.getElementById("admin-m-comp-data-see-offert-offerts");
            element_three.classList.add("underline_menu");
            let element_four = document.getElementById("admin-m-comp-data-see-offert-profile");
            element_four.classList.remove("underline_menu");

        }, 15000);
        setTimeout(() => {
            let element = document.getElementById("chat-four");
            element.classList.remove("chat-see");
            let element_two = document.getElementById("chat-five");
            element_two.classList.add("chat-see");
            let element_three = document.getElementById("admin-m-comp-data-see-offert-menu");
            element_three.classList.add("underline_menu");
            let element_four = document.getElementById("admin-m-comp-data-see-offert-offerts");
            element_four.classList.remove("underline_menu");

        }, 22000);
        time=setTimeout(() => {
            let element = document.getElementById("chat-five");
            element.classList.remove("chat-see");
            let element_two = document.getElementById("chat-six");
            element_two.classList.add("chat-see");
            let element_four = document.getElementById("admin-m-comp-data-see-offert-menu");
            element_four.classList.remove("underline_menu");
        }, 29000);
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
                        <h3 className='align-center'>Regalo de bienvenida: 3€</h3>
                    </div>

                    <div className='chat' id='chat-tour'>
                        <div onClick={() => help()} className="help" id="help-start" >Iniciar Tour</div>

                        <div className='chat-conversation-one chat-hide' id='chat-one'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>Hola soy Max 👦👋</p>
                                    <p>Quiero darte la bienvenida a Arquitect...</p>
                                </div>
                            </div>
                            <div className="myProgress">
                                <div className="myBar-10">
                                    <div className="label-loading-home-admin">10%</div>
                                </div>
                            </div>
                        </div>
                        <div className='chat-conversation-one chat-hide' id='chat-two'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>A continuación realizaremos juntos el tour de Arquitect, empezamos... 🎬</p>

                                </div>
                            </div>
                            <div className="myProgress">
                                <div className="myBar-20">
                                    <div className="label-loading-home-admin">20%</div>
                                </div>
                            </div>
                        </div>
                        <div className='chat-conversation-one chat-hide' id='chat-three'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>Arriba a la derecha tenemos el "perfil, en el que podrás: </p>
                                    <p>* Mirar y actualizar tu perfil 🖊️ </p>
                                    <p>* Revisar las compras realizadas 📊</p>
                                </div>
                            </div>
                            <div className="myProgress">
                                <div className="myBar-40">
                                    <div className="label-loading-home-admin">40%</div>
                                </div>
                            </div>
                        </div>
                        <div className='chat-conversation-one chat-hide' id='chat-four'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>En "Ver ofertas" podrás:</p>

                                    <p>* Comprar los leads disponibles 💲</p>
                                </div>
                            </div>
                            <div className="myProgress">
                                <div className="myBar-60">
                                    <div className="label-loading-home-admin">60%</div>
                                </div>
                            </div>
                        </div>
                        <div className='chat-conversation-one chat-hide' id='chat-five'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>En el "Panel principal" podrás: </p>
                                    <p>* Es donde estamos actualmente, podrás acceder si quieres revisar el tour de nuevo 📕</p>
                                </div>
                            </div>
                            <div className="myProgress">
                                <div className="myBar-80">
                                    <div className="label-loading-home-admin">80%</div>
                                </div>
                            </div>
                        </div>
                        <div className='chat-conversation-one chat-hide' id='chat-six'>
                            <div className='chat-conversation-one-inside'>
                                <div>
                                    <img className="support-max" src={max} alt="max" />
                                </div>
                                <div className='chat-conversation-inside-text'>
                                    <p>Para finalizar decirte que abajo a la derecha tiene un teléfono para contactarme en caso de dudas ☎️</p>
                                    <p>Un saludo y disfruta 😎😎</p>
                                </div>
                            </div>
                            <div className="myProgress">
                                <div className="myBar-100">
                                    <div className="label-loading-home-admin">100%</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
};



export default connect((state) => ({
    data_user: state.data_user,
}))(Admin_home);
