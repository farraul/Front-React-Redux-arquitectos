import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Super_Admin_menu_comp from '../../../Components/Super_Admin_menu_comp/Super_Admin_menu_comp';
import money from '../../../assets/images/money.png'
import email from '../../../assets/images/email.png'

const Super_Admin_Home = (props) => {
    let res;
    //const history = useNavigate();
    const [all_users, setall_users] = useState([]);


    // const go_to_the_link = (url) => {
    //     console.log("history", url)
    //     history("/" + url);
    // }


    useEffect(() => {
        takeusers();
    }, []);

    const takeusers = async () => {
        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };
        try {
            res = await axios.get("https://api-laravel-arquitectos.herokuapp.com/api/Users", config);

            setall_users(res.data);
            console.log("all_users: ", all_users)

        }
        catch (error) {
            console.log("Error al enviar datos");
        }
    }




    return (

        <div className="super-admin">
            <div className="super-admin-h-section-1">
                <div className='super-admin-menu-top'>
                    <div>
                        <Super_Admin_menu_comp />
                    </div>


                    <div className='super-admin-home-div-all-users'>
                        <div className='super-admin-home-div-all-users-titles'>
                            <div id="super-admin-home-div-id" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    Id
                                </p>
                            </div>
                            <div id="super-admin-home-div-name" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    Nombre
                                </p>
                            </div>
                            <div id="super-admin-home-div-username" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    Apellidos
                                </p>
                            </div>
                            <div id="super-admin-home-div-email" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    Email
                                </p>
                            </div>
                            <div id="super-admin-home-div-telf" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    Teléfono
                                </p>
                            </div>

                            <div id="super-admin-home-div-gender" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    Género
                                </p>
                            </div>
                            <div id="super-admin-home-div-c_a" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    C.autonoma
                                </p>
                            </div>
                            <div id="super-admin-home-div-money" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                  €
                                </p>
                            </div>
                            <div id="super-admin-home-div-money" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                    
                                </p>
                            </div>
                            <div id="super-admin-home-div-money" className="super-admin-home-div">
                                <p className="super-admin-home-p">
                                 
                                </p>
                            </div>
                            <div>
                                <div>

                                </div>
                                <div>

                                </div>

                            </div>


                        </div>
                        {all_users?.map(run => {
                            return (
                                <div>

                                    <div className="super-admin-home-div-general">
                                        <div id="super-admin-home-div-id" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.id}
                                            </p>
                                        </div>
                                        <div id="super-admin-home-div-name" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.name}
                                            </p>
                                        </div>
                                        <div id="super-admin-home-div-username" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.username}
                                            </p>
                                        </div>
                                        <div id="super-admin-home-div-email" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.email}
                                            </p>
                                        </div>
                                        <div id="super-admin-home-div-telf" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.telf}
                                            </p>
                                        </div>

                                        <div id="super-admin-home-div-gender" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.gender}
                                            </p>
                                        </div>
                                        <div id="super-admin-home-div-c_a" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.c_a}
                                            </p>
                                        </div>
                                        <div id="super-admin-home-div-money" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                                {run.money}
                                            </p>
                                        </div>
                                        <div id="super-admin-home-div-money" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                            <img className="icons-super-admin" src={money} alt="money"  />
                                            </p>
                                        </div>
{/*${run.email}*/}
                                        <a href={`mailto:  ${run.email}`}>
                                        <div id="super-admin-home-div-money" className="super-admin-home-div">
                                            <p className="super-admin-home-p">
                                            <img className="icons-super-admin" src={email} alt="email"  />
                                            </p>
                                        </div>
                                        </a>


                                       
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className='super-admin-h-section-2'>

                </div>
            </div>
        </div>


    )
};


export default connect((state) => ({
    data_user: state.data_user,
    data_money: state.data_money,

}))(Super_Admin_Home);
