import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
import { LOGOUT_MONEY } from '../../redux/types';
import { useNavigate } from 'react-router-dom';
import menu from '../../assets/images/menu.svg';
import exit from '../../assets/images/exit.svg';
import graphic from '../../assets/images/graphic.svg';

const Super_Admin_menu_comp = (props) => {

    const history = useNavigate();
    const go_to_the_link = (url) => {
        history("/" + url);
    }
    const logOut = () => {
        //vaciamos redux. Así ya no estamos logueados
        props.dispatch({ type: LOGOUT });
        props.dispatch({ type: LOGOUT_MONEY });
        history("/login");
    }

    const [timenow, settimenow] = useState([""]);
    let today;
    let Time;

    useEffect(() => {
        today = new Date();
        componentDidMount();
    });

    //crear hora para admin
    const componentDidMount = () => {
        Time = setInterval(() => {
            clearInterval(Time)
            let hoy = new Date();
            let fecha = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
            settimenow(fecha);
        }, 1000

        )
    };

    return (
        <div>
            <div className='admin-m-comp-section1'>
                <div className='admin-m-comp-iframe-info'>
                    <div className='admin-m-comp-data'>
                        {timenow}
                    </div>
                </div>

                <div className='admin-m-comp-data-right'>
                    <div className='admin-m-comp-menu-links'>
                        <div onClick={() => go_to_the_link("super-admin-home")} className='admin-m-comp-data-see-offert pointer' id='admin-m-comp-data-see-offert-menu'>
                            <img className="admin-m-face_icon" src={menu} alt="icon face" />
                            <p>Panel principal</p>
                        </div>
                        <div onClick={() => go_to_the_link("super-admin")} className='admin-m-comp-data-see-offert pointer' id='admin-m-comp-data-see-offert-menu'>
                            <img className="admin-m-face_icon" src={graphic} alt="icon face" />
                            <p>Graficos</p>
                        </div>
                    </div>

                    <div onClick={() => logOut()} className='admin-m-icon-profile pointer' id='admin-m-comp-data-see-offert-disconnect'>
                        <img className="admin-m-face_icon" src={exit} alt="icon face" />
                        <p className='admin-m-icon-profile-name'>Desconectar</p>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default connect((state) => ({
    data_user: state.data_user,
}))(Super_Admin_menu_comp);