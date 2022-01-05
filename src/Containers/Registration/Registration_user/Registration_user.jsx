import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Registration_user = () => {
    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [ready_to_backend, setready_to_backend,] = useState("");

    const [button_send_data_user, setbutton_send_data_user] = useState(<div className="sendButton-no-ready">Registrame</div>);
    const [user, setUser] = useState({
        rol: 'user',
        //USERS
        u_title_order_client: '',
        u_description_order_client: '',
        u_date_to_work: '',
        u_city: '',
       // comunidad_a: '',
        //PERSONAL DATA
        name: '',
        username: '',
        telf: '',
        email: '',
        c_a: '',
        select_gender: '',
        rol:'user',

    });
    const [inputs_data_form, setinputs_data_form] = useState({
        u_title_order_client: '',
        u_description_order_client: '',
        u_date_to_work: '',
        u_city: '',
        name: '',
        username: '',
        telf: '',
        email: '',
        c_a: '',
        select_gender: '',
    });
    const [ready_data_user, setready_data_user] = useState({
        u_title_order_client: false,
        u_description_order_client: false,
        u_date_to_work: false,
        u_city: false,
        name: false,
        username: false,
        email: false,
        telf: false,
        c_a: false,
        select_gender: false,
    });

    useEffect(() => {
        if (ready_data_user.name === true && ready_data_user.username === true && ready_data_user.email === true && ready_data_user.telf === true && ready_data_user.u_title_order_client === true && ready_data_user.u_description_order_client === true && ready_data_user.u_city === true && ready_data_user.u_date_to_work === true && ready_data_user.c_a === true && ready_data_user.select_gender === true) {
            setbutton_send_data_user(<div className="sendButton" onClick={() => send_data_backend()}>Registrame</div>);
            setready_to_backend(true);
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
            /////////////nombre proyecto titutlo/////////////////////////////
            case 'u_title_order_client':
                if ((e.target.value.length >= 4) && (e.target.value.length <= 20)) {
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_title_order_client: "✓ Título"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_title_order_client: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_title_order_client: "✗ Utiliza entre 4 y 20 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_title_order_client: false
                    });
                }; break;
            ///description///////////////////////////////////////////////////
            case 'u_description_order_client':
                if ((e.target.value.length >= 100) && (e.target.value.length <= 400)) { // && (/^[a-z]/gi.test(user.name))  
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_description_order_client: "✓ Descripción "
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_description_order_client: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_description_order_client: "✗ Utiliza entre 100 y 400 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_description_order_client: false
                    });
                }; break;
            ///city-localidad///////////////////////////////////////////////////
            case 'u_city':
                if ((e.target.value.length >= 3) && (e.target.value.length <= 15)) { // && (/^[a-z]/gi.test(user.name))  
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_city: "✓ Localidad "
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_city: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_city: "✗ Utiliza entre 3 y 15 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_city: false
                    });
                }; break;
            ///u-date-to-work///////////////////////////////////////////////////
            case 'u_date_to_work':
                if (e.target.value.length !== false) { // && (/^[a-z]/gi.test(user.name))  
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_date_to_work: "✓ Fecha correcta "
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_date_to_work: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        u_date_to_work: "✗ Asigna una fecha correcta"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        u_date_to_work: false
                    });
                }; break;
            /// nombre persona/////////////////////////////////////////////////////////
            case 'name':
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
                }; break;
            /// nombre persona/////////////////////////////////////////////////////////
            case 'username':
                if ((e.target.value.length >= 3) && (/^[a-z]+$/gi.test(e.target.value))) { // && (/^[a-z]/gi.test(user.name))  
                    setinputs_data_form({
                        ...inputs_data_form,
                        username: "✓ Apellidos"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        username: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        username: "✗ Utiliza solo letras y minimo 3 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        username: false
                    });
                }; break;
            ///email////////////////////////
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
                }; break;
            ////teléfono///////////////
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
                }; break;
           /// seleccionar select comunity autonoma/////////////////////////
            case 'c_a':
                if (e.target.value.length !== false) { // && (/^[a-z]/gi.test(user.name))  
                    setinputs_data_form({
                        ...inputs_data_form,
                        c_a: "✓ Comunidad correcta "
                    });
                    setready_data_user({
                        ...ready_data_user,
                        c_a: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        c_a: "✗ Comunidad incorrecta"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        c_a: false
                    });
                }; break;
            /// seleccionar genero/////////////////////////////////
            case 'select_gender':
                if (e.target.value.length !== false) { // && (/^[a-z]/gi.test(user.name))  
                    setinputs_data_form({
                        ...inputs_data_form,
                        select_gender: "✓ Género correcto"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        select_gender: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        select_gender: "✗ Género incorrecto"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        select_gender: false
                    });
                }; break;
            default:
                break;
        }
    }

    const send_data_backend = async () => {

        //if (ready_data_user.name && ready_data_user.email && ready_data_user.telf && ready_data_user.u_title_order_client) {
              //Generación del body
              console.log("user",user)
              let body = {
  
                  rol: user.rol,
                  //users
                  u_description_order_client: user.u_description_order_client,
                  u_title_order_client: user.u_title_order_client,
                  u_data_to_work: user.u_data_to_work,
                  u_city: user.u_city,
                  c_a: user.c_a,
  
                  //
                  name: user.name,
                  username: user.username,
                  telf: user.telf,
                  email: user.email,
                  c_a: user.c_a,
                  gender: user.select_gender,
              }
              console.log("body",body)
              //Conexion a axios y envio de datos
               try {
                   let res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/newUser", body);
                   console.log("imprimir res: ", res)
                   //Guardado de datos en localStorage
                   setmsgError("Usuario registrado con éxito");
       
                   history("/login");
               } catch (error) {
                setmsgError("✗ Error el mail está ya registrado");
                   console.log(error)
               }

        
    };

    return (
        <div className="registration-section-1">
            <div>
                <div className='registration-section-3'>
                    <div className='registration-section3-form-width'>
                        <p className='registration-ask-3-architects'>¿Buscas un arquitecto?</p>
                        <div className="registration-form-fields-div">
                            <div className='registration-form-full-w'>
                                <h4 className='registration-section3-h4'>Te contactarán 3 arquitectos en las próximas 72h</h4>
                            </div>
                            <div className='width-100'>
                                <p className='registration-form-budget-p'>Titulo</p>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='u_title_order_client' title='u_title_order_client' lenght='30' placeholder='Reforma cocina, planos edificio, construcción de...' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.u_title_order_client}</div>
                                <p className='registration-form-budget-p'>Descripción</p>
                                <div className='registration-form-full-w'><textarea onChange={e => { validate_inputs(e); userHandler(e) }} className=" no-height registration-form-fields no-height" type='text-area' name='u_description_order_client' title='u_description_order_client' lenght='30' placeholder='Tenemos unas casa de 140 m2 y queremos cambiar...' rows="6" cols="50" /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.u_description_order_client}</div>
                                <div className='registration-form-city-date'>
                                    <div>
                                        <p className='registration-form-budget-p'>Localidad</p>
                                        <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='u_city' title='u_city' lenght='30' placeholder='Valencia, Madrid, Gandia...' /></div>
                                        <div className='registration-form-fields-ok'>{inputs_data_form.u_city}</div>
                                    </div>
                                    <div>
                                        <p className='registration-form-budget-p'>¿Sabes la fecha aproximada?</p>
                                        <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type="date" name="u_date_to_work" title="u_date_to_work" step="1"></input></div>
                                        <div className='registration-form-fields-ok'>{inputs_data_form.u_date_to_work}</div>
                                    </div>
                                </div>
                                <h4>Datos personales</h4>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='name' title='name' lenght='30' placeholder='Nombre' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.name}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='username' title='username' lenght='30' placeholder='Apellidos' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.username}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='telf' title='telf' lenght='30' placeholder='Teléfono' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.telf}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='email' name='email' title='email' lenght='30' placeholder='Email' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.email}</div>
                                <div className='registration-form-budget-p'>
                                    <div className='width_50_per_100'>
                                        <select onChange={e => { validate_inputs(e); userHandler(e) }} className='registration-form-full-w select-a' name="c_a" id="c_a">
                                            <option value={true} /*disabled="disabled"*/ >Comunidad autónoma</option>  {/*selected*/}
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
                                        <div className='registration-form-fields-ok'>{inputs_data_form.c_a}</div>
                                    </div>
                                    <div className='width_50_per_100'>
                                        <select onChange={e => { validate_inputs(e); userHandler(e) }} className='registration-form-full-w select-a' name="select_gender" id="select_gender">
                                            <option Value={true} >Género</option>
                                            <option value="Marculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                        </select>
                                        <div className='registration-form-fields-ok'>{inputs_data_form.select_gender}</div>
                                    </div>
                                </div>
                                <p>{msgError}</p>
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