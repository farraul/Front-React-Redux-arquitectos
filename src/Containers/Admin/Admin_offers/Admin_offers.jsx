import React, { useState, useEffect } from 'react';
import Admin_menu_comp from '../../../Components/Admin_menu_comp/Admin_menu_comp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { DECREMENT_MONEY } from '../../../redux/types';




const Admin_offers = (props) => {
    let history = useNavigate();


    let res;
    let res_money;

    //Hooks
    const [all_leads, setall_leads] = useState([]);

    useEffect(() => {
        takeleads();
    }, []);


    const takeleads = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };
        try {
            res = await axios.get("https://api-laravel-arquitectos.herokuapp.com/api/Leads", config);
            setall_leads(res.data);

        }

        catch (error) {
            console.log("Error al enviar datos");
        }

    }
    const select_lead = async (name) => {


        let body = {
            id_architect: props.data_user.user.id,
            id_lead: name.id,
        }

        ///////////////////////////////////
        let restmoney = props.data_money - 1;
        debugger
        console.log("restmoney", restmoney);

        let body_money = {
            money: restmoney,
        }

        let config = {
            headers: { Authorization: `Bearer ${props.data_user.token}` }
        };
        try {
            res = await axios.post("https://api-laravel-arquitectos.herokuapp.com/api/newReserve", body, config);
        } catch (error) {
            console.log("Error al enviar datos");
        }

        try {
            res_money = await axios.put(`https://api-laravel-arquitectos.herokuapp.com/api/UserMoney/${props.data_user?.user?.id}`, body_money, config);

            props.dispatch({ type: DECREMENT_MONEY, payload: restmoney });
            history("/admin-profile");
        } catch (error) {
        }



    }

    useEffect(() => {
    }, [all_leads]);



    return (

        <div className="">
            <div className="admin-offers-section-1">
                <div>
                    <Admin_menu_comp />
                </div>
                <div className='admin-offers-section-2'>
                    <div>
                        <h1 className='admin-offers-section-2-title'>Últimos leads disponibles</h1>


                        <div className='iframe-arquitects'>

                            <div className='iframe-arquitects-h'>

                                {all_leads.map(name => <div key={name.id}>

                                    <div className='iframe-arquitects-lead'>
                                        <div className='iframe-arquitects-client'>
                                            <div className='iframe-arquitects-client-data-top'>
                                                {/* <div className='iframe-arquitects-client-name'>
                                                    <div>Raúl</div>
                                                </div> */}
                                                <div className='iframe-arquitects-client-title'>
                                                    <h4>{name.u_title_order_client}</h4>
                                                </div>
                                                <div className='iframe-arquitects-client-descrip'>
                                                    <p>{name.u_description_order_client}</p>
                                                </div>
                                                <div className='iframe-arquitects-client-descrip-extra'>
                                                    <div className='iframe-arquitects-client-location'>
                                                        <strong>Ciudad:</strong> {name.u_city}
                                                    </div>
                                                    <div className='iframe-arquitects-client-date'>
                                                        <strong>Fechas:</strong> {name.u_date_to_work}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='iframe-arquitects-client-info-contact'>
                                                <div className='iframe-arquitects-client-info-contact-data'>
                                                    <div className='iframe-arquitects-client-contact'>
                                                        Teléfono:<span className='iframe-arquitects-client-blur'>6666666</span>
                                                    </div>
                                                    <div className='iframe-arquitects-client-contact-email'>
                                                        Email: <span className='iframe-arquitects-client-blur'>pruea@gmasil.com</span>
                                                    </div>
                                                </div>
                                                <div className='iframe-arquitects-client-buy-div'>
                                                    <button className='iframe-arquitects-client-buy' onClick={() => select_lead(name)}>Comprar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}

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
    data_money: state.data_money
}))(Admin_offers);
