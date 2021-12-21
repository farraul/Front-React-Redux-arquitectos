import React, { useState, useEffect } from 'react';
import face_icon from '../../../assets/images/face-icon.jpg';
import person from '../../../assets/images/person.svg';
import bag from '../../../assets/images/bag.svg';


const Registration_architect = () => {

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
        //ACCOUNT
        email: '',
        password: '',

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

    const send_data_backend = async () => {

        if (ready_data_user.name && ready_data_user.email && ready_data_user.telf && ready_data_user.password) {

            //Generación del body
            let body = {

                rol: user.rol,
                
                //arquitect
                a_web_site: user.a_web_site,
                a_description_experience_arquitect: user.a_description_experience_arquitect,
                //
                name: user.name,
                username: user.username,
                telf: user.telf,
                //account
                email: user.email,
                password: user.password,
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
                        <p className='registration-ask-3-architects'>Registro para arquitectos</p>
                        <div className="registration-form-fields-div">

                                <div className='width-100'>
                                    <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='a_web_site' title='a_web_site' lenght='30' placeholder='Página web' /></div>
                                    <div className='registration-form-full-w'><textarea onChange={e => { validate_inputs(e); userHandler(e) }} className=" no-height registration-form-fields no-height" type='text-area' name='a_description_experience_arquitect' title='a_description_experience_arquitect' lenght='30' placeholder='Pequeña descripcion de tu experiencia laboral' rows="6" cols="50" /></div>

                                    <h4>Datos personales</h4>
                                    <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='name' title='name' lenght='30' placeholder='Nombre' /></div>
                                    <div className='registration-form-fields-ok'>{inputs_data_form.name}</div>
                                    <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='username' title='username' lenght='30' placeholder='Apellidos' /></div>

                                    <div className='registration-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="registration-form-fields" type='text' name='telf' title='telf' lenght='30' placeholder='Teléfono' /></div>
                                    <div className='registration-form-fields-ok'>{inputs_data_form.telf}</div>

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