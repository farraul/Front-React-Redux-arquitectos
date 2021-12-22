import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import face_icon from '../../../assets/images/face-icon.jpg';
import person from '../../../assets/images/person.svg';
import bag from '../../../assets/images/bag.svg';


const Registration_user = () => {

    const history = useNavigate();
    const go_to_the_link = (url) => {
        history("/" + url);
    }


    //Hooks
    const [button_send_data_user, setbutton_send_data_user] = useState(<div className="sendButton-no-ready">Registrame</div>);
    const [user, setUser] = useState({
        rol: 'user',
        //USERS
        u_title_order_client: '',
        u_description_order_client: '',
        u_data_to_work: '',
        u_city: '',
        comunidad_a: '',

        //PERSONAL DATA
        name: '',
        username: '',
        telf: '',
        //ACCOUNT
        email: '',

    });
    const [inputs_data_form, setinputs_data_form] = useState({
        name: '',
        email: '',
        telf: '',
    });
    const [ready_data_user, setready_data_user] = useState({
        name: false,
        email: false,
        telf: false,
    });

    useEffect(() => {
        if (ready_data_user.name == true && ready_data_user.email == true && ready_data_user.telf == true) {
            setbutton_send_data_user(<div className="sendButton" onClick={() => send_data_backend()}>Registrame</div>);
        } else {
            setbutton_send_data_user(<div className="sendButton-no-ready">Registrame</div>);
        }


    }, [inputs_data_form]);


    //Manejadores o Handlers
    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log("hay: ", user)
    }

    const validate_inputs = (e) => {

        switch (e.target.name) {
            case 'name':

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


            default:
                break;
        }
    }

    const send_data_backend = async () => {

        if (ready_data_user.name && ready_data_user.email && ready_data_user.telf) {

            //Generación del body
            let body = {

                rol: user.rol,
                //users
                u_description_order_client: user.u_description_order_client,
                u_title_order_client: user.u_title_order_client,
                u_data_to_work: user.u_data_to_work,
                u_city: user.u_city,
                u_comunidad_a: user.comunidad_a,

                //
                name: user.name,
                username: user.username,
                telf: user.telf,
                //account
                email: user.email,
            }

            //Conexion a axios y envio de datos
            console.log("ENVIANDO AL BACKEND ESTO....", body);
            /* try {
                 let res = await axios.post("https://app-movies-mongoose.herokuapp.com/api/signup", body);
                 console.log("imprimir res: ", res)
                 //Guardado de datos en localStorage
                 localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
                 setmsgError("Usuario registrado con éxito");
     
                 history("/login");
             } catch (error) {
                 console.log(error)
             }*/

        } else {
            console.log("no es todo true");
        }

    };

    return (

        <div className="registration-section-1">
            <div>
                <div className='registration-section-3'>
                    <div className='registration-section3-form-width'>
                        <p className='registration-ask-3-architects'>Registrate y disfruta</p>
                        <div className="registration-form-fields-div">


                            <div className='registration-form-full-w'>
                                <h4 className='registration-section3-h4'>Te contactarán 3 arquitectos en las próximas 72h</h4>

                            </div>

                            <div className='width-100'>
                                <p className='registration-form-budget-p'>Titulo</p>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='u_title_order_client' title='u_title_order_client' lenght='30' placeholder='Reforma cocina, planos edificio, construcción de...' /></div>
                                <p className='registration-form-budget-p'>Descripción</p>
                                <div className='registration-form-full-w'><textarea onChange={e => { validate_inputs(e); userHandler(e) }} className=" no-height registration-form-fields no-height" type='text-area' name='u_description_order_client' title='u_description_order_client' lenght='30' placeholder='Tenemos unas casa de 140 m2 y queremos cambiar...' rows="6" cols="50" /></div>
                                <div className='registration-form-city-date'>
                                    <div>
                                        <p className='registration-form-budget-p'>Localidad</p>
                                        <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='u_city' title='u_city' lenght='30' placeholder='Valencia, Madrid, Gandia..' /></div>
                                    </div>
                                    <div>
                                        <p className='registration-form-budget-p'>¿Sabes la fecha aproximada?</p>
                                        <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type="date" name="u_data_to_work" step="1"></input></div>
                                    </div>
                                </div>
                                <div className='registration-form-budget-p'>
                                    <p >Comunidad autónoma</p>
                                    <select className='registration-form-full-w select-a'  name="comunidad_a" id="comunidad-a">
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
                                        <option value="La Rioja<">La Rioja</option>
                                        <option value="Comunidad de Madrid">Comunidad de Madrid</option>
                                        <option value="Región de Murcia">Región de Murcia</option>
                                        <option value="Comunidad Foral de Navarra">Comunidad Foral de Navarra</option>
                                        <option value="País Vasco o Euskadi"> País Vasco o Euskadi</option>
                                        

                                    </select>

                                </div>

                                <h4>Datos personales</h4>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='name' title='name' lenght='30' placeholder='Nombre' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.name}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='username' title='username' lenght='30' placeholder='Apellidos' /></div>

                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='telf' title='telf' lenght='30' placeholder='Teléfono' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.telf}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='email' name='email' title='email' lenght='30' placeholder='Email' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.email}</div>
                                {button_send_data_user}

                            </div>








                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration_user;