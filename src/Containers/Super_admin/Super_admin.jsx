import React, { useState, useEffect } from 'react';
import Echart_users_communities from "./components/Echart_users_communities";
import Echart_architects_communities from "./components/Echart_architects_communities";
import Pie_chart from "./components/Pie_chart/users/Pie_chart";
import Pie_chart_architects from "./components/Pie_chart/architects/Pie_chart_architects";
import exit from '../../assets/images/exit.svg';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT_MONEY, LOGOUT } from '../../redux/types';




const Super_Admin = (props) => {
    const history = useNavigate();

    // const go_to_the_link = (url) => {
    //     console.log("history", url)
    //     history("/" + url);
    // }
    const logOut = () => {
        //vaciamos redux. Así ya no estamos logueados
        props.dispatch({ type: LOGOUT });
        props.dispatch({ type: LOGOUT_MONEY });
        history("/login");
    }




    return (

        <div className="super-admin">
            <div className="super-admin-h-section-1">
                <div className='super-admin-menu-top'>
                <div onClick={() => logOut()} className='super-admin-m-icon-profile pointer' id='super-admin-m-comp-data-see-offert-disconnect'>
                        <img className="super-admin-m-face_icon" src={exit} alt="icon face" />
                        <p className='super-admin-m-icon-profile-name'>Desconectar</p>
                    </div>

                </div>
                <div className='super-admin-h-section-2'>

                    <div className='super-admin-container-info'>
                        <div className='super-admin-container-info-s1'>
                            <div className='super-admin-container-info-s1-p'>
                                <h2>Usuarios por comunidades autonomas</h2>
                                <Echart_users_communities />
                            </div>
                            <div className='super-admin-container-info-s1-p'>
                                <h2>Arquitectos por comunidades autonomas</h2>
                                <Echart_architects_communities />
                            </div>
                        </div>

                        <div className='super-admin-container-info-s1'>
                            <div className='super-admin-container-info-s1-2'>
                                <div className='super-admin-container-info-s1-p'>

                                    <Pie_chart />
                                </div>
                            </div>
                            <div className='super-admin-container-info-s1-2'>
                                <div className='super-admin-container-info-s1-p'>

                                    <Pie_chart_architects />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
};


export default connect((state) => ({
    data_user: state.data_user,
    data_money: state.data_money,

}))(Super_Admin);
