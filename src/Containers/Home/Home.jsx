import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import brand1 from '../../images/brand-1.png';
import brand2 from '../../images/brand-2.png';
import brand3 from '../../images/brand-3.png';
import brand4 from '../../images/brand-4.png';
import brand5 from '../../images/brand-5.png';
//import { connect } from 'react-redux';

const Home = () => {

    //Hooks
    const [button_send_data, setbutton_send_data] = useState(<div className="sendButton-no-ready">Registrame</div>);
    const [user, setUser] = useState({
        name: '',
        username: '',
        telf: '',
        city: '',
        rol: '',
        description_order_client: '',
        description_experience_arquitect: '',
        password: '',
        email: '',
    });
    const [inputs_data_form, setinputs_data_form] = useState({
        name: '',
        email: '',
        telf: '',
        password: '',
    });
    const [ready_data_user, setready_data_user] = useState({
        name: false,
        email: false,
        telf: false,
        password: false,
    });

    useEffect(() => {
        if (ready_data_user.name == true && ready_data_user.email == true && ready_data_user.telf == true && ready_data_user.password == true) {
            setbutton_send_data(<div className="sendButton" /*onClick={() => enviaDatosRegistro()}*/>Registrame</div>);
        } else {
            setbutton_send_data(<div className="sendButton-no-ready">Registrame</div>);
        }

        console.log("hay: ", user.rol)

    }, [inputs_data_form]);


    //Manejadores o Handlers
    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log("hay: ", user.rol)
    }

    const validate_inputs = (e) => {

        switch (e.target.name) {
            case 'name':
                console.log('case name length ', e.target.value.length);
                console.log('e', e.target.value);
                //regex para solo letras y más de 4 letras
                if ((e.target.value.length >= 4) && (/^[a-z]+$/gi.test(e.target.value))) { // && (/^[a-z]/gi.test(user.name))  

                    setinputs_data_form({
                        ...inputs_data_form,
                        name: "✓ Nombre"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        name: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        name: "✗ Utiliza solo letras y minimo 4 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        name: false
                    });
                };
                break;
            case 'email':

                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email)) {
                    setinputs_data_form({
                        ...inputs_data_form,
                        email: "✓ Email"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        email: true
                    });
                }
                else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        email: "✗ Email incorrecto"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        email: false
                    });
                };
                break;

            case 'telf':
                if ((e.target.value.length >= 9) && (/[a-zA-Z]\w+$/gi.test(user.name))) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
                    setinputs_data_form({
                        ...inputs_data_form,
                        telf: "✓ Teléfono"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        telf: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        telf: "✗ El teléfono tiene que tener mínimo 9 digitos"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        telf: false
                    });
                };
                break;

            case 'password':
                console.log('case name length ', e.target.value.length);
                if (e.target.value.length >= 5) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
                    setinputs_data_form({
                        ...inputs_data_form,
                        password: "✓ Contraseña"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        password: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        password: "✗ La contraseña tiene que tener mínimo 5 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        password: false
                    });
                };
                break;
            default:
                break;
        }
    }

    return (
        <div>

            <div className='home-section-1'>
                <div>
                    <p className='home-title'>Una Plataforma para arquitectos</p>
                    <p className='home-section-1-n-1'>Nº 1 en España</p>
                </div>
                <div>
                    <div className='home-section-1-buttons'>
                        <div><button className='home-section-1-button' type="button">Pedir Presupuesto</button></div>
                        <div><button className='home-section-1-button' type="button">Buscar Arquitecto</button></div>
                    </div>
                </div>
            </div>

            <div className='home-section-2'>
                <p className='home-brand-trust-us'>Marcas que confian en nosotros</p>
                <div className='home-s-2-brands'>
                    <div>
                        <img className="home-brands" src={brand1} alt="logo" />
                    </div>
                    <div>
                        <img className="home-brands" src={brand2} alt="logo" />
                    </div>

                    <div>
                        <img className="home-brands" src={brand4} alt="logo" />
                    </div>
                    <div>
                        <img className="home-brands" src={brand5} alt="logo" />
                    </div>
                </div>
            </div>

            <div className='home-section-3'>
                <div>
                    <p className='home-ask-3-architects'>Pide tu presupuesto a 3 arquitectos</p>
                    <div className="home-form-fields-div">
                    <h4>Datos personales:</h4>
                        <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='name' title='name' lenght='30' placeholder='Nombre' /></div>
                        <div className='home-form-fields-ok'>{inputs_data_form.name}</div>
                        <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='username' title='username' lenght='30' placeholder='Apellidos' /></div>

                        <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='telf' title='telf' lenght='30' placeholder='Teléfono' /></div>
                        <div className='home-form-fields-ok'>{inputs_data_form.telf}</div>
                        <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='city' title='city' lenght='30' placeholder='Ciudad' /></div>
                        
                        <h4>Crear cuenta:</h4>
                        <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='email' name='email' title='email' lenght='30' placeholder='Email' /></div>
                        <div className='home-form-fields-ok'>{inputs_data_form.email}</div>
                        <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='password' name='password' title='password' lenght='30' placeholder='Password' /></div>
                        <div className='home-form-fields-ok'>{inputs_data_form.password}</div>

                        <div className='home-form-full-w'>
                            <h4>¿Qué perfil eres?</h4>
                            <div className='home-input arquitect'>
                                <input onChange={e => { validate_inputs(e); userHandler(e) }} type="radio" id="rol" name="rol" value="usuario"></input>
                                <label htmlFor="usuario">Busco Arquitecto</label>
                                <input onChange={e => { validate_inputs(e); userHandler(e) }} type="radio" id="input-rol-arquitect" name="rol" value="arquitecto"></input>
                                <label htmlFor="arquitecto">Soy Arquitecto</label>
                            </div>
                        </div>
                        {user.rol == "usuario" ?
                            <div>
                                <p className='home-form-budget-p'>Titulo</p>
                                <div className='home-form-full-w'><input className="home-form-fields" type='text' name='title_order_client' title='title_order_client' lenght='30' placeholder='Reforma cocina, planos edificio, construcción de...' /></div>
                                <p className='home-form-budget-p'>Localidad</p>
                                <div className='home-form-full-w'><input className="home-form-fields" type='text' name='title_order_client' title='title_order_client' lenght='30' placeholder='Valencia, Madrid, Gandia..' /></div>
                                <p className='home-form-budget-p'>Descripción</p>
                                <div className='home-form-full-w'><textarea className=" no-height home-form-fields no-height" type='text-area' name='description_order_client' title='description_order_client' lenght='30' placeholder='Tenemos unas casa de 140 m2 y queremos cambiar...' rows="6" cols="50" /></div>

                            </div>
                            : null}

                        {user.rol == "arquitecto" ?
                            <div>
                                <div className='home-form-full-w'><input className="home-form-fields" type='text' name='web_site' title='web_site' lenght='30' placeholder='Página web' /></div>
                                <div className='home-form-full-w'><textarea className=" no-height home-form-fields no-height" type='text-area' name='description_experience-arquitect' title='description_experience_arquitect' lenght='30' placeholder='Pequeña descripcion de tu experiencia laboral' rows="6" cols="50" /></div>
                            </div>
                            : null}




                       
                        {button_send_data}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;