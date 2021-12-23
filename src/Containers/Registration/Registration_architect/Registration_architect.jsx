import React, { useState, useEffect } from 'react';



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
        comunidad_a:'',
        comunidad_gender:'',

    });
    const [inputs_data_form, setinputs_data_form] = useState({
        a_web_site: '',
        a_description_experience_arquitect: '',
        name: '',
        email: '',
        username: '',
        telf: '',
        password: '',
        comunidad_a:'',
        comunidad_gender:'',
    });
    const [ready_data_user, setready_data_user] = useState({
        a_web_site: false,
        a_description_experience_arquitect: false,
        name: false,
        username:false,
        email: false,
        telf: false,
        password: false,
        comunidad_a:false,
        comunidad_gender:false,
    });

    useEffect(() => {
        if (ready_data_user.name == true && ready_data_user.email == true && ready_data_user.telf == true && ready_data_user.password == true && ready_data_user.a_web_site == true && ready_data_user.comunidad_gender == true && ready_data_user.comunidad_a == true && ready_data_user.username == true ) {
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
            case 'a_web_site':

                //regex para solo letras y más de 4 letras
                if (e.target.value.length >= 4){ // && (/^[a-z]/gi.test(user.name))  

                    setinputs_data_form({
                        ...inputs_data_form,
                        a_web_site: "✓ Página Web"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        a_web_site: true
                    });
                } else {
                    setinputs_data_form({
                        ...inputs_data_form,
                        a_web_site: "✗ Mínimo 4 caracteres"
                    });
                    setready_data_user({
                        ...ready_data_user,
                        a_web_site: false
                    });
                };
                break;
                case 'a_description_experience_arquitect':

                    //regex para solo letras y más de 4 letras
                    if ((e.target.value.length >= 100)&&(e.target.value.length <= 500)){ // && (/^[a-z]/gi.test(user.name))  
    
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
                            a_description_experience_arquitect: "✗ Entre 50 y 300 caracteres"
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
                    if ((e.target.value.length >= 3)&&(e.target.value.length <= 25)) { // && (/^[a-z]/gi.test(user.name))  
    
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
                
                case 'comunidad_a':
                    if (e.target.value.length !=false) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
                        setinputs_data_form({
                            ...inputs_data_form,
                            comunidad_a: "✓ Comunidad autónoma"
                        });
                        setready_data_user({
                            ...ready_data_user,
                            comunidad_a: true
                        });
                    } else {
                        setinputs_data_form({
                            ...inputs_data_form,
                            comunidad_a: "✗ Comunidad autónoma"
                        });
                        setready_data_user({
                            ...ready_data_user,
                            comunidad_a: false
                        });
                    };
                    break;

                    case 'comunidad_gender':
                        if (e.target.value.length !=false) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
                            setinputs_data_form({
                                ...inputs_data_form,
                                comunidad_gender: "✓ Género"
                            });
                            setready_data_user({
                                ...ready_data_user,
                                comunidad_gender: true
                            });
                        } else {
                            setinputs_data_form({
                                ...inputs_data_form,
                                comunidad_gender: "✗ Género"
                            });
                            setready_data_user({
                                ...ready_data_user,
                                comunidad_gender: false
                            });
                        };
                        break;



            default:
                break;
        }
    }

    const send_data_backend = async () => {

        /*if (ready_data_user.name && ready_data_user.email && ready_data_user.telf && ready_data_user.password) {

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
             try {
                 let res = await axios.post("https://app-movies-mongoose.herokuapp.com/api/signup", body);
                 console.log("imprimir res: ", res)
                 //Guardado de datos en localStorage
                 localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
                 setmsgError("Usuario registrado con éxito");
     
                 history("/login");
             } catch (error) {
                 console.log(error)
             }

        } else {
            console.log("no es todo true");
        }*/

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
                                    <select onChange={e => { validate_inputs(e); userHandler(e) }} className='registration-form-full-w select-a' name="comunidad_a" id="comunidad_a">
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
                                        <option value="La Rioja<">La Rioja</option>
                                        <option value="Comunidad de Madrid">Comunidad de Madrid</option>
                                        <option value="Región de Murcia">Región de Murcia</option>
                                        <option value="Comunidad Foral de Navarra">Comunidad Foral de Navarra</option>
                                        <option value="País Vasco o Euskadi"> País Vasco o Euskadi</option>
                                    </select>
                                    <div className='registration-form-fields-ok'>{inputs_data_form.comunidad_a}</div>
                                    </div>
                                    <div className='width_50_per_100'>
                                    <select onChange={e => { validate_inputs(e); userHandler(e) }} className='registration-form-full-w select-a' name="comunidad_gender" id="comunidad_gender">
                                        <option selected={true} disabled="disabled" >Selecciona género</option>
                                        <option value="Marculino">Masculino</option>
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