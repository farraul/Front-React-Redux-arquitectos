import React, { useState, useEffect } from 'react';
import face_icon from '../../images/face-icon.jpg';



const Registration = () => {

  //Hooks
  const [button_send_data, setbutton_send_data] = useState(<div className="sendButton-no-ready">Registrame</div>);
  const [user, setUser] = useState({
      rol: '',
      //USERS
      u_title_order_client: '',
      u_description_order_client: '',
      u_data_to_work: '',
      u_city: '',
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
          setbutton_send_data(<div className="sendButton" onClick={() => send_data_backend()}>Registrame</div>);
      } else {
          setbutton_send_data(<div className="sendButton-no-ready">Registrame</div>);
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
              //users
              u_description_order_client: user.u_description_order_client,
              u_title_order_client: user.u_title_order_client,
              u_data_to_work: user.u_data_to_work,
              u_city: user.u_city,
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
                <div className='home-section-3'>
                    <div className='home-section3-form-width'>
                        <p className='home-ask-3-architects'>Registrate y disfruta</p>
                        <div className="home-form-fields-div">


                            <div className='home-form-full-w'>
                                <h4 className='home-section3-h4'>Selecciona una opción:</h4>
                                <div className='home-input arquitect'>


                                    <div>
                                        <div>
                                            <p className='p-face-icon'>
                                                <img className="face_icon" src={face_icon} alt="icon face" />
                                            </p>
                                        </div>
                                        <div className='home-section3-radio-text'>
                                            <input onChange={e => { validate_inputs(e); userHandler(e) }} type="radio" id="rol" name="rol" value="usuario"></input>
                                            <label htmlFor="usuario">Busco un Arquitecto</label>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <p className='p-face-icon'>
                                                <img className="face_icon" src={face_icon} alt="icon face" />
                                            </p>
                                        </div>
                                        <div className='home-section3-radio-text'>
                                            <input onChange={e => { validate_inputs(e); userHandler(e) }} type="radio" id="rol" name="rol" value="arquitecto"></input>
                                            <label htmlFor="arquitecto">Soy Arquitecto</label>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {user.rol == "usuario" ?
                                <div className='width-100'>
                                    <p className='home-form-budget-p'>Titulo</p>
                                    <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='u_title_order_client' title='u_title_order_client' lenght='30' placeholder='Reforma cocina, planos edificio, construcción de...' /></div>
                                    <p className='home-form-budget-p'>Descripción</p>
                                    <div className='home-form-full-w'><textarea onChange={e => { validate_inputs(e); userHandler(e) }} className=" no-height home-form-fields no-height" type='text-area' name='u_description_order_client' title='u_description_order_client' lenght='30' placeholder='Tenemos unas casa de 140 m2 y queremos cambiar...' rows="6" cols="50" /></div>
                                    <div className='home-form-city-date'>
                                        <div>
                                            <p className='home-form-budget-p'>Localidad</p>
                                            <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='u_city' title='u_city' lenght='30' placeholder='Valencia, Madrid, Gandia..' /></div>
                                        </div>
                                        <div>
                                            <p className='home-form-budget-p'>¿Sabes la fecha aproximada?</p>
                                            <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type="date" name="u_data_to_work" step="1"></input></div>
                                        </div>
                                    </div>
                                </div>
                                : null}

                            {user.rol == "arquitecto" ?
                                <div className='width-100'>
                                    <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='a_web_site' title='a_web_site' lenght='30' placeholder='Página web' /></div>
                                    <div className='home-form-full-w'><textarea onChange={e => { validate_inputs(e); userHandler(e) }} className=" no-height home-form-fields no-height" type='text-area' name='a_description_experience_arquitect' title='a_description_experience_arquitect' lenght='30' placeholder='Pequeña descripcion de tu experiencia laboral' rows="6" cols="50" /></div>
                                </div>
                                : null}
                            <h4>Datos personales</h4>
                            <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='name' title='name' lenght='30' placeholder='Nombre' /></div>
                            <div className='home-form-fields-ok'>{inputs_data_form.name}</div>
                            <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='username' title='username' lenght='30' placeholder='Apellidos' /></div>

                            <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='text' name='telf' title='telf' lenght='30' placeholder='Teléfono' /></div>
                            <div className='home-form-fields-ok'>{inputs_data_form.telf}</div>

                            <h4>Crear cuenta</h4>
                            <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='email' name='email' title='email' lenght='30' placeholder='Email' /></div>
                            <div className='home-form-fields-ok'>{inputs_data_form.email}</div>
                            <div className='home-form-full-w'><input onChange={e => { validate_inputs(e); userHandler(e) }} className="home-form-fields" type='password' name='password' title='password' lenght='30' placeholder='Password' /></div>
                            <div className='home-form-fields-ok'>{inputs_data_form.password}</div>
                            
                            {button_send_data}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;