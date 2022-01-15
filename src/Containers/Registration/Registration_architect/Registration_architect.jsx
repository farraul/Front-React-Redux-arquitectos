import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration_architect = () => {
    let history = useNavigate();
    //Hooks
    const [button_send_data_user, setbutton_send_data_user] = useState(<div className="sendButton-no-ready">Registrame</div>);
    const [user, setUser] = useState({
        rol: 'arquitect',

        //ARCHITECT
        a_web_site: '',
        a_description_experience_arquitect: '',
        //PERSONAL DATA
        name: '',
        username: '',
        telf: '',

        c_a: '',
        s_gender: '',

        //ACCOUNT
        email: '',
        password: '',


    });
    const [inputs_data_form, setinputs_data_form] = useState({
        //a_web_site: '',
        a_description_experience_arquitect: '',

        name: '',
        username: '',
        telf: '',

        c_a: '',
        s_gender: '',

        email: '',
        password: '',
    });
    const [ready_data_user, setready_data_user] = useState({

        a_description_experience_arquitect: false,

        name: false,
        username: false,
        telf: false,

        c_a: false,
        s_gender: false,

        email: false,
        password: false,
    });

    useEffect(() => {
        if (ready_data_user.name == true && ready_data_user.email == true && ready_data_user.telf == true && ready_data_user.password == true && /*ready_data_user.a_web_site == true &&*/ ready_data_user.s_gender == true && ready_data_user.c_a == true && ready_data_user.username == true) {
            setbutton_send_data_user(<div className="sendButton" onClick={() => send_data_backend()}>Registrame</div>);
        } else {
            setbutton_send_data_user(<div className="sendButton-no-ready">Registrame</div>);
        }


    }, [inputs_data_form]);


    //Manejadores o Handlers
    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const validate_inputs = (e) => {

        switch (e.target.name) {

            case 'a_description_experience_arquitect':

                //regex para solo letras y más de 4 letras
                if ((e.target.value.length >= 30) && (e.target.value.length <= 150)) { // && (/^[a-z]/gi.test(user.name))  

                    setinputs_data_form({
                        ...inputs_data_form,
                        a_description_experience_arquitect: "✓ Experiencia laboral"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        a_description_experience_arquitect: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        a_description_experience_arquitect: "✗ Entre 30 y 150 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        a_description_experience_arquitect: false
                    });
                };
                break;
            case 'name':
                //regex para solo letras y más de 4 letras
                if ((e.target.value.length >= 4) && (/^[a-z]+$/gi.test(e.target.value) && (e.target.value.length <= 15))) { // && (/^[a-z]/gi.test(user.name))  

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
                        name: "✗ Utiliza solo letras y entre 4 y 15 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        name: false
                    });
                };
                break;


            case 'username':
                //regex para solo letras y más de 4 letras
                if ((e.target.value.length >= 3) && (e.target.value.length <= 25)) { // && (/^[a-z]/gi.test(user.name))  

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
                        username: "✗ Utiliza entre 3 y 25 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        username: false
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

            case 'c_a':
                if (e.target.value.length != false) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
                    setinputs_data_form({
                        ...inputs_data_form,
                        c_a: "✓ Comunidad autónoma"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        c_a: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        c_a: "✗ Comunidad autónoma"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        c_a: false
                    });
                };
                break;

            case 's_gender':
                if (e.target.value.length != false) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
                    setinputs_data_form({
                        ...inputs_data_form,
                        s_gender: "✓ Género"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        s_gender: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        s_gender: "✗ Género"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        s_gender: false
                    });
                };
                break;



            default:
                break;
        }
    }

    const send_data_backend = async () => {


        //Generación del body
        let body = {

            rol: user.rol,

            //arquitect
            web_site: user.a_web_site,
            description_experience: user.a_description_experience_arquitect,
            //
            name: user.name,
            username: user.username,
            telf: user.telf,
            c_a: user.c_a,
            gender: user.s_gender,

            //account
            email: user.email,
            password: user.password,
            id_user: 0,

        }

        //Conexion a axios y envio de datos
        try {
            axios.post("https://api-laravel-arquitectos.herokuapp.com/api/newUser", body).then(res => {

                body.id_user = res.data.user.id;

                let config = {
                    headers: { Authorization: `Bearer ${res.data.token}` }
                };

                res = axios.post("https://api-laravel-arquitectos.herokuapp.com/api/newArchitect", body, config);
                history("/login");

            })

        } catch (error) {
        }
    };

    return (

        <div className="registration-section-1">
            <div>
                <div className='registration-section-3'>
                    <div className='registration-section3-form-width'>
                        <p className='registration-ask-3-architects'>Registro para arquitectos</p>
                        <div className="registration-form-fields-div">

                            <div className='width-100'>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='a_web_site' title='a_web_site' lenght='30' placeholder='Página web' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.a_web_site}</div>
                                <div className='registration-form-full-w'><textarea onChange={e => { validate_inputs(e); userHandler(e) }} className=" no-height registration-form-fields no-height" type='text-area' name='a_description_experience_arquitect' title='a_description_experience_arquitect' lenght='30' placeholder='Pequeña descripcion de tu experiencia laboral' rows="6" cols="50" /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.a_description_experience_arquitect}</div>
                                <h4>Datos personales</h4>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='name' title='name' lenght='30' placeholder='Nombre' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.name}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='username' title='username' lenght='30' placeholder='Apellidos' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.username}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='telf' title='telf' lenght='30' placeholder='Teléfono' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.telf}</div>
                                <div className='registration-form-budget-p'>
                                    <div className='width_50_per_100'>
                                        <select onChange={e => { validate_inputs(e); userHandler(e) }} className='registration-form-full-w select-a' name="c_a" id="c_a">
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
                                        <div className='registration-form-fields-ok'>{inputs_data_form.comunidad_a}</div>
                                    </div>
                                    <div className='width_50_per_100'>
                                        <select onChange={e => { validate_inputs(e); userHandler(e) }} className='registration-form-full-w select-a' name="s_gender" id="s_gender">
                                            <option selected={true} disabled="disabled" >Selecciona género</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                        </select>
                                        <div className='registration-form-fields-ok'>{inputs_data_form.comunidad_gender}</div>
                                    </div>
                                </div>

                                <h4>Crear cuenta</h4>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='email' name='email' title='email' lenght='30' placeholder='Email' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.email}</div>
                                <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='password' name='password' title='password' lenght='30' placeholder='Password' /></div>
                                <div className='registration-form-fields-ok'>{inputs_data_form.password}</div>
                                {button_send_data_user}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration_architect;