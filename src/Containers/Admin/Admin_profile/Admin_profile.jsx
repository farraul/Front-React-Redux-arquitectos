import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../../Components/Admin_menu_comp/Admin_menu_comp';
import axios from 'axios';
import { connect } from 'react-redux';


const Admin_profile = (props) => {

    //Hooks
    const [all_buys, setall_buys] = useState([]);


    const see_update = async () => {
        let element = document.getElementById("my-update");
        element.classList.add("my-style");
        let element_back = document.getElementById("open-files-background");
        element_back.classList.add("see-update");
        console.log("run: ")
    }
    const hide_update = () => {
        let element = document.getElementById("my-update");
        element.classList.remove("my-style");

        let element_back = document.getElementById("open-files-background");
        element_back.classList.remove("see-update");
    }
    const see_delete = async () => {
        let element = document.getElementById("my-delete");
        element.classList.add("my-style");
        let element_back = document.getElementById("open-files-background-delete");
        element_back.classList.add("see-update");
        console.log("run: ")
    }
    const hide_delete = () => {
        let element = document.getElementById("my-delete");
        element.classList.remove("my-style");

        let element_back = document.getElementById("open-files-background-delete");
        element_back.classList.remove("see-update");
    }


    useEffect(() => {
        take_reserves(props);
    }, []);

    const take_reserves = async (props) => {
        let body = {
            id_architect: props.data_user.user.id,
        };
        console.log("props de id:", props.data_user.user.id);

        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };
        let res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/Reservesunion",body,config);
        setall_buys(res.data);

        console.log("res", res)
    }

    useEffect(() => {
        console.log("datos recibidos", all_buys)
    }, [all_buys]);


    return (

        <div className="">
            <div className="admin-p-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='admin-p-section-2'>
                    <div className='admin-p-width'>
                        {/* datos perfill*/}
                        <div className='admin-p-profile'>
                            <div className='admin-p-profile-padding'>
                                <h3>Tus datos </h3>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Nombre:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        Raúl
                                    </div>
                                </div>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Apellidos:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        far llobell
                                    </div>
                                </div>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Teléfono:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        628086995
                                    </div>
                                </div>
                                <div className='admin-p-profile-info'>
                                    <div className='admin-p-profile-t'>
                                        Email:
                                    </div>
                                    <div className='admin-p-profile-d'>
                                        raulfarllobell@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='admin-p-profile-buttons-down'>

                                    <div onClick={() => see_update()} className='admin-p-profile-buttons-down-update'>
                                        Actualizar

                                    </div>
                                    <div onClick={() => see_delete()} className='admin-p-profile-buttons-down-delete'>
                                        Borrar cuenta
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*fin data user */}

                    {/*reserva, carga css del componente de offers */}
                    <div className='iframe-arquitects-iframe-profile-section'>
                        <h2 className='cent'>Tus clientes</h2>

                        <div className='iframe-arquitects-iframe-profile'>
                        {all_buys.map(name => <div key={name.id}>

                            <div className='iframe-arquitects-h'>
                                <div className='iframe-arquitects-lead'>
                                    <div className='iframe-arquitects-client'>
                                        <div className='iframe-arquitects-client-data-top'>
                                            <div className='iframe-arquitects-client-name'>
                                                <h3>{name.name}</h3>
                                            </div>
                                            <div className='iframe-arquitects-client-title'>
                                                <h4>{name.u_title_order_client}</h4>
                                            </div>
                                            <div className='iframe-arquitects-client-descrip'>
                                                <p>{name.u_description_order_client}</p>
                                            </div>
                                            <div className='iframe-arquitects-client-descrip-extra'>
                                                <div className='iframe-arquitects-client-location'>
                                                    <strong>Ciudad: </strong>{name.u_city}
                                                </div>
                                                <div className='iframe-arquitects-client-date'>
                                                    <strong>Fechas: </strong>{name.u_date_to_work}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='iframe-arquitects-client-info-contact'>
                                            <div className='iframe-arquitects-client-info-contact-data'>
                                                <div className='iframe-arquitects-client-contact'>
                                                    Telf:<span className=''>{name.telf}</span>
                                                </div>
                                                <div className='iframe-arquitects-client-contact-email'>
                                                    <span className=''>{name.email}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>)}
                        </div>
                    </div>

                    <div className="" id="open-files-background">
                        <div className="class-update" id="my-update">

                            <div className="close-window" id="X" onClick={() => hide_update()}>X</div>

                            <div className='iframe-arquitects-pop-up'>
                                <input className='iframe-arquitects-pop-up-data' type="text" name="name" title="name" lenght="30" placeholder="Nombre"></input>
                            </div>
                            <div className='iframe-arquitects-pop-up'>
                                <input className='iframe-arquitects-pop-up-data' type="text" name="name" title="name" lenght="30" placeholder="Apellidos"></input>
                            </div>
                            <div className='iframe-arquitects-pop-up'>
                                <input className='iframe-arquitects-pop-up-data' type="text" name="name" title="name" lenght="30" placeholder="Teléfono"></input>
                            </div>
                            <div>
                                <p className='update-email-nochange'>*El email no se puede cambiar</p>
                            </div>
                            <div className="update-send-data" /*onClick={() => send_data_backend()}*/>Actualizar</div>

                        </div>

                        <div className="" id="open-files-background-delete">
                            <div className="class-update" id="my-delete">

                                <div className="close-window" id="X" onClick={() => hide_delete()}>X</div>
                                <h3>¿Quieres borrar tu cuenta?</h3>
                                <h4>Perderás todos los datos actuales</h4>
                                <div className='update-delete-user'>
                                    <div onClick={() => hide_delete()} className='update-delete-user-buttons no-delete'>
                                        No
                                    </div>
                                    <div className='update-delete-user-buttons yes-delete'>
                                        Sí
                                    </div>

                                </div>

                                <div className='iframe-arquitects-pop-up'>


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
}))(Admin_profile);
