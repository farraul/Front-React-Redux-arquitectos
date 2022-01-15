import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../../Components/Admin_menu_comp/Admin_menu_comp';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGOUT, LOGOUT_MONEY, UPDATE_USER } from '../../../redux/types';
import { useNavigate } from 'react-router-dom';


const Admin_profile = (props) => {
    const history = useNavigate();

    //Hooks
    const [all_buys, setall_buys] = useState([]);
    const [userData, setUserData] = useState(props.data_user.user[0]);
    const [msgError, setmsgError] = useState("");

    const see_update = async () => {
        let element = document.getElementById("my-update");
        element.classList.add("my-style");
        let element_back = document.getElementById("open-files-background");
        element_back.classList.add("see-update");
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
            id_architect: props.data_user.user[0].id,
        };
        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };
        let res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/Reservesunion", body, config);
        setall_buys(res.data);
    }

    useEffect(() => {
    }, [all_buys]);


    const deleteuser = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };

        try {
            let res = await axios.delete(`https://api-laravel-arquitectos.herokuapp.com/api/User/${props.data_user?.user[0]?.id_user}`, config);
            history("/");
            props.dispatch({ type: LOGOUT });
            props.dispatch({ type: LOGOUT_MONEY });
            history("/login");
        } catch (error) {
        }
    }

    const manejaInputs = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    /////////////update data///////////////7777777777777777777777777777777777777777777777777777777
    const update = async () => {

        let token = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };

        try {
            let res = await axios.put(`https://api-laravel-arquitectos.herokuapp.com/api/User/${props.data_user?.user[0]?.id_user}`, userData, token);
            let res_architect = await axios.put(`https://api-laravel-arquitectos.herokuapp.com/api/Architect/${props.data_user?.user[0]?.id}`, userData, token);

            let movedata = [userData]
            props.dispatch({ type: UPDATE_USER, payload: movedata });
            setmsgError(`Updated profile data ${res.data.user.body}....`);
        } catch (error) {
            setmsgError("Failed to update data");
        }
    }

    return (
        <div className="">
            <div className="admin-p-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='admin-p-section-2'>
                    <div className='admin-p-width'>
                        <div className='admin-p-profile'>
                            <h3 className='admin-profile-data-h3'>Tus datos </h3>
                            <div className='admin-p-profile-sections-padding'>
                                <div className='admin-p-data-display-h'>
                                    <div className='admin-p-profile-padding'>

                                        <div className='admin-p-profile-info'>
                                            <div className='admin-p-profile-t'>
                                                Nombre:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].name}
                                            </div>
                                        </div>
                                        <div className='admin-p-profile-info'>
                                            <div className='admin-p-profile-t'>
                                                Apellidos:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].username}
                                            </div>
                                        </div>
                                        <div className='admin-p-profile-info'>
                                            <div className='admin-p-profile-t'>
                                                Teléfono:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].telf}
                                            </div>
                                        </div>
                                        <div className='admin-p-profile-info no-border'>
                                            <div className='admin-p-profile-t'>
                                                Email:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='admin-p-profile-padding'>

                                        <div className='admin-p-profile-info'>
                                            <div className='admin-p-profile-t'>
                                                C.autonoma:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].c_a}
                                            </div>
                                        </div>
                                        <div className='admin-p-profile-info'>
                                            <div className='admin-p-profile-t'>
                                                Genero:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].gender}
                                            </div>
                                        </div>
                                        <div className='admin-p-profile-info'>
                                            <div className='admin-p-profile-t'>
                                                Página Web:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].web_site}
                                            </div>
                                        </div>
                                        <div className='admin-p-profile-info no-border'>
                                            <div className='admin-p-profile-t'>
                                                Id:
                                            </div>
                                            <div className='admin-p-profile-d'>
                                                {props.data_user.user[0].id}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div id="admin-profile-description-data" className='admin-p-profile-info admin-profile-border-top no-border'>
                                        <div className='admin-p-profile-t admin-p-profile-t-description'>
                                            Descripción:
                                        </div>
                                        <div className='admin-p-profile-d'>
                                            {props.data_user.user[0].description_experience}
                                        </div>
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
                        <div className='admin-p-section-2-price'>

                            <div>
                                <h3>Saldo restante:</h3>
                                <div className='admin-p-section-2-price-money'>{props.data_money} €</div>

                                <div className='admin-profile-info-time-to-recharge'>
                                    <p>Una vez hecho el pago, recibirás la recarga en 24/72 horas </p>
                                </div>

                            </div>
                            <a href="https://www.paypal.com/paypalme/raulfar" target="_blank" className='link-to-buy-paypal'>
                                <div className='admin-p-section-2-price-money-recarge'>  Recargar Cartera  </div>
                            </a>
                        </div>
                    </div>

                    {/*reserva, carga css del componente de offers */}
                    <div className='iframe-arquitects-iframe-profile-section'>
                        <h2 className='cent'>Tus clientes</h2>

                        <div className='iframe-arquitects-iframe-profile'>
                            {all_buys.map((name, index) => <div key={index}>

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
                                                        <span className=''>{name.telf}</span>
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
                                <input className='iframe-arquitects-pop-up-data' type="text" name="name" title="name" lenght="30" onChange={manejaInputs} placeholder="Nombre"></input>
                            </div>
                            <div className='iframe-arquitects-pop-up'>
                                <input className='iframe-arquitects-pop-up-data' type="text" name="username" title="username" lenght="30" onChange={manejaInputs} placeholder="Apellidos"></input>
                            </div>
                            <div className='iframe-arquitects-pop-up'>
                                <input className='iframe-arquitects-pop-up-data' type="text" name="telf" title="telf" lenght="30" onChange={manejaInputs} placeholder="Teléfono"></input>
                            </div>
                            <div>
                                <p className='update-email-nochange'>*El email no se puede cambiar</p>
                            </div>
                            <div className='iframe-arquitects-pop-up'>
                                <textarea className='iframe-arquitects-pop-up-data admin-profile-text-a-update' type="text" name="description_experience" title="name" lenght="30" onChange={manejaInputs} placeholder="Descripción"></textarea>
                            </div>
                            <div className='iframe-arquitects-pop-up'>
                                <input className='iframe-arquitects-pop-up-data' type="text" name="web_site" title="web_site" lenght="30" onChange={manejaInputs} placeholder="Página Web"></input>
                            </div>

                            <select onChange={manejaInputs} className='registration-form-full-w select-a m-t-2' name="c_a" id="c_a">
                                <option selected={true} disabled="disabled">Comunidad autónoma</option>
                                <option value="andalucia">Andalucía</option>
                                <option value="Aragón">Aragón</option>
                                <option value="Principado de Asturias">Principado de Asturias</option>
                                <option value="Illes Balears">Illes Balears</option>
                                <option value="Canarias">Canarias</option>
                                <option value="Cantabria">Cantabria</option>
                                <option value="Castilla La Mancha">Castilla La Mancha</option>
                                <option value="Cataluña">Cataluña</option>
                                <option value="Comunidad Valenciana">Comunidad Valenciana</option>
                                <option value="Extremadura">Extremadura</option>
                                <option value="Galicia">Galicia</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Comunidad de Madrid">Comunidad de Madrid</option>
                                <option value="Región de Murcia">Región de Murcia</option>
                                <option value="Comunidad Foral de Navarra">Comunidad Foral de Navarra</option>
                                <option value="País Vasco o Euskadi"> País Vasco o Euskadi</option>
                            </select>

                            <select onChange={manejaInputs} className='registration-form-full-w select-a m-t-1' name="s_gender" id="s_gender">
                                <option selected={true} disabled="disabled" >Selecciona género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>

                            <div className="update-send-data" onClick={() => update()} >Actualizar</div>
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
                                    <div onClick={() => deleteuser()} className='update-delete-user-buttons yes-delete'>
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
    data_money: state.data_money,
}))(Admin_profile);
