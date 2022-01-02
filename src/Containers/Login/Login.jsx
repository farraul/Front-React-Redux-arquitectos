import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';



const Login = (props) => {
    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    //Handler o manejador
    const manejadorInputs = (e) => {
        console.log("e: ", e);
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        /*console.log("e.target.name::: ", e.target.name)
        console.log("e.target.value::: ", e.target.value)*/
        console.log("credentials: ", credentials)
    }

    const go_to_login = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/loginUser", body); 
            console.log("imprimir ", body);

            ///Guardamos en REDUX
            console.log("res:",res);

            let datos = res.data;
            console.log("datosss:",datos);
            
             props.dispatch({type:LOGIN,payload:datos});
             
             console.log("propsss:",props);
         
 
 
              setTimeout(() => {
                 history("/admin");
             }, 1000); 
             } catch (error) {
             setmsgError("Error al logearmeee");
             }
        
        
    }

    return (

        <div className="login-section-1">
            <div id="login-form">
                {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
                <h2>Acceder</h2>
                <input className="login-form-input" type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' placeholder="Email" />
                <input className="login-form-input" type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' placeholder="Contraseña" />
                <div className="sendButton" onClick={() => go_to_login()}>Login</div>
                <div className="error">{msgError}</div>
            </div>
        </div>
    )
};

export default connect()(Login);