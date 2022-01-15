import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';
import { LOGIN_MONEY } from '../../redux/types';

const Login = (props) => {
    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const go_to_login = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/loginUser", body);
            ///Guardamos en REDUX
            let datos = res.data;
            props.dispatch({ type: LOGIN, payload: datos });

            if (datos.user[0].money === 0) {
                props.dispatch({ type: LOGIN_MONEY, payload: "0" });

            } else {
                props.dispatch({ type: LOGIN_MONEY, payload: datos.user[0].money });
            }

            if (datos.user[0].rol == "super-admin") {
                history("/super-admin-home");

            } else {
                setTimeout(() => {
                    history("/admin");
                }, 1000);
            }
        } catch (error) {
            setmsgError("Error al conectar, revisa tus datos");
        }
    }

    return (

        <div className="login-section-1">
            <div id="login-form">
                {/*<pre>{JSON.stringify(credentials, null,2)}</pre>  --->para mostrar datos*/}
                <h2>Acceder</h2>
                <input className="login-form-input" type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' placeholder="Email" />
                <input className="login-form-input" type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' placeholder="Contraseña" />
                <br/>
                <div className="error">{msgError}</div>

                <div className="sendButton" onClick={() => go_to_login()}>Login</div>
            </div>
        </div>
    )
};

export default connect()(Login);